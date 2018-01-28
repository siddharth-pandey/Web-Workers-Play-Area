this.addEventListener('message', (event) => {
    console.log('Message received by worker is...');
    if (event.data && event.data.length > 0) {
        console.log(event.data);
        let result = event.data[0];
        for (let i = 1; i < event.data.length; i++) {
            result = result * event.data[i];
        }
        this.postMessage(result);
    }
    else {
        console.log('Array of number is expected by worker!');
    }
});
