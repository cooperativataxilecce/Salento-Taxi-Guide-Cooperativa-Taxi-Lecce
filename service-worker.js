const CACHE_NAME = "salento-taxi-guide-v1";

const FILES_TO_CACHE = [
    "/Salento-Taxi-Guide-Cooperativa-Taxi-Lecce/",
    "/Salento-Taxi-Guide-Cooperativa-Taxi-Lecce/index.html",
    "/Salento-Taxi-Guide-Cooperativa-Taxi-Lecce/style.css",
    "/Salento-Taxi-Guide-Cooperativa-Taxi-Lecce/script.js",
    "/Salento-Taxi-Guide-Cooperativa-Taxi-Lecce/logo.png"
];


self.addEventListener("install", function(event){

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache){

            return cache.addAll(FILES_TO_CACHE);

        })
    );

});



self.addEventListener("fetch", function(event){

    event.respondWith(

        caches.match(event.request)
        .then(function(response){

            return response || fetch(event.request);

        })

    );

});
