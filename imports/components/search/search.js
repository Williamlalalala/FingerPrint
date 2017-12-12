import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { DeliveryRequests } from '../../api/deliveryRequests.js';

import template from './search.html';
import {MP3Players} from '../../api/mp3Players.js';
class SearchCtrl
{
  constructor($state,$scope)
  {
    this.state = $state;
    this.search_info=Session.get('search_info');
    this.result;
    this.mark; 
    this.deliverydate=DeliveryRequests.find().fetch();
    this.imgid=this.deliverydate[0].imgId; 
   
    $scope.viewModel(this);
    this.helpers({
      mp3Players() {
      return MP3Players.find({}, {
          sort: {
            mark: 1
          }
        });
      }
    })
  }

  


   viewDetails(skuCode)
  {
    
    this.state.go('comments');
  }
    
  searchgo()
  {
    Session.set('search_info',this.search_info);
    this.state.go('search');
  }

  
  deliverydate()
  {
    DeliveryRequests.find().sort({createdAt:1});
    return DeliveryRequests.find().fetch();
  }
  cal()
  {
     for(i = 0; i < this.result.length; i++)
    {
      this.result[i].mark=this.result[i].score*0.7+3-this.result[i].distance*0.15;
    }
   console.log(i)
  }

  dosearch()
  {
    mp3Players = MP3Players.find({"name": {$regex: ".*" + this.search_info  + ".*"}}).fetch();
    this.result=mp3Players;
    console.log(this.result[0].score)
    console.log(mp3Players[0].score)
  }
}


export default angular.module('search', [
  angularMeteor
])

.component('search', {
  templateUrl: 'imports/components/search/search.html',
  controller: SearchCtrl
});


//{$regex:/.*a.*/}}