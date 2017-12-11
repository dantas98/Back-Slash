  $(document).ready(function(){

    function scroll(){
      alert("passou");
      document.querySelector("#contactUs").scrollIntoView({
        behavior: 'smooth'
      });
    };

  });
