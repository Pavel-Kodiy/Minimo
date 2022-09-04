let slideIndex = 1;
const arrovPrev = document.getElementById('arrovPrev');
const arrovNext = document.getElementById('arrovNext');

const nextSlide = () => {
   showSlides(slideIndex += 1);
}

const previousSlide = () => {
   showSlides(slideIndex -= 1);
}

const currentSlide = (n) => {
   showSlides(slideIndex = n);
}

const showSlides = (n) => {
   const slides = document.getElementsByClassName("item");

   if (n > slides.length) {
      slideIndex = 1
   };

   if (n < 1) {
      slideIndex = slides.length
   };

   for (let slide of slides) {
      slide.style.display = "none";
   };
  
   slides[slideIndex - 1].style.display = "block";
}

const submitForm = (event) => {
   event.preventDefault();
};

$(function () {
   let $window = $(window);
   let $sidebar = $(".sidebar");
   let $sidebarTop = $sidebar.position().top;
   let $sidebarHeight = $sidebar.height();
   let $footer = $('.footer');
   let $footerTop = $footer.position().top;

   $window.scroll(function (event) {
      $sidebar.addClass("fixed");
      var $scrollTop = $window.scrollTop();
      var $topPosition = Math.max(0, $sidebarTop - $scrollTop);

      if ($scrollTop + $sidebarHeight > $footerTop) {
         var $topPosition = Math.min($topPosition, $footerTop - $scrollTop - $sidebarHeight);
      }

      $sidebar.css("top", $topPosition);
   });
});


document.addEventListener('DOMContentLoaded', () => {
   showSlides(slideIndex);
   arrovPrev.addEventListener('click', () => previousSlide());
   arrovNext.addEventListener('click', () => nextSlide());
});

