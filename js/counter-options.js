
   /* Counter
    -----------------------------------------------*/
  jQuery('.counter-item').appear(function() {
    jQuery('.counter-number').countTo();
    jQuery(this).addClass('funcionando');
    console.log('funcionando');
  });