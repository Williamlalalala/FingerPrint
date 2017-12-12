import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './customer.html';



class CustomerCtrl
{
  constructor($state)
  {
    this.state = $state
    this.isLogin = Session.get('isLogin');

    if(this.isLogin)
    {
    	this.state.go('login');
    }

    this.newCustomer;
  }

  register()
  {
    Meteor.call('createCustomer', this.newCustomer);
    this.newCustomer = null;
  }
  
  
// document.getElementById("customer").style.backgroundImage = "url('images/ice.jpg')"; 

}



export default angular.module('customer', [
  angularMeteor
])

.component('customer', {
  templateUrl: 'imports/components/customer/customer.html',
  controller: CustomerCtrl
});
