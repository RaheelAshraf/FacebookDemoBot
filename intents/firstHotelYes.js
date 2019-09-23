module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "text": {
                        "text": [
                            `Thank you for booking with demo bot`
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "text": {
                        "text": [
                            `We will get back to you ASAP`
                        ]
                    },
                    "platform": "FACEBOOK"
                }
            ]
        }
        return payload;
    }
}