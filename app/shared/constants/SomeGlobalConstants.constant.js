(function(){
  'use strict';
  var app = angular.module('myApp');
  app.constant('NameOfTheConstantIWantToInjectAsADependency', {
    keyPair: value,
    anotherKeyPair: Value
  });
})();
