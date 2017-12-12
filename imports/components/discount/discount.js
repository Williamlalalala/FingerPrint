import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './discount.html';



class discountCtrl
{
  constructor($state)
  {
    this.state = $state;
    this.search_info=Session.get('search_info');
  }
    searchgo()
  {
    Session.set('search_info',this.search_info);
    this.state.go('search');
  }
}



export default angular.module('discount', [
  angularMeteor
])

.component('discount', {
  templateUrl: 'imports/components/discount/discount.html',
  controller: discountCtrl
});
