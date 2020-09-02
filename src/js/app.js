$(document).on('ready', function() {
  $(".regular").slick({
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: '25px',
        }
      },
    ]
  });
  $(".regular1").slick({
    dots: false,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 2,
          centerMode: true,
          centerPadding: '25px',
          responsive:
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
              }
            },
  });
});

console.log('bla appjs');