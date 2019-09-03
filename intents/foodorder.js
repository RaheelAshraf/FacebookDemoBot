module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "payload": {
                        "facebook": {
                            "attachment": {
                                "payload": {
                                    "text": "Sure You can order you food here",
                                    "buttons": [
                                        {
                                            "type": 'postback',
                                            "title": 'Begin Delivery Order',
                                            "payload": 'Begin Delivery Order'
                                        },
                                        {
                                            "type": 'postback',
                                            "title": 'Question/Complaint',
                                            "payload": 'Question/Complaint'
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