import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './navigation.html';
import { Fsearch } from '../../api/fsearch.js';
import { MP3Players } from '../../api/mp3Players.js';

class NavigationCtrl

{
	constructor($state,$scope)
	{
		this.state = $state;
		this.navigation = Session.get('navigation');
		/*var searchtext() = document.getElementById("searchvalue").value;*/
		this.searchtext="";
		this.showthetext="";
		this.abcd="";

	}

	searchfor(){
			console.log('searchFor: ' + this.searchtext);
			female = MP3Players.find({description: {$regex:'/*' + this.searchtext + '/*'}}).fetch();
			console.log('result: ' + female.length);
			for(i=0; i<female.length;i++)
			{
				console.log(female[i].description);
			}

			Session.set('searchResults', female);
			// if (female.length==0) {
			// 		alert("not found");
			// }
			// else{
			// 	alert("dkfjdkfj");
			// }

			this.state.go('login');
			// this.showthetext = female;

		}


}







export default angular.module('navigation', [
  angularMeteor
])

.component('navigation', {
  templateUrl: 'imports/components/navigation/navigation.html',
  controller: NavigationCtrl
});


/*cd ~
mkdir Meteor
cd Meteor
meteor create myapp
cd myapp
meteor remove blaze-html-templates
meteor add angular-templates
meteor add session
meteor add reactive-var
meteor add check
meteor add simple:rest
meteor add simple:json-routes
meteor npm install --save angular angular-meteor
meteor npm install --save angular-ui-router
meteor npm install --save onsenui

*/