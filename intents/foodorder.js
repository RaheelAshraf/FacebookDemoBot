module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "payload": {
                        "facebook": {
                            "attachment": {
                                "payload": {
                                    "text": "Sure! Please Select an Option Below",
                                    "buttons": [
                                        {
                                            "type": 'postback',
                                            "title": 'Begin Delivery Order 🛵',
                                            "payload": 'Begin Delivery Order'
                                        },
                                        {
                                            "type": 'postback',
                                            "title": 'Question/Complaint ☎️',
                                            "payload": 'complaint'
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