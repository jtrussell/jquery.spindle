
$(function() {
'use strict';

$('.spindle-on').spindle({text: 'Z'});

$('.spindle-button').click(function() {
  $(this).spindle({text: '*'});
});

$('.spindle-button-ajax').click(function() {
  var $el = $(this);
  $el.spindle('start', {text: '@'});
  $el.prop('disabled', true);
  setTimeout(function() {
    $el.spindle('stop');
    $el.prop('disabled', false);
  }, 1500);
});

}());
