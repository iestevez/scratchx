(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.my_first_block = function() {
        // Code that gets executed when the block is run
    };

 ext.send_to_google = function(nombre,tiempo) {
        // Code that gets executed when the block is run
        var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
var url="https://script.google.com/macros/s/AKfycbyvVMtRVnnuASUJQJ2rUcPD6Twms_oBuYQ1Oc5GAcEELnb5HHa2/exec"
xhttp.open("GET", url+"?nombre="+nombre+"&tiempo="+tiempo, true);
xhttp.send();
        
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'my first block', 'my_first_block'],
            [' ', 'Enviar nombre %s y tiempo %n a hoja de cálculo', 'send_to_google','default',0],
            
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});