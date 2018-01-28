this.addEventListener('message', (event) => {
    console.log('Message received by worker is...');
    console.log(event.data);
    this.postMessage({
        status: 'message received with following keys: ' + Object.keys(event.data)
    });
});
