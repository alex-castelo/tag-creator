// funcion para pintar el tag id
function tag() {
    var placementId = document.getElementById('placement_id').value;
    return "<script src=\"https://pub.admanmedia.com/go?id=" + placementId + "\" async=\"\"></script>"
}


function imprimirTag() {
    document.getElementById('final-tag').innerText = tag();
}

