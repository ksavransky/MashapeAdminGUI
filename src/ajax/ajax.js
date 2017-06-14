import $ from 'jquery';

export const fetchNode = function(success){
    $.ajax({
    url: 'http://localhost:8001/',
    dataType: 'json',
    cache: false,
    success
  });
}

export const fetchEntry = function(success, hash = ""){
    $.ajax({
    url: 'http://localhost:8001' + hash,
    success
  });
}

export const createEntry = function(success, hash = "", data){
    $.ajax({
    type: "POST",
    url: 'http://localhost:8001/' + hash,
    data: data,
    dataType: 'json',
    error: function(XMLHttpRequest, textStatus, errorThrown) {
       alert("Create failed. Please check your parameters and try again.");
    },
    success
  });
}
