// JavaScript Document
$(document).ready(function() {
    $('#autoWidt').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidt').removeClass('cS-hidde');
        } 
    });  
  });