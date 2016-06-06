jQuery(document).ready(function() {

   

})

jQuery(document).ready(function myfunction() {
    document.addEventListener("deviceready", onDeviceReady, false);
});

function onDeviceReady() {
    alert('DIPOSITIVO PRONTO');
    var optionsWatchPosition = { timeout: 10000, maximumAge: 11000, enableHighAccuracy: true };
    navigator.geolocation.watchPosition(success, error, optionsWatchPosition);
}

function success(pos) {

    alert('TESTE');
    var crd = pos.coords;
    localStorage.setItem('latitude', crd.latitude);
    localStorage.setItem('longitude', crd.longitude);

};
function error(err) {
    ExibeMensagem('Localização desabilitada, favor habilitar a localização');
};


function BtnEntrar() {
    window.location.assign("inicio.html")
}

function BtnCadastrar() {
    window.location.assign("cadastro.html")
}

