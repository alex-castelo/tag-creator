// funcion para conseguir el tag id
function getPlacementId() {
    return document.getElementById('placement_id').value;
}


function getTag() {
    const placementId = getPlacementId()
    const finalTag = "<script src=\"https://pub.admanmedia.com/go?id=" + placementId + "\" async=\"\"></script>"
    document.getElementById('final-tag').innerText = finalTag
}

