const Router = {
    init: () => {
        document.querySelectorAll('a.navlink').forEach(a => {
            a.addEventListener('click', event => {
                event.preventDefault();

                console.log("Link clicked");
            });
        })
        // Check the initial URL
        Router.go(location.pathname)
    },
    go: (route, addToHistory = true) => {
        console.log(`Going to ${route}`);

        if (addToHistory) {
            history.pushState({route}, '', route);
        }
    }
}

export default Router;