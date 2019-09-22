'use strict';
const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const welcomeMessage = require('./intents/welcome');
const ShowDemo = require('./intents/showDemo');
const WelcomeHotel = require('./intents/hotelBooking');
const BookHotel = require('./intents/bookHotel');
const foodOrder = require('./intents/foodorder');
const Menu = require('./intents/foodMenu');
const order = require('./intents/order');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const _agent = new WebhookClient({ request: request, response: response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    
    // const userId = _agent.originalRequest.payload.data.sender.id;


    const welcome = () => {
      const Response = welcomeMessage.cardFun();
      return response.json(Response); 
    }

    const fallback = (agent) => {
        agent.add(`I didn't understand`);
        agent.add(`I'm sorry, can you try again?`);
    }

    // Hotel Booking Intents

    const showDemo = () => {
        const Response = ShowDemo.cardFun();
        return response.json(Response);
    }

    const contactUs = (agent) => {
        agent.add('You can contact us on: \n labkoat@gmail.com');
    }

    const hotelBookingwelcome = () => {
        const Response = WelcomeHotel.cardFun();
        return response.json(Response);
    }

    const bookHotel = () => {
        const Response = BookHotel.cardFun();
        return response.json(Response);
    }

   
    const firstHotel = (agent) => {
        agent.add(`first hotel has been booked`)
    }


    const secondHotel = (agent) => {
        agent.add(`second hotel has been booked`);
    }

    const thirdHotel = (agent) => {
        agent.add(`Third hotel has been booked`);
    }

    // Food Delivery Intents

    const foodOrderBot = () => {
        const Response = foodOrder.cardFun();
        return response.json(Response);
    }

    const foodMenu = () => {
        const Response = Menu.cardFun();
        return response.json(Response);
    }

    const orderFood = () => {
        const Response = order.cardFun();
        return response.json(Response);
    }

    const exit = (agent) => {

        agent.add(`Bye. Will See You Again`);
    }

    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('ShowDemo', showDemo);
    intentMap.set('ContactUs', contactUs);
    intentMap.set('HotelBookingWelcome', hotelBookingwelcome);
    intentMap.set('Book Hotel', bookHotel);
    intentMap.set('firstHotel', firstHotel);
    intentMap.set('secondHotel', secondHotel);
    intentMap.set('thirdHotel', thirdHotel);
    intentMap.set('food bot', foodOrderBot);
    intentMap.set('food delivery', foodMenu);
    intentMap.set('order', orderFood);
    intentMap.set('Exit', exit);
    _agent.handleRequest(intentMap);
});






