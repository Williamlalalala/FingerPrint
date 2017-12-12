import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Session } from 'meteor/session';

import template from './comments.html';

import { Comments } from '../../api/comments.js';



class CommentsCtrl
{

  constructor($state,$scope)
  {
    this.state = $state
    this.newComment;
    
    $scope.viewModel(this);
    this.helpers({
      comments() {
      return Comments.find({}, {
        });
      }
    })
  }
   

  commentcall()
  {  
   HTTP.call('POST', 'http://localhost:3030/methods/createDeliveryRequest', {
        data: { requestId: salesOrder._id,  comment:this.newComment.com}
      }, function(error, result){
        if (!error)
        {
          alert("Delivery requested successfully!");
        }
        else
        {
          alert("An error has occurred while requesting your delivery: " + error.message);
        }
    });
  }
  
  searchgo()
  {
    Session.set('search_info',this.search_info);
    this.state.go('search');
  }
 
  upload()
  {
    Meteor.call('createComment', this.newComment);
    this.newComment = null;
  }
}



export default angular.module('comments', [
  angularMeteor
])

.component('comments', {
  templateUrl: 'imports/components/comments/comments.html',
  controller: CommentsCtrl
});
