// JavaScript Document
$(document).ready(function() {
    $('#autoW').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoW').removeClass('cS-hi');
        } 
    });  
  });