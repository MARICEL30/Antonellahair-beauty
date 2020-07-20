    function openNav() {
        
        document.getElementById("mySidepanel").style.width = "250px";
    }
    
    function closeNav(){
        
        document.getElementById("mySidepanel").style.width = "0";
    }
    
    
    
  
    
    
   
    
        
        var mybutton = document.getElementById("Botox");
        
        
       window.onscroll = function() {scrollFunction()};
        
        
        
        function scrollFunction() {
        if( document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
            
            mybutton.style.display = "block";
            
        } else {
            mybutton.style.display = "none";
        }
    }
        
        
      function topFunction(){
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
      }
        