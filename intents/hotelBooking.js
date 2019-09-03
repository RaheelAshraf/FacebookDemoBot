module.exports = {

    cardFun() {

        const payload = {
            "fulfillmentMessages": [
                {
                    "text": {
                        "text": [
                            "welcome to hotel booking bot"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "quickReplies": {
                      "title": "How can I help you?",
                      "quickReplies": [
                        "Book Hotel",
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