// JavaScript Document
$(document).ready(function() {
    $('#autoWid').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWid').removeClass('cS-hidd');
        } 
    });  
  });