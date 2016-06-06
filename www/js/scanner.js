function Scan() {
    cordova.plugins.barcodeScanner.scan(
         function (result) {
             alert("We got a barcode\n" +
                   "Result: " + result.text + "\n" +
                   "Format: " + result.format + "\n" +
                   "Cancelled: " + result.cancelled);
         },
         function (error) {
             alert("Scanning failed: " + error);
         },
         {
             "preferFrontCamera": true, // iOS and Android
             "showFlipCameraButton": true, // iOS and Android
             "prompt": "Place a barcode inside the scan area", // supported on Android only
             "formats": "QR_CODE,PDF_417", // default: all but PDF_417 and RSS_EXPANDED
             "orientation": "landscape" // Android only (portrait|landscape), default unset so it rotates with the device
         }
      );

}

var resultDiv;

document.addEventListener("deviceready", init, false);
function init() {
    document.querySelector("#startScan").addEventListener("touchend", startScan, false);
    resultDiv = document.querySelector("#results");
}

function startScan() {

    cordova.plugins.barcodeScanner.scan(
		function (result) {
		    var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
		    resultDiv.innerHTML = s;
		},
		function (error) {
		    alert("Scanning failed: " + error);
		}
	);

}


function foto() {


    navigator.camera.getPicture(sucessoCPF, onFail, {
        targetWidth: 331,
        allowEdit: true,
        quality: 50,
        destinationType: Camera.DestinationType.DATA_URL
    });


    function sucessoCPF(imageData) {
        alert(imageData);
    }




    cordova.plugins.barcodeScanner.scan(
		function (result) {
		    var s = "Result: " + result.text + "<br/>" +
			"Format: " + result.format + "<br/>" +
			"Cancelled: " + result.cancelled;
		    resultDiv.innerHTML = s;
		},
		function (error) {
		    alert("Scanning failed: " + error);
		}
	);

}