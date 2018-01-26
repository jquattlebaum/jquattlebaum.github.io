console.log('Start Service!');


if ('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('/jquattlebaum.github.io/service-worker.js')
        .then(function () { console.log('Service Worker Registered'); });
}


/*
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js', { scope: '/timeclock.sps.k12.va.us/' })
        .then(function (reg) {
            console.log('Success! Scope is ' + reg.scope);
        }).catch(function (error) {
            console.log('Failed with ' + error);
        });
}
*/

console.log('End Service!');