import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Session } from 'meteor/session';

import template from './productCatalogue.html';

import { MP3Players } from '../../api/mp3Players.js';


class ProductCatalogueCtrl
{
  constructor($state, $scope)
  {
    this.state = $state;
    this.shoppingCart = Session.get('shoppingCart');
    body.style.backgroundImage = 'url(/images/homewoman2.jpg)';
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
/*changeImage(index){

    var body = document.getElementsByTagName('body')[0];

    switch(index){
      case 1:
                
          body.style.backgroundImage = 'url(/images/homewoman2.jpg)';

      break;

        case 2:

        body.style.backgroundImage = 'url(/images/clothing6.jpg)';

      break;

      case 3:

        body.style.backgroundImage = 'url(/images/homechildren.jpg)';
      break;

       case 4:
        body.style.backgroundImage = 'url(/images/elderchange.jpg)';
      break;
    }
}
  viewDetails(skuCode)
  {
    for(i = 0; i < this.mp3Players.length; i++)
    {
      if(this.mp3Players[i].skuCode == skuCode)
      {
        Session.set('currentViewMP3Player', this.mp3Players[i]);       
        break;
      }
    }

    Session.set('shoppingCartQty', 1);
   
   for(i = 0; i < this.shoppingCart.length; i++)
    {
      if(this.shoppingCart[i].skuCode == skuCode)
      {
        Session.set('shoppingCartQty', this.shoppingCart[i].qty);        
        break;
      }
    }

    this.state.go('productDetails');
  }*/
}



export default angular.module('productCatalogue', [
  angularMeteor
])

.component('productCatalogue', {
  templateUrl: 'imports/components/productCatalogue/productCatalogue.html',
  controller: ProductCatalogueCtrl
});
/*
class ProductCatalogueCtrl
{
constructor($scope,$state){
  this.state = $state
}
    
  }

}


export default angular.module('productCatalogue', [
  angularMeteor
])

.component('productCatalogue', {
  templateUrl: 'imports/components/productCatalogue/productCatalogue.html',
  controller: ProductCatalogueCtrl
});*/