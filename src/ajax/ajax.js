import $ from 'jquery';

export const fetchNode = function(success){
    $.ajax({
    url: 'http://localhost:8001/',
    dataType: 'json',
    cache: false,
    success
  });
}
