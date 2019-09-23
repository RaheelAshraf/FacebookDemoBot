module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "quickReplies": {
                        "title": "Alright! Bye will see you soon",
                        "quickReplies": [
                            "Book Hotel",
                            "Main Menu"
                        ]
                    },
                    "platform": "FACEBOOK"
                }
            ]
        }
        return payload;
    }
}