document.getElementById("tinh-tong").addEventListener("click",
function () {

    var x = document.getElementById("txt-x").value * 1;
    var n = document.getElementById("txt-n").value * 1;
    var lt = 1;
    var s = 0;
    for(var i = 1; i<= n; i++){
        lt = lt * x;
        s += lt
    }
     document.getElementById("xuatb4").innerHTML = s;
});
