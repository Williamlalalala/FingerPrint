import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './home.html';




class homeCtrl
{
  constructor($state)
  {
    this.state = $state;
    this.shoppingCart = Session.get('shoppingCart');
    this.num=2;
    this.search_info=Session.get('search_info');
  }

   num1()
  {
    this.num=1;
  }
  num2()
  {
    this.num=2;
  }
  num3()
  {
    this.num=3;
  }
  num4()
  {
    this.num=4;
  }

   searchgo()
  {
    Session.set('search_info',this.search_info);
    this.state.go('search');
  }

  /*
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
 */
}



export default angular.module('home', [
  angularMeteor
])

.component('home', {
  templateUrl: 'imports/components/home/home.html',
  controller: homeCtrl
});
