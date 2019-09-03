module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "payload": {
                        "facebook": {
                            "attachment": {
                                "payload": {
                                    "text": "Sure please choose an option below to start with demo",
                                    "buttons": [
                                        {
                                            "type": 'postback',
                                            "title": 'Food Ordering Bot',
                                            "payload": 'Food Ordering Bot'
                                        },
                                        {
                                            "type": 'postback',
                                            "title": 'Hotel Booking Bot',
                                            "payload": 'hotel booking bot'
                                        },
                                    ],
                                    "template_type": "button"
                                },
                                "type": "template"
                            }
                        }
                    },
                    "platform": "FACEBOOK"
                },
            ]
        }
        return payload; 
    }
}