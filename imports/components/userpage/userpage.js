import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './userpage.html';



class userpageCtrl
{
  constructor($state)
  {
    if(!this.isLogin)
    {
    	this.state.go('login');
    }
  }
}



export default angular.module('userpage', [
  angularMeteor
])

.component('userpage', {
  templateUrl: 'imports/components/userpage/userpage.html',
  controller: userpageCtrl
});
