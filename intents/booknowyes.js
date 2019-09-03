module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "text": {
                        "text": [
                            "Thank you for booking with demo bot"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "quickReplies": {
                      "title": "Your order has been placed successfully",
                      "quickReplies": [
                          "Book Again",
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