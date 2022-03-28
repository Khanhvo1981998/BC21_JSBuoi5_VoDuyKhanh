document.getElementById("tim-giai-thua").addEventListener("click",
function () {

    var n = document.getElementById("txt-so-giai-thua-n").value*1;

    var giaiThua = 1;
    for(var i = 1; i<=n; i++){
        giaiThua = giaiThua * i;

    }
     document.getElementById("xuatb3").innerHTML = giaiThua;
});
