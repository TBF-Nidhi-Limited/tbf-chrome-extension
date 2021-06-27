$(window).on('load', function() { // makes sure the whole site is loaded 
 
    $('.preloader').delay(1500).fadeOut('slow'); // will fade out the white DIV that covers the website. 

  })



 $('.gridicon').on('click',function(){
  $('.preloader').fadeIn('slow').fadeOut('slow');
  $('.tbf-schemes').removeClass('d-none')
  $('.tbf-body ').addClass('d-none')
  $('.gridicon').addClass('d-none')
  $('.houseicon').removeClass('d-none')

 })

 $('.houseicon').on('click',function(){
  $('.preloader').fadeIn('slow').fadeOut('slow');
  $('.tbf-schemes').addClass('d-none')
  $('.tbf-body ').removeClass('d-none')
  $('.gridicon').removeClass('d-none')
  $('.houseicon').addClass('d-none')
 })




  window.tr = 0
  window.tf = 0
  window.tc = 0

  window.r_am = 0
  window.r_in = 0
  window.totalr_in=0
  window.totalr_amt=0

  window.f_am = 0
  window.f_in = 0
  window.totalf_in=0
  window.totalf_amt=0

  window.c_am = 0
  window.c_in = 0
  window.totalc_in=0
  window.totalc_amt=0

  $('.timer_in').on('change', function() {
    $('.loader').fadeIn('medium').fadeOut('medium');
    tr = parseInt($(this).val())
    r_am = $('.investedr_in').val()
    r_in = $('.interestr_in').val()
    totalr_in = Math.round((r_am*(tr*(tr+1))*r_in)/2400)
    totalr_amt = totalr_in + (r_am*tr)
    $('.invested_r').text((r_am*tr).toLocaleString('en-IN'))
    $('.interest_r').text((totalr_in).toLocaleString('en-IN'))
    $('.total_r').text((totalr_amt).toLocaleString('en-IN'))
  
  });
  $('.timef_in').on('change', function() {
    $('.loader').fadeIn('medium').fadeOut('medium');
    tf = parseInt($(this).val())
    f_am = $('.investedf_in').val()
    f_in = $('.interestf_in').val()
    totalf_in = Math.round((f_am*(f_in/100))/12)
    totalf_amt = totalf_in * tf
    $('.invested_f').text((f_am).toLocaleString('en-IN'))
    $('.interest_f').text((totalf_in).toLocaleString('en-IN'))
    $('.total_f').text((totalf_amt).toLocaleString('en-IN'))
  });

  $('.timec_in').on('change', function() {
    $('.loader').fadeIn('medium').fadeOut('medium');
    tc = (parseInt($(this).val()))/3   
    c_am = $('.investedc_in').val()
    c_in = $('.interestc_in').val()
    totalc_in = Math.pow((1+((c_in/100)/4)),tc);    
    totalc_amt = Math.round(totalc_in * c_am)
    $('.invested_c').text((c_am).toLocaleString('en-IN'))
    $('.interest_c').text( Math.round(parseFloat(totalc_in * c_am ) - parseFloat(c_am)).toLocaleString('en-IN')  )
    $('.total_c').text((totalc_amt).toLocaleString('en-IN'))

    
  });

  $('input').keypress(function(e){
    if ((e.which != 46 || $(this).val().indexOf('.') != -1) && (e.which < 48 || e.which > 57))  {
      //display error message
      alert("Enter Numeric Charaters Only !")
      return false;
  }
  

  })

$('input').keyup(function(e){

  if(e.keyCode == 8){      
    $('.total_r').parent().parent().removeClass('activered')
    $('.total_f').parent().parent().removeClass('activered')
    $('.total_c').parent().parent().removeClass('activered')
  } else{
    $('.total_r').parent().parent().addClass('activered')
    $('.total_f').parent().parent().addClass('activered')
    $('.total_c').parent().parent().addClass('activered')
  }




  

  if (tr == 0){
    tr = 12
  }
  if (tf == 0){
    tf = 12
  }
  if (tc == 0){
      tc = 4
  }

    r_am = $('.investedr_in').val()
    r_in = $('.interestr_in').val()
    totalr_in = Math.round((r_am*(tr*(tr+1))*r_in)/2400)
    totalr_amt = totalr_in + (r_am*tr)
    $('.invested_r').text((r_am*tr).toLocaleString('en-IN'))
    $('.interest_r').text((totalr_in).toLocaleString('en-IN'))
    $('.total_r').text((totalr_amt).toLocaleString('en-IN'))
    

    f_am = $('.investedf_in').val()
    f_in = $('.interestf_in').val()
    totalf_in = Math.round((f_am*(f_in/100))/12)
    totalf_amt = totalf_in * tf
    $('.invested_f').text((f_am).toLocaleString('en-IN'))
    $('.interest_f').text((totalf_in).toLocaleString('en-IN'))
    $('.total_f').text((totalf_amt).toLocaleString('en-IN'))

    c_am = $('.investedc_in').val()
    c_in = $('.interestc_in').val()
    totalc_in = Math.pow((1+((c_in/100)/4)),tc);    
    totalc_amt = Math.round(totalc_in * c_am)
    $('.invested_c').text((c_am).toLocaleString('en-IN'))
    $('.interest_c').text( Math.round(parseFloat(totalc_in * c_am ) - parseFloat(c_am)).toLocaleString('en-IN')  )
    $('.total_c').text((totalc_amt).toLocaleString('en-IN'))

});

