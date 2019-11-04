module.exports = {

    cardFun() {

        const payload = {
            "fulfillmentMessages": [
                {
                    "text": {
                        "text": [
                            "Thank you for ordering with Demobot"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "quickReplies": {
                        "title": "You'r order for desserts has been placed. \n We will contact you shortly",
                        "quickReplies": [
                            "Order Again",
                            "Main Menu",
                            "Exit"
                        ]
                    },
                    "platform": "FACEBOOK"
                }
            ]
        }

        return payload;
    }
}