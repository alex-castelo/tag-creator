function tag(id) {
    return "<script src=\"https://pub.admanmedia.com/go?id="+ id +"\" async=\"\"></script>"
}

var x = $("placement_id").val();
console.log(x);

function printTag(id){
    document.getElementById('final-tag').innerHTML = tag(id);
}

document.getElementById('submit').onclick = function () {
    tag();
}