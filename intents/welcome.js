module.exports = {

    cardFun() {

        const payload = {
            "fulfillmentMessages": [
                {
                    "text": {
                        "text": [
                            "welcome to demobot"
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
                                            "payload": 'Show Demo'
                                        },
                                        {
                                            "type": 'postback',
                                            "title": 'Talk to human 🤵',
                                            "payload": 'Talk to human 🤵'
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

