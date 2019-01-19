var Score = 0;
var highScore = 0;
var colorRange = 255;
var bump = [1,1,1];
var tump = 1;
var prescore = 0;

var generate = function(){
  var j = 'rgba(';
  for(var k = 1; k < 4; k++) {
    var i = Math.floor(Math.random() * colorRange + bump[k]);
    j = j + i + ',';
  }
  j = j + '1)';
  return j;
};

var mColor = generate();
var choice = (Math.random());
var dead = false;

var ColorChange = function(){
  if (colorRange > 70) {
    tump += 4;
    colorRange = 255 - tump;
  } else if (colorRange > 30) {
    tump += 2;
    colorRange = 255 - tump;
  } else if (colorRange > 15) {
    tump += 1;
    colorRange = 255 - tump;
  }

  for (var k = 1; k < 4; k++) {
    bump[k] = Math.floor(Math.random()*tump+1);
  }

  mColor = generate();
  choice = (Math.random() * 4);
  if (Score == 0) {
    document.getElementById("score").innerHTML = 'GO!';
  } else {
    document.getElementById("score").innerHTML = Score;
  }

  $('.match').css('background-color', mColor).delay(1000);
  $('.tl').css('background-color', generate());
  $('.tr').css('background-color', generate());
  $('.bl').css('background-color', generate());
  $('.br').css('background-color', generate());

  if (choice > 3) {
    $('.tl').css('background-color', mColor);
    choice = 4;
  } else if (choice > 2) {
    $('.tr').css('background-color', mColor);
    choice = 3;
  } else if (choice > 1) {
    $('.bl').css('background-color', mColor);
    choice = 2;
  } else {
    $('.br').css('background-color', mColor);
    choice = 1;
  }
};


$('.tl').click(function() {
  if (choice === 4) {
    Score += 1;
  } else {
    document.getElementById("prescore").innerHTML = Score;
    if (Score > highScore) {
      highScore = Score;
    }
    document.getElementById("highscore").innerHTML = highScore;
    Score = 0;
    colorRange = 255;
    for (var k = 1; k < 4; k++) {
      bump[k] = 1;
    }
    tump = 1;
    $('#lose').show();
    $('#introcover').show();
  }
  ColorChange();
});

$('.tr').click(function() {
  if (choice === 3) {
    Score += 1;
  } else {
    document.getElementById("prescore").innerHTML = Score;
    if (Score > highScore) {
      highScore = Score;
    }
    document.getElementById("highscore").innerHTML = highScore;
    Score = 0;
    colorRange = 255;
    for (var k = 1; k < 4; k++) {
      bump[k] = 1;
    }
    tump = 1;
    $('#lose').show();
    $('#introcover').show();
  }
  ColorChange();
});

$('.bl').click(function() {
  if (choice === 2) {
    Score += 1;
  } else {
    document.getElementById("prescore").innerHTML = Score;
    if (Score > highScore) {
      highScore = Score;
    }
    document.getElementById("highscore").innerHTML = highScore;
    Score = 0;
    colorRange = 255;
    for (var k = 1; k < 4; k++) {
      bump[k] = 1;
    }
    tump = 1;
    $('#lose').show();
    $('#introcover').show();
  }
  ColorChange();
});

$('.br').click(function() {
  if (choice === 1) {
    Score += 1;
  } else {
    document.getElementById("prescore").innerHTML = Score;
    if (Score > highScore) {
      highScore = Score;
    }
    document.getElementById("highscore").innerHTML = highScore;
    Score = 0;
    colorRange = 255;
    for (var k = 1; k < 4; k++) {
      bump[k] = 1;
    }
    tump = 1;
    $('#lose').show();
    $('#introcover').show();
  }
  ColorChange();
});

$('.match_cover').click(function() {
  $('#intro').hide();
  $('#lose').hide();
  $('#introcover').hide();
  document.getElementById("score").innerHTML = Score;
});

$('.aboutlink').click(function() {
  $('#about').show();
});

$('#aboutt').click(function() {
  $('#about').show();
});

$('#close').click(function() {
  $('#about').hide();
});

$(document).ready(function() {
  ColorChange();
  document.getElementById("score").innerHTML = 'GO!';
});

$(document).keypress(function(event){
  $('#intro').hide();
  $('#lose').hide();
  $('#introcover').hide();
  document.getElementById("score").innerHTML = Score;
	var keycode = (event.keyCode ? event.keyCode : event.which);
	if(keycode == '119'){
    if (choice === 4) {
      Score += 1;
    } else {
      document.getElementById("prescore").innerHTML = Score;
      if (Score > highScore) {
        highScore = Score;
      }
      document.getElementById("highscore").innerHTML = highScore;
      Score = 0;
      colorRange = 255;
      for (var k = 1; k < 4; k++) {
        bump[k] = 1;
      }
      tump = 1;
      $('#lose').show();
      $('#introcover').show();
    }
    ColorChange();
	} else if (keycode == '101') {
    if (choice === 3) {
      Score += 1;
    } else {
      document.getElementById("prescore").innerHTML = Score;
      if (Score > highScore) {
        highScore = Score;
      }
      document.getElementById("highscore").innerHTML = highScore;
      Score = 0;
      colorRange = 255;
      for (var k = 1; k < 4; k++) {
        bump[k] = 1;
      }
      tump = 1;
      $('#lose').show();
      $('#introcover').show();
    }
    ColorChange();
  } else if (keycode == '115') {
    if (choice === 2) {
      Score += 1;
    } else {
      document.getElementById("prescore").innerHTML = Score;
      if (Score > highScore) {
        highScore = Score;
      }
      document.getElementById("highscore").innerHTML = highScore;
      Score = 0;
      colorRange = 255;
      for (var k = 1; k < 4; k++) {
        bump[k] = 1;
      }
      tump = 1;
      $('#lose').show();
      $('#introcover').show();
    }
    ColorChange();
  } else if (keycode == '100') {
    if (choice === 1) {
      Score += 1;
    } else {
      document.getElementById("prescore").innerHTML = Score;
      if (Score > highScore) {
        highScore = Score;
      }
      document.getElementById("highscore").innerHTML = highScore;
      Score = 0;
      colorRange = 255;
      for (var k = 1; k < 4; k++) {
        bump[k] = 1;
      }
      tump = 1;
      $('#lose').show();
      $('#introcover').show();
    }
    ColorChange();
  }

});
