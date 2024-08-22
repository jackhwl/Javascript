console.log("I am a service worker");
const url = ["index.html", "app.js", "styles.css"]

// Prefetching the assets
globalThis.addEventListener("install", event => {
    caches.open("pwa").then(cache => {
        cache.addAll(url)
    })
})

// globalThis.addEventListener("fetch", event => {
//     console.log(`HTTP: ${event.request.url}`)

//     event.respondWith(new Response("Hey! hehe"))
// })