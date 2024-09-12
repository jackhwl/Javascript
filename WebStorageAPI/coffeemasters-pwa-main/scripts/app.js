import Menu from './Menu.js';
import Order from './Order.js';
import Router from './Router.js';

//  Request Persistance Storage
(async function() {
    if (navigator.storage && navigator.storage.persist) {
        if (!await navigator.storage.persisted()) {
            const result = await navigator.storage.persist()
            console.log(`The persistance request returned: ${result}`)
        }
    }
})();


window.addEventListener("DOMContentLoaded", () => {
    Router.init();
    Menu.load();
    Order.render();
 } );
