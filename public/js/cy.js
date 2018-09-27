var removepowercount = 0;
function removepower(){
    if(($("#powerby_sohu .service-wrap-w a").length > 0 
        && $("#powerby_sohu .service-wrap-w a").html() == '') 
            || removepowercount >10){
        return;
    }
    removepowercount++;
    $("#powerby_sohu .service-wrap-w a").html('');
    setTimeout(removepower,1000);
}
$(function () {
    removepower();
});