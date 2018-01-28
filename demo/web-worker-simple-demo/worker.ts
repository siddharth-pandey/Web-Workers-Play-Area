
this.addEventListener('message', (event: MessageEvent) => {
    console.log('Message received by worker is...');
    console.log(event.data);

    this.postMessage({
        status: 'message received with following keys: ' + Object.keys(event.data)
    });
});

