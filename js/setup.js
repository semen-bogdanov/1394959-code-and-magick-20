'use strict';
  var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAME = ['да Марья', 'Верон', 'Верон', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

function getWizardName() {
  var FIRST_NAME = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var LAST_NAME = ['да Марья', 'Верон', 'Верон', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var rand1 = Math.floor(Math.random() * FIRST_NAME.length);
  var rand2 = Math.floor(Math.random() * LAST_NAME.length);
  var result = FIRST_NAME[rand1] + " " + LAST_NAME[rand2];
  return result;
};


function getCoatColor() {
  var coatColor = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)',  'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)',  'rgb(0, 0, 0)',];
  var color = Math.random() * coatColor.length;
  return color;
};

function getEyesColor() {
  var EyesColor = ['rgb(0, 0, 0)', 'rgb(255, 0, 0)', 'rgb(66, 170, 255)', 'rgb(255, 255, 0)', 'rgb(0, 128, 0)', 'rgb(66, 170, 255)'];
  var Eyes = Math.random() * EyesColor.length;
  return EyesColor;
};


var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [
  {
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },
  {
    name: getWizardName(),
    coatColor: getCoatColor(),
    eyesColor: getEyesColor()
  },

];
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  similarListElement.appendChild(wizardElement);
};
for (var i = 0; i < wizards.length; i++) {
  renderWizard(wizards[i]);
};
console.log(getWizardName());
