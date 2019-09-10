module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "quickReplies": {
                      "title": "Thank you. Your order has been placed",
                      "quickReplies": [
                          "Begin Order/ Delivery",
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