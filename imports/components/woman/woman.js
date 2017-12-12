import angular from 'angular';
import angularMeteor from 'angular-meteor';
import { Session } from 'meteor/session';

import template from './woman.html';
import { DeliveryRequests } from '../../api/deliveryRequests.js';
import { MP3Players } from '../../api/mp3Players.js';

class womanCtrl
{
  constructor($state, $scope)
  {

    $scope.viewModel(this);
    this.helpers({
      deliveryRequests() {
      return DeliveryRequests.find({}, {
          sort: {
            
          }
        });
      }
    })



    // this.delivery=DeliveryRequests.find().fetch();
    // this.imgid=delivery[0].imgId;


    
    this.state = $state;
    this.shoppingCart = Session.get('shoppingCart');  
    $scope.viewModel(this);
    this.found;
    this.searchtext;
    this.thing="";
    this.helpers({
      mp3Players() {

        retval = null;

        if(Session.get('searchResults') != null)
        {
          retval = Session.get('searchResults');
        }
        else
        {
          retval = MP3Players.find({}, {
                    sort: {
                      skuCode: 1
                    }
                  });
        }

      this.productCount = retval.length;
      return retval;
      }
    })

  }




    // searchfortwo(thing){
  //   this.found = MP3Players.find({description:thing}).fetch();
  //   for(i=0; i<found.length; i++){
  //     console.log(this.found[i].description);
  //   }
  //   Session.set('searchResults', this.found);
  //   this.state.go('woman');
  // }







searchfortwo(number){
      console.log('searchFor: ' + this.searchtext);
      if (number==1) {
          this.searchtext="Shirts";
      };
      if (number==2) {
          this.searchtext="Dresses";
      };
      if (number==3) {
          this.searchtext="Jeans";
      };
      if (number==4) {
          this.searchtext="Jackets";
      };
      if (number==5) {
          this.searchtext="Coats";
      };
      female = MP3Players.find({description: this.searchtext}).fetch();
      console.log('result: ' + female.length);
      for(i=0; i<female.length;i++)
      {
        console.log(female[i].description);
      }

      Session.set('searchResults', female);
      // if (female.length==0) {
      //    alert("not found");
      // }
      // else{
      //  alert("dkfjdkfj");
      // }

      this.state.go('woman');
      // this.showthetext = female;

    }


  viewDetails(skuCode)
  {
    for(i = 0; i < this.mp3Players.length; i++)
    {
      if(this.mp3Players[i].skuCode == skuCode)
      {
        Session.set('currentViewMP3Player', this.mp3Players[i]);       
        break;
      }
    }
    
    Session.set('shoppingCartQty', 1);
    
    for(i = 0; i < this.shoppingCart.length; i++)
    {
      if(this.shoppingCart[i].skuCode == skuCode)
      {
        Session.set('shoppingCartQty', this.shoppingCart[i].qty);        
        break;
      }
    }
 
    this.state.go('productDetails');
  }

}



export default angular.module('woman', [
  angularMeteor
])

.component('woman', {
  templateUrl: 'imports/components/woman/woman.html',
  controller: womanCtrl
});






