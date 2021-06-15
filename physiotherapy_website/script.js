document.querySelector(document).ready(function(){

    //hamburger Toggle
    document.querySelector('.humbarger').click(function(event){
    document.querySelector('.menu-list').slideToggle(500);
    event.preventDefault();
    
    document.querySelector('.menu-list li a').click(function(event) {
        if (document.querySelector(window).width() < 768) {
          document.querySelector('.menu-list').slideUp(500);
          event.preventDefault(); 
        }
      });
});

});