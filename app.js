console.log('app is ready');

var form = document.querySelector("#forom");
if (form !== null){
    form.addEventListener('submit', function(evt){
       evt.preventDefault();
       console.log('submit');
        var result = validation.init(form);
        if(result) {
            Server.send(form);
        }
    });

}

