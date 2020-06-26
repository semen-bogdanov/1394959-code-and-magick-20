'use strict';
var WIZARD_NAMES = ['Иван да Марья', 'Хуан Себастьян Верон', 'Мария Мирабелла', 'Кристоф Вальц', 'Виктор Онопко', 'Юлия Топольницкая', 'Люпита Нионго', 'Вашингтон Ирвинг'];
var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
var wizards = [
  {
    name: WIZARD_NAMES[0]
    , coatColor: 'rgb(101, 137, 164)'
    , eyesColor: 'rgb(0, 0, 0)'
  }
  , {
    name: WIZARD_NAMES[1]
    , coatColor: 'rgb(241, 43, 107)'
    , eyesColor: 'rgb(255, 0, 0)'
  }
  , {
    name: WIZARD_NAMES[2]
    , coatColor: 'rgb(146, 100, 161)'
    , eyesColor: 'rgb(66, 170, 255)'
  }
  , {
    name: WIZARD_NAMES[3]
    , coatColor: 'rgb(56, 159, 117)'
    , eyesColor: 'rgb(255, 255, 0)'
  }
  , {
    name: WIZARD_NAMES[4]
    , coatColor: 'rgb(215, 210, 55)'
    , eyesColor: 'rgb(0, 128, 0)'
  }
  , {
    name: WIZARD_NAMES[4]
    , coatColor: 'rgb(0, 0, 0)'
    , eyesColor: 'rgb(66, 170, 255)'
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
console.log('test');
