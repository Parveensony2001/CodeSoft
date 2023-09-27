document.addEventListener('DOMContentLoaded', function(){
    var scrollLinks = document.querySelectorAll('.nav-menu a');
       for(var i = 0;i<scrollLinks.length;i++){
        scrollLinks[i].addEventListener('click', function(event) {
            event.preventDefault();
            var target  = document.querySelector(this.getAttribute('href'));
            var offset = target.offsetTop;

            window.scrollTo({
                top: offset,
                behavior:'smooth'
        });
        });
       }
});




window.addEventListener("scroll", checkScroll);

