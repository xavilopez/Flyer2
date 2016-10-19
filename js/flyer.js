$(document).ready(function(){
  //////////////
//exportPNG//
  var element = $("#container"); // global variable
  var getCanvas; // global variable

    $("#crtButton").on('click', function () {
         console.log("sfd");
         html2canvas(element, {
         onrendered: function (canvas) {
                getCanvas = canvas;
                console.log("entro 1");
             }
         });
         var imgageData = getCanvas.toDataURL("image/png");
         // Now browser starts downloading it instead of just showing it
         var newData = imgageData.replace(/^data:image\/png/, "data:application/octet-stream");
        /* $("#btn-Convert-Html2Image").attr("download", "your_pic_name.png").attr("href", newData);*/

         /*document.getElementById("theimage").src = canvas.toDataURL();*/

   			var canvas = $("canvas");
        Canvas2Image.saveAsPNG(canvas);
        console.log("salio 1");
    });
 //exportPNG//
//////////////
)};
