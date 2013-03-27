var startApp = function() {
  // alert('started');
};

var app = window.app = {
  init : function() {

  },
  bindEvents : function() {

  },
  setDate : function(){
    var currentTime = new Date(),
        monthNames =  [ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
        month = monthNames[(currentTime.getMonth())],
        day = currentTime.getDate(),
        year = currentTime.getFullYear();
    $('h4.date').text(month + " " + day + " " + year);
  },
  setNotify : function() {
    var favorites = ["Drink More Water!", "Please fill today's tracker!", "Watch fluid loss!"];
    $('.fn-notify').text(favorites[Math.floor(Math.random() * favorites.length)]);
  }
};


$(function() {
  app.setDate();
  app.setNotify();
});