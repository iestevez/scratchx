(function(ext) {
    // Cleanup function when the extension is unloaded
    ext._shutdown = function() {};

    // Status reporting code
    // Use this to report missing hardware, plugin or unsupported browser
    ext._getStatus = function() {
        return {status: 2, msg: 'Ready'};
    };

    ext.send_to_google = function() {
        // Code that gets executed when the block is run
        var xhttp;
if (window.XMLHttpRequest) {
    xhttp = new XMLHttpRequest();
    } else {
    // code for IE6, IE5
    xhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
var url="https://script.google.com/macros/s/AKfycbyvVMtRVnnuASUJQJ2rUcPD6Twms_oBuYQ1Oc5GAcEELnb5HHa2/exec"
xhttp.open("GET", url+"?nombre=pepe&tiempo=0.0", true);
xhttp.send();
        
    };

    // Block and block menu descriptions
    var descriptor = {
        blocks: [
            // Block type, block name, function name
            [' ', 'Enviar datos a hoja de cálculo', 'send_to_google'],
        ]
    };

    // Register the extension
    ScratchExtensions.register('My first extension', descriptor, ext);
})({});