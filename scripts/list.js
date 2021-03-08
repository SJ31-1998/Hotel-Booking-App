function mapFunction() {
    var x = document.getElementById("mapView");
    if (x.style.display != "none") {
         x.style.display = "none";
    } 
    else {
        x.style.display = "flex";
        x.style.justifyContent="flex-start";
        
    }
}

