import angular from 'angular';
import angularMeteor from 'angular-meteor';

import router from '../imports/components/router/router';

 

angular.module('mp3PlayersV3', [
  angularMeteor,
  router.name
]);
