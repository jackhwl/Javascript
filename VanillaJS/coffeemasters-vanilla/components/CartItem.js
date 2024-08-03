import { removeFromCart } from "../services/Order.js";

export default class CartItem extends HTMLElement {
    constructor() {
        super();    
    }   

    connectedCallback() {
        const item = JSON.parse(this.dataset.item);
        this.innerHTML = ""; // Clear the element

        const template = document.getElementById("cart-item-template");
        //const content = template.content.cloneNode(true);

        function interpolate(str, params) {
            let names = Object.keys(params);
            let values = Object.values(params);
            return new Function(...names, `return \`${str}\``)(...values);
        }

        this.innerHTML = interpolate(template.innerHTML, {
            qty: `${item.quantity}x`,
            name: item.product.name,
            price: `$${item.product.price.toFixed(2)}`
        });
        // this.appendChild(content);    


        // this.querySelector(".qty").textContent = `${item.quantity}x`;
        // this.querySelector(".name").textContent = item.product.name;
        // this.querySelector(".price").textContent = `$${item.product.price.toFixed(2)}`;

        this.querySelector("a.delete-button").addEventListener("click", event => {
            removeFromCart(item.product.id);
        })
      }
}

customElements.define("cart-item", CartItem);