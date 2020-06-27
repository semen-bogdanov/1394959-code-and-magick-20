'use strict';

function getWizardName() {
  var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAME = ['да Марья', 'Верон', 'Верон', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var rand1 = Math.floor(Math.random() * FIRST_NAME.length);
  var rand2 = Math.floor(Math.random() * LAST_NAME.length);
  var result = FIRST_NAME[rand1] + ' ' + LAST_NAME[rand2];
  return result;
}


function getCoatColor() {
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var colorIndex = Math.floor(Math.random() * coatColor.length);
  return coatColor[colorIndex];
}

function getEyesColor() {
  var eyesColor = ['black', 'red', 'blue', 'yellow', 'green'];
  var eyeIndex = Math.floor(Math.random() * eyesColor .length);
  return eyesColor [eyeIndex];
}


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [];
for (var i = 0; i < 4; i++) {
  wizards.push({
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  });
}

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;
  return wizardElement;
};
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);
var setupSimilar = document.querySelector('.setup-similar');
setupSimilar.classList.remove('hidden');
