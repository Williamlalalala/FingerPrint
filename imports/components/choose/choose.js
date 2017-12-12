import angular from 'angular';
import angularMeteor from 'angular-meteor';

import template from './choose.html';



class ChooseCtrl
{
  constructor()
  {
  }

 
 // document.getElementById("choose").style.backgroundImage = "url('images/ice.jpg')"; 
}



export default angular.module('choose', [
  angularMeteor
])

.component('choose', {
  templateUrl: 'imports/components/choose/choose.html',
  controller: ChooseCtrl
});
