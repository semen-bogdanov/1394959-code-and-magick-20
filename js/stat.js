"use strict";

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;

var CLOUD_X = 140;
var CLOUD_Y = 240;
var GAP = 20;
var COLUMN_WIDTH = 40;
var BAR_HEIGHT = -150;
var OTSTUP = 50;
var barWidth = CLOUD_HEIGHT - GAP + BAR_HEIGHT - GAP - GAP - GAP;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};



var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  return maxElement;
};


window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X - GAP - GAP- GAP, GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X - GAP - GAP- GAP - GAP, 10, '#fff');
  ctx.font = "16px PT Mono";
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', 105, 45);
  ctx.fillText('Список результатов:', 105, 65);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + (OTSTUP + GAP + GAP) * i, CLOUD_Y + GAP);
    ctx.fillRect(CLOUD_X + (OTSTUP + GAP + GAP) * i, CLOUD_Y, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  }

};



