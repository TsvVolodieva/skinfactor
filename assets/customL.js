function testimonialsSlider() {
    var splide = new Splide( '#slider-quotes',{
        drag: false
    });

    splide.on( 'pagination:mounted', function( data ) {
      data.items.forEach( function( item ) {
        item.button.textContent = String( item.page + 1 );
      });
    });

    splide.mount();
}

this.testimonialsSlider();
  