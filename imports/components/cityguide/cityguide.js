import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { HTTP } from 'meteor/http';

import { SalesOrders } from '../../api/salesOrders.js';

import template from './cityguide.html';



class cityguideCtrl
{
  constructor($state)
  {
    this.state = $state
    this.isLogin = Session.get('isLogin');
    this.search_info=Session.get('search_info');
    /*if(!this.isLogin)
    {
    	this.state.go('login');
    }
    */
    this.salesOrders = SalesOrders.find({username: Session.get('loginUsername')}).fetch();
  }
  
   searchgo()
  {
    Session.set('search_info',this.search_info);
    this.state.go('search');
  }

  requestDelivery(salesOrder)
  {
    recipientName = prompt('Enter the name of the recipient: ', '');
    itemDescription = prompt('Enter item description: ', '');
    weight = prompt('Enter weight: ', '');

    HTTP.call('POST', 'http://localhost:3080/methods/createDeliveryRequest', {
        data: { requestId: salesOrder._id,  type:"food"}
      }, function(error, result){
        if (!error)
        {
          alert("Delivery requested successfully!");
        }
        else
        {
          alert("An error has occurred while requesting your delivery: " + error.message);
        }
    });
  }
}



export default angular.module('cityguide', [
  angularMeteor
])

.component('cityguide', {
  templateUrl: 'imports/components/cityguide/cityguide.html',
  controller: cityguideCtrl
});
