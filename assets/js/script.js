var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,

    },
});
var swiper2 = new Swiper(".stepsSwiper", {
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '">' + 0 + (index + 1) + "</span>";
      },

    },
});

window.addEventListener('load', function() {
    
    document.getElementById('one-show').style.opacity = '1';

    setTimeout(function() {
        document.getElementById('two-show').style.opacity = '1';
    }, 1000);

    setTimeout(function() {
        document.getElementById('three-show').style.opacity = '1';
    }, 2000);

    setTimeout(function() {
        document.getElementById('four-show').style.opacity = '1';
    }, 3000);
});
