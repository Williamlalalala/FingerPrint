import angular from 'angular';
import angularMeteor from 'angular-meteor';
import uiRouter from 'angular-ui-router';
import { Session } from 'meteor/session';

import template from './router.html';

import navigation from '../navigation/navigation';
import login from '../login/login';
import productCatalogue from '../productCatalogue/productCatalogue';
import productDetails from '../productDetails/productDetails';
import shoppingCart from '../shoppingCart/shoppingCart';
import myOrders from '../myOrders/myOrders';
import customer from '../customer/customer';
import checkout from '../checkout/checkout';

import woman from '../woman/woman';
import man from '../man/man';
import children from '../children/children';
import elders from '../elders/elders';
import designer from '../designer/designer';


class RouterCtrl
{
  constructor()
  {
  }
}



export default angular.module('router', [
  angularMeteor,
  uiRouter,
  navigation.name,
  login.name,
  productCatalogue.name,
  productDetails.name,
  shoppingCart.name,
  myOrders.name,
  customer.name,
  checkout.name,
  woman.name,
  man.name,
  children.name,
  elders.name,
  designer.name
])

.component('router', {
  templateUrl: 'imports/components/router/router.html',
  controller: RouterCtrl
})

.config(function($locationProvider, $urlRouterProvider, $stateProvider){
  'ngInject';
  $locationProvider.html5Mode(true);
  $urlRouterProvider.otherwise('/login');
  
  $stateProvider
  .state('login', {
       url: '/login',
       template: '<login></login>'
   })
  .state('productCatalogue', {
    url: '/productCatalogue',
    template: '<product-catalogue></product-catalogue>'
  })
  .state('productDetails', {
    url: '/productDetails',
    template: '<product-details></product-details>'
  })
  .state('shoppingCart', {
    url: '/shoppingCart',
    template: '<shopping-cart></shopping-cart>'
  })
  .state('myOrders', {
    url: '/myOrders',
    template: '<my-orders></my-orders>'
  })
  .state('customer', {
    url: '/customer',
    template: '<customer></customer>'
  })
  .state('checkout', {
    url: '/checkout',
    template: '<checkout></checkout>'
  })
  .state('woman', {
    url: '/woman',
    template: '<woman></woman>'
  })
  .state('man', {
    url: '/man',
    template: '<man></man>'
  })
  .state('children', {
    url: '/children',
    template: '<children></children>'
  })
  .state('elders', {
    url: '/elders',
    template: '<elders></elders>'
  })
  .state('designer', {
    url: '/designer',
    template: '<designer></designer>'
  });

})

.run(function(){

  Session.set('isLogin', false);
  Session.set('loginUsername', "");
  Session.set('secretToken', 0);
  Session.set('showLoginErrMsg', false);

  Session.set('currentViewMP3Player', null);
  
  Session.set('shoppingCart', []);
  Session.set('shoppingCartQty', 1);

  Session.set('searchResults', null);

  Session.set('likes', 100);
});
