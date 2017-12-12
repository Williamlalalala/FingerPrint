import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './checkout.html';



class CheckoutCtrl
{
  constructor($state)
  {
    this.state = $state
    this.isLogin = Session.get('isLogin');

    if(!this.isLogin)
    {
    	this.state.go('login');
    }

    this.shoppingCart = Session.get('shoppingCart');
    this.totalAmount = 0;

    for(i=0; i<this.shoppingCart.length; i++)
    {
      this.totalAmount += this.shoppingCart[i].subTotal;
    }

    this.paymentMode = '';
  }

  checkout()
  {
    Meteor.call('createSalesOrder', Session.get('loginUsername'), this.shoppingCart, this.totalAmount, this.paymentMode);
    Session.set('shoppingCart', []);
    this.state.go('myOrders');
  }

// document.getElementById("checkOut").style.backgroundImage = "url('images/ice.jpg')"; 
  
}



export default angular.module('checkout', [
  angularMeteor
])

.component('checkout', {
  templateUrl: 'imports/components/checkout/checkout.html',
  controller: CheckoutCtrl
});
