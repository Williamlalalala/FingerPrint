import angular from 'angular';
import angularMeteor from 'angular-meteor';

import { Customers } from '../../api/customers.js';

import template from './login.html';



class LoginCtrl
{
  constructor($state, $reactive, $scope)
  {
    this.state = $state;
    this.username = '';
    this.pwd = '';
    this.showLoginErrMsg = false;
  }

  doLogin()
  {
    customer = Customers.find({username: {$regex:'/*' + this.username + '/*'}}).fetch();

    if(customer.length == 1)
    {
      if(customer[0].pwd == this.pwd)
      {
        Session.set('isLogin', true);
        Session.set('loginUsername', this.username);
        this.showLoginErrMsg = false;
        this.state.go('productCatalogue');
      }
      else
      {
        this.showLoginErrMsg = true;
      }
    }
    else
    {
      this.showLoginErrMsg = true;
    }
  }

  register()
  {
    this.state.go('customer');
  }

//document.getElementById("login").style.backgroundImage = "url('images/clothing5.jpg')"; 

}



export default angular.module('login', [
  angularMeteor
])

.component('login', {
  templateUrl: 'imports/components/login/login.html',
  controller: LoginCtrl
});
