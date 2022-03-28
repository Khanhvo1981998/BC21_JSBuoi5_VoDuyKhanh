document.getElementById("tim-so-nho-nhat").addEventListener("click",
function () {

     var soNguyen = document.getElementById("txt-so-nguyen-duong").value*1;
        var n = 1;
     while(soNguyen < 10000){
         n++;
         soNguyen = soNguyen+n;
     }
    
    
    console.log(soNguyen);
     document.getElementById("xuatb1").innerHTML = n;
});
