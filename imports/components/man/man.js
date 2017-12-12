import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Session } from 'meteor/session';

import template from './man.html';

import { MP3Players } from '../../api/mp3Players.js';

class manCtrl
{
	constructor(){
  
	}

}





export default angular.module('man', [
  angularMeteor
])

.component('man', {
  templateUrl: 'imports/components/man/man.html',
  controller: manCtrl
});
