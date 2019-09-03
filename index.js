'use strict';
const functions = require('firebase-functions');
const { WebhookClient } = require('dialogflow-fulfillment');
const welcomeMessage = require('./intents/welcome');
const ShowDemo = require('./intents/showDemo');
const WelcomeHotel = require('./intents/hotelBooking');
const BookHotel = require('./intents/bookHotel');
const foodOrder = require('./intents/foodorder');
const Menu = require('./intents/foodMenu');
const bookNow = require('./intents/booknow');
const bookNowYes = require('./intents/booknowyes');
const bookNowNo = require('./intents/booknowno');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const _agent = new WebhookClient({ request: request, response: response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

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

    const BookNow = () => {
        const Response = bookNow.cardFun();
        return response.json(Response);
    }

    const BookNowYes = () => {
        const Response = bookNowYes.cardFun();
        return response.json(Response);
    }


    const BookNowNo = () => {
        const Response = bookNowNo.cardFun();
        return response.json(Response);
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

    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('ShowDemo', showDemo);
    intentMap.set('ContactUs', contactUs);
    intentMap.set('HotelBookingWelcome', hotelBookingwelcome);
    intentMap.set('Book Hotel', bookHotel);
    intentMap.set('food bot', foodOrderBot);
    intentMap.set('food delivery', foodMenu);
    intentMap.set('book now', BookNow);
    intentMap.set('book now - yes', BookNowYes);
    intentMap.set('book now - no', BookNowNo);
    _agent.handleRequest(intentMap);
});