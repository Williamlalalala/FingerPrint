import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './shoppingCart.html';



class shoppingCartCtrl
{
  constructor($state)
  {
    this.state = $state;
    this.shoppingCart = Session.get('shoppingCart');
  }

  removeFromCart(skuCode)
  {
    
    indexToRemove = null;
    
    for(i = 0; i < this.shoppingCart.length; i++)
    {
      if(this.shoppingCart[i].skuCode == skuCode)
      {
        indexToRemove = i         
        break;
      }
    }
        
    this.shoppingCart.splice(indexToRemove,1);    
    
    Session.set('shoppingCart', this.shoppingCart);
    
    this.state.go('shoppingCart');
  }



  checkout()
  {
    this.state.go('checkout');
  }
}



export default angular.module('shoppingCart', [
  angularMeteor
])

.component('shoppingCart', {
  templateUrl: 'imports/components/shoppingCart/shoppingCart.html',
  controller: shoppingCartCtrl
});
