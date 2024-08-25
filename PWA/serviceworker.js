console.log("I am a service worker");
const url = ["/", "app.js", "styles.css", 
    "https://fonts.gstatic.com/s/materialicons/v67/flUhRq6tzZclQEJ-Vdg-IuiaDsNcIhQ8tQ.woff2",
    "PWA/index.html"]

// Prefetching the assets
globalThis.addEventListener("install", event => {
    caches.open("pwa").then(cache => {
        cache.addAll(url)
    })
})


// // Cache first strategy
// self.addEventListener("fetch", event => {
//     event.respondWith(
//         caches.match(event.request)  // searching in the cache
//             .then( response => {
//                 if (response) {
//                     // The request is in the cache 
//                     return response; // cache hit
//                 } else {
//                     // We need to go to the network  
//                     return fetch(event.request);  // cache miss
//                 }
//             })
//     );
// });

// State while revalidate strategy
self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then( response => {
                // Even if the response is in the cache, we fetch it
                // and update the cache for future usage
                const fetchPromise = fetch(event.request).then(
                     networkResponse => {
                        caches.open("assets").then( cache => {
                            cache.put(event.request, networkResponse.clone());
                            return networkResponse;
                        });
                    });
                // We use the currently cached version if it's there
                return response || fetchPromise; // cached or a network fetch
            })
        );
    }); 


// globalThis.addEventListener("fetch", event => {
//     console.log(`HTTP: ${event.request.url}`)

//     event.respondWith(new Response("Hey! hehe"))
// })