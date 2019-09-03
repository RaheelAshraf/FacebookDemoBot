module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "quickReplies": {
                      "title": "No Problem, will see you soon",
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