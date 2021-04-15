<script type="text/javascript" src="javascript.js">
   document.getElementById("grow").addEventListener("click", function() { 
  
       document.getElementById("box").style.height = "300px",
       document.getElementById("box").style.width = "300px"

   });

   document.getElementById("blue").addEventListener("click", function(){
       document.getElementById("box").style.background="blue";

  });

  document.getElementById("fade").addEventListener("click", function(){
       document.getElementById("box").style.opacity = "0.5";

  });

  document.getElementById("reset").addEventListener("click", function (){
       document.getElementById("box").style.height = "150px",
       document.getElementById("box").style.width = "150px",
       document.getElementById("box").style.background = "orange"
       document.getElementById("box").style.opacity = "1";
  });

</script>
