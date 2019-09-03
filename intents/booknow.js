module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "text": {
                        "text": [
                            "Here is your order confirmation"
                        ]
                    },
                    "platform": "FACEBOOK"
                },
                {
                    "payload": {
                      "facebook": {
                        "attachment": {
                          "payload": {
                            "template_type": "receipt",
                            "order_number": "12345678902",
                            "currency": "USD",
                            "timestamp": "1428444852",
                            "summary": {
                              "total_tax": 6.19,
                              "total_cost": 100,
                              "subtotal": 75
                            },
                            "elements": [
                              {
                                "currency": "USD",
                                "price": 25,
                                "title": "Hotel California",
                                "quantity": 1,
                                "subtitle": "5 Star",
                                "image_url": "https://texasstation.sclv.com/~/media/Images/Page-Background-Images/Texas/TS_Hotel_King_lowrez.jpg?h=630&la=en&w=1080"
                              }
                            ],
                            "order_url": "http://petersapparel.parseapp.com/order?order_id=123456",
                            "recipient_name": "Raheel Ashraf",
                            "payment_method": "Cash"
                          },
                          "type": "template"
                        }
                      }
                    },
                    "platform": "FACEBOOK"
                  },
                  {
                    "quickReplies": {
                      "title": "Would you like to proceed with it?",
                      "quickReplies": [
                        "Yes",
                        "No"
                      ]
                    },
                    "platform": "FACEBOOK"
                  }
            ]
        }
        return payload; 
    }
}