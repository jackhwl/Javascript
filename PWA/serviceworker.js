console.log("I am a service worker");

globalThis.addEventListener("fetch", event => {
    console.log(`HTTP: ${event.request.url}`)

    event.respondWith(new Response("Hey! hehe"))
})