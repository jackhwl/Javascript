const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', event => {
                event.preventDefault();
                // const url1 = event.target.href;
                const url = event.target.getAttribute('href')
                Router.go(url);
            });
        })
        // Event Handler for URL changes
        window.addEventListener('popstate', event => {
            console.log(`Popstate event: ${event.state.route}`);
            Router.go(event.state.route, false);
        });
        // Check the initial URL
        Router.go(location.pathname)
    },
    go: async (route, addToHistory = true) => {
        
        if (addToHistory) {
            history.pushState({route}, '', route);
        }
        let pageElement = null;
        switch (route) {
            case "/":
                pageElement = document.createElement("menu-page");
                break;
            case "/order":
                await import('../components/OrderPage.js');
                pageElement = document.createElement("order-page");
                break;
            default:
                if (route.startsWith("/product-")) {
                    pageElement = document.createElement("details-page");
                    const paramId = route.substring(route.lastIndexOf("-") + 1);
                    pageElement.dataset.productId = paramId;
                }
                break;
        }
        if (pageElement) {
            function changePage() {
                let currentPage = document.querySelector("main").firstElementChild;
                if (currentPage) {
                    currentPage.remove();
                    document.querySelector("main").appendChild(pageElement);
                } else {
                    document.querySelector("main").appendChild(pageElement);
                }
            }
            if (document.startViewTransition) {
                document.startViewTransition(() => changePage())
            } else {
                changePage()
            }

            window.scrollX = 0;
        }
    }
}

export default Router;