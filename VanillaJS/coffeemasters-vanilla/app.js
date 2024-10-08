import Store from './services/Store.js';
import API from './services/API.js';
import Router from './services/Router.js';
import { loadData } from './services/Menu.js';

import { MenuPage } from './components/MenuPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import ProductItem from './components/ProductItem.js';

window.app = {}
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', async () => {
    loadData();
    app.router.init();
});

window.addEventListener('appcartchange', async () => {
    const badge = document.getElementById('badge');
    const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);
    badge.textContent = qty;
    badge.hidden = qty == 0;
});