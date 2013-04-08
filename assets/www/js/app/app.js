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
    $('.date').text(month + " " + day + " " + year);
  },
  setNotify : function() {
    var favorites = ["Drink More Water!", "Please fill today's tracker!", "Watch fluid loss!"];
    $('.fn-notify').each(function(i,el){
      var idx = Math.floor(Math.random() * favorites.length);
      $(el).text(favorites[idx]);
      favorites.splice(idx,1);
    });
  }
};


$(function() {
  app.setDate();
  app.setNotify();
});