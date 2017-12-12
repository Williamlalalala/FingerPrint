import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Session } from 'meteor/session';

import template from './food.html';

import { MP3Players } from '../../api/mp3Players.js';



class FoodCtrl
{
  constructor($state, $scope)
  {
    this.state = $state;
    this.search_info=Session.get('search_info');
    /*this.shoppingCart =Session.get('shoppingCart');*/

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

  searchgo()
  {
    Session.set('search_info',this.search_info);
    this.state.go('search');
  }

  viewDetails(skuCode)
  {
    for(i = 0; i < this.mp3Players.length; i++)
    {
      if(this.mp3Players[i].skuCode == "MP1")
      {
         this.state.go('comments');
      }
      else
      {
         this.state.go('comments');
      }
    }
  }
}



export default angular.module('food', [
  angularMeteor
])

.component('food', {
  templateUrl: 'imports/components/food/food.html',
  controller: FoodCtrl
});
