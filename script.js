function test(){


  var status = localStorage.getItem("status");
   //alert(status)
   if(status == null){

    setTimeout(function(){ 

      $("#sec1").css("visibility","hidden");

  }, 4000);

    setTimeout(function(){ 

      $("#sec2").css("visibility","hidden");

      localStorage.setItem("status", "1"); 

  }, 6000);

   }else{

    $("#sec1").css("visibility","hidden");
    $("#sec2").css("visibility","hidden");


   }

    

  }
 