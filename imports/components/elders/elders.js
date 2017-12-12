import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Session } from 'meteor/session';

import template from './elders.html';

import { MP3Players } from '../../api/mp3Players.js';

class eldersCtrl
{
	constructor(){
  
	}

}





export default angular.module('elders', [
  angularMeteor
])

.component('elders', {
  templateUrl: 'imports/components/elders/elders.html',
  controller: eldersCtrl
});
