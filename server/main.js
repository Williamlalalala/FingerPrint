import { Meteor } from 'meteor/meteor';
// import { JasonRoutes } from 'simple:json-routes';

import { MP3Players } from '../imports/api/mp3Players.js';
import { Customers } from '../imports/api/customers.js';
import { SalesOrders } from '../imports/api/salesOrders.js';
import { Fsearch } from '../imports/api/fsearch.js';


Meteor.startup(() =>
{

	WebApp.rawConnectHandlers.use(function(req, res, next) {
	  res.setHeader("Access-Control-Allow-Origin", "*");
	  res.setHeader("Access-Control-Allow-Headers", "origin, x-requested-with, content-type");
	  res.setHeader("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
	  return next();
	});

	Meteor.method("createDeliveryRequest", function (deliveryRequest)
	{
		console.log('Meteor.method("createDeliveryRequest"): ' + JSON.stringify(deliveryRequest));

		deliveryRequest.createdAt = new Date;
		DeliveryRequests.insert(deliveryRequest);
		return '{status: ok, requestId: ' + deliveryRequest.requestId + '}';
	});
	Meteor.methods({
		"createCustomer": function(newCustomer){
			
			NonEmptyString = Match.Where(function (x) {
				check(x, String);
				return x.length > 0;
			});
			
			check(newCustomer.email, NonEmptyString);
			
			Customers.insert({
				firstName: newCustomer.firstName,
				lastName: newCustomer.lastName,
				email: newCustomer.email,
				username: newCustomer.username,
				pwd: newCustomer.pwd,				
				createdAt: new Date
			});
		},




/*new!*/"createFsearch": function(newFsearch){
			
			NonEmptyString = Match.Where(function (x) {
				check(x, String);
				return x.length > 0;
			});
			
			check(newFsearch.email, NonEmptyString);
			
			Fsearch.insert({
				skuCode: newFsearch.skuCode,
				brand: newFsearch.dbrand,
				model: newFsearch.model,
				description: newFsearch.description,
				unitPrice: newFsearch.unitPrice,
				createdAt: new Date
			});
		},






		"createSalesOrder": function(username, shoppingCart, totalAmount, paymentMode){
			
			newShoppingCart = [];

			for(i=0; i<shoppingCart.length; i++)
			{
				newShoppingCart.push({skuCode:shoppingCart[i].skuCode, unitPrice:shoppingCart[i].unitPrice, qty: shoppingCart[i].qty, subTotal:shoppingCart[i].subTotal});
			}

			SalesOrders.insert({
				username: username,
				shoppingCard: newShoppingCart,
				totalAmount: totalAmount,
				paymentMode: paymentMode,				
				createdAt: new Date
			});
		}
	});






	Meteor.method("echo", function (message) {
		// JsonRoutes.setResponseHeaders({
		//   "Cache-Control": "no-store",
		//   "Pragma": "no-cache",
		//   "Access-Control-Allow-Origin": "*",
		//   "Access-Control-Allow-Methods": "GET, PUT, POST, DELETE, OPTIONS",
		//   "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Requested-With"
		// });

		console.log('Meteor.method("echo"): ' + JSON.stringify(message));	
		return '{message: ' + message.message + '}';
	});

	Meteor.publish("findAllMp3Players", function () {
		console.log('Meteor.publish("findAllMp3Players")');
		return MP3Players.find();
	});

	Meteor.publish("findMp3PlayerBySkuCode", function (skuCode) {
		console.log('Meteor.publish("findMp3PlayerBySkuCode"): ' + skuCode);
		return MP3Players.find({skuCode:skuCode});
	});
});
