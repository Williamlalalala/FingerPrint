import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Session } from 'meteor/session';

import template from './productDetails.html';
import { MP3Players } from '../../api/mp3Players.js';


class ProductDetailsCtrl
{
  constructor($state)
  {
    this.state = $state;
    this.currentViewMP3Player = Session.get('currentViewMP3Player');
    this.shoppingCartQty = Session.get('shoppingCartQty');
  }

  addToCart()
  {

    isExistingItem = false;
    shoppingCart = Session.get('shoppingCart');
    
    
    for(i = 0; i < shoppingCart.length; i++)
    {
      if(shoppingCart[i].skuCode == this.currentViewMP3Player.skuCode)
      {
        shoppingCart[i].qty = this.shoppingCartQty;
        shoppingCart[i].subTotal = shoppingCart[i].unitPrice * this.shoppingCartQty;
        isExistingItem = true;
        break;
      }
    }
    
    if(!isExistingItem)
    {
      shoppingCart.push({skuCode:this.currentViewMP3Player.skuCode, unitPrice:this.currentViewMP3Player.unitPrice, qty: this.shoppingCartQty, subTotal:this.currentViewMP3Player.unitPrice*this.shoppingCartQty});
    }

    Session.set('shoppingCart', shoppingCart);
    
    this.state.go('shoppingCart');
  }

  
}



export default angular.module('productDetails', [
  angularMeteor
])

.component('productDetails', {
  templateUrl: 'imports/components/productDetails/productDetails.html',
  controller: ProductDetailsCtrl
});
