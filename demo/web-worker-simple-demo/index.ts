let worker = new Worker('worker.js')

// let message = {
//     string: 'this is a demo',
//     number: 800,
//     bool: true,
//     array: [1, 2, 3, 4], 
//     literal: {
//         key: 'k1',
//         value: 'v1'
//     }
// }

worker.postMessage([2, 5, 7, 5, 6, 10]);

worker.addEventListener('message', (event: MessageEvent) => {
    console.log('Message received by main is...');
    console.log(event.data);
});