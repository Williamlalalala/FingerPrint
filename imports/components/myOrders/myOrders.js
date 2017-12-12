import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { HTTP } from 'meteor/http';

import { SalesOrders } from '../../api/salesOrders.js';

import template from './myOrders.html';



class MyOrdersCtrl
{
  constructor($state)
  {
    this.state = $state
    this.isLogin = Session.get('isLogin');

    if(!this.isLogin)
    {
      this.state.go('login');
    }

    this.salesOrders = SalesOrders.find({username: Session.get('loginUsername')}).fetch();
  }

  requestDelivery(salesOrder)
  {
    recipientName = prompt('Enter the name of the recipient: ', '');
    itemDescription = prompt('Enter item description: ', '');
    weight = prompt('Enter weight: ', '');

    HTTP.call('POST', 'http://localhost:3080/methods/createDeliveryRequest', {
        data: { requestId: salesOrder._id,  recipientName: recipientName, itemDescription: itemDescription, weight: weight}
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



export default angular.module('myOrders', [
  angularMeteor
])

.component('myOrders', {
  templateUrl: 'imports/components/myOrders/myOrders.html',
  controller: MyOrdersCtrl
});