export class MenuPage extends HTMLElement {
    constructor() {
        super();

        this.root = this.attachShadow({ mode: 'open' });
    }
    // when the component is attached to the DOM
    connectedCallback() {
        const template = document.getElementById('menu-page-template');
        const templateContent = template.content.cloneNode(true);
        this.root.appendChild(templateContent)
    }
}
customElements.define('menu-page', MenuPage);
