document.getElementById("in-the-div").addEventListener("click",
function () {

    for (var i =1; i<=10; i++){
        document.write("<div>thẻ div</div>");
    }
     var theDiv = document.getElementsByTagName("div");

    

    for (var i = 0; i < theDiv.length; i++){
    //     // Vị trí chẵn => màu đỏ
         if ((i + 1) % 2 == 0){
             theDiv[i].style.background = "red";
         }
         else { // Vị trí lẽ => màu xanh
             theDiv[i].style.background = "blue";
         }
     }
    
    
});
