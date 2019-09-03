module.exports = {

    cardFun() {

        const payload = {
            "fulfillmentMessages": [
                {
                    "text": {
                        "text": [
                            "welcome to demo chatbot"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "payload": {
                        "facebook": {
                            "attachment": {
                                "payload": {
                                    "text": "How can i help you?",
                                    "buttons": [
                                        {
                                            "type": 'postback',
                                            "title": 'Show Demo',
                                            "payload": 'show demo'
                                        },
                                        {
                                            "type": 'postback',
                                            "title": 'Contact Us',
                                            "payload": 'contact us'
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