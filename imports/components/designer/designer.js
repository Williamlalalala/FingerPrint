import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Session } from 'meteor/session';

import template from './designer.html';

import { MP3Players } from '../../api/mp3Players.js';

class designerCtrl
{
	constructor($state, $scope)
  	{
    	this.state = $state;
		this.like = Session.get('likes');
	}
	


	add(){
		this.like = this.like + 1;
		Session.set('likes',this.like);
	}

}





export default angular.module('designer', [
  angularMeteor
])

.component('designer', {
  templateUrl: 'imports/components/designer/designer.html',
  controller: designerCtrl
});
