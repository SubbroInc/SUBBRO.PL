// JavaScript Document
$(document).ready(function() {
    $('#autoWi').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWi').removeClass('cS-hid');
        } 
    });  
  });