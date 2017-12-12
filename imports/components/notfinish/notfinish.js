import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './notfinish.html';



class notfinishCtrl
{
  constructor($state)
  {
    
  }
}



export default angular.module('notfinish', [
  angularMeteor
])

.component('notfinish', {
  templateUrl: 'imports/components/notfinish/notfinish.html',
  controller: notfinishCtrl
});
