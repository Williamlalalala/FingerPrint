import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Session } from 'meteor/session';

import template from './children.html';

import { MP3Players } from '../../api/mp3Players.js';

class childrenCtrl
{
	constructor(){
  
	}

}





export default angular.module('children', [
  angularMeteor
])

.component('children', {
  templateUrl: 'imports/components/children/children.html',
  controller: childrenCtrl
});
