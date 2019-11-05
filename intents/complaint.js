module.exports = {

    cardFun() {

        const payload = {
            "fulfillmentMessages": [
                {
                    "quickReplies": {
                      "title":  `Thank you for reaching out to us.
We will get back to you shortly`,
                      "quickReplies": [
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

