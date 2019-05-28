$(document).ready(function () {
  console.log("coisa");
  $("#geral").click(function () { 
    $(".coisas").hide();
  });

  $("#black").click(function () { 
    $("#formbase").show();  
    
  });
$("#white").click(function(){
  $("#formbase").show();
  $("#teste1").show();
  $("#teste2").show();
  
})
});
