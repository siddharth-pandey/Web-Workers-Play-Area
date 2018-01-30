let counter = 0

this.addEventListener('connect', (event) => {
    console.log(event);

    let port = event.ports[0];
    port.start();

    port.addEventListener('message', function(e){
        console.log('Message received by worker is...');
        if (e.data && e.data.length > 0) {
            console.log(e.data);
            let result = e.data[0];
            for (let i = 1; i < e.data.length; i++) {
                result = result * e.data[i];
            }
            
            port.postMessage(result);

            counter = result;

            setInterval(function(){
                counter--;
                port.postMessage('Result-- is ' + counter);
            }, 500);
        }
        else {
            console.log('Array of number is expected by worker!');
        }
    });
});
