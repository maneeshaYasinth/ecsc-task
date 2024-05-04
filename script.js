function showSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.style.display = 'flex';
  sidebar.classList.add('show-sidebar'); // Add class for transition effect
}

function hideSidebar() {
  const sidebar = document.querySelector('.sidebar');
  sidebar.classList.remove('show-sidebar'); // Remove class for transition effect
  setTimeout(() => { // Hide sidebar after transition completes
    sidebar.style.display = 'none';
  }, 300); // Adjust transition duration if needed
}

document.getElementById('btn-more').addEventListener('click', function() {
  document.getElementById('page-content').style.display = 'block'; // Display the page content when the button is clicked
  document.getElementById('btn-more').style.display = 'none'; // Hide the "more" button
});

document.getElementById('btn-close').addEventListener('click', function() {
  document.getElementById('page-content').style.display = 'none'; // Hide the page content when the close button is clicked
  document.getElementById('btn-more').style.display = 'flex'; // Show the "more" button
});

$(document).ready(function(){
  $('.slider').slick({
    dots: false,
    arrows: false,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
          arrows: false
        }
      }
    ]
  });

  $('.slider').on('afterChange', function(event, slick, currentSlide){
    $('.card-slider').removeClass('focused');
    $('.slider .slick-active').eq(1).addClass('focused');
  });

  $('.card').on('keydown', function(event) {
    if (event.key === 'Enter') {
      $(this).focus();
    }
  });
});

