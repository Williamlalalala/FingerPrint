
import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Session } from 'meteor/session';

import template from './citychoose.html';

import { MP3Players } from '../../api/mp3Players.js';



class citychooseCtrl
{
  constructor($state, $scope)
  {
    this.asianCities=Session.get('asianCities');
    this.asianCities2=Session.get('asianCities2');
    this.asianCities3=Session.get('asianCities3');
    this.europeanCities1=Session.get('europeanCities1');
    this.europeanCities2=Session.get('europeanCities2');
    this.europeanCities3=Session.get('europeanCities3');
    this.africanCities=Session.get('africanCities');
    this.northAmericanCities1=Session.get('northAmericanCities1');
    this.northAmericanCities2=Session.get('northAmericanCities2');
    this.southAmericanCities=Session.get('southAmericanCities');
    this.oceanianCities=Session.get('oceanianCities');
    this.state = $state;
    this.num=2;
    this.shoppingCart = Session.get('shoppingCart');
    
    $scope.viewModel(this);
    this.helpers({
      mp3Players() {
      return MP3Players.find({}, {
          sort: {
            skuCode: 1
          }
        });
      }
    })
  }
 

}



export default angular.module('citychoose', [
  angularMeteor
])

.component('citychoose', {
  templateUrl: 'imports/components/citychoose/citychoose.html',
  controller: citychooseCtrl
});

