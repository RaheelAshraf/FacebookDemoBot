module.exports = {

  cardFun() {

    const payload = {

      "fulfillmentMessages": [
        {
          "text": {
              "text": [
                  "Here is your Order Confirmation for Hotel Castleway"
              ]
          },
          "platform": "FACEBOOK"
      },
        {
          "payload": {
            "facebook": {
              "attachment": {
                "type": "template",
                "payload": {
                  "currency": "USD",
                  "order_number": "12345678902",
                  "elements": [
                    {
                      "title": "Hotel Castleway",
                      "subtitle": "Four Star room for 1 Day",
                      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxWAipET12AtXfzCH4tkpiawneQ201ySPYkEPQZkMxpt6ebp5_Q",
                      "currency": "USD",
                      "price": 60                    }
                  ],
                  "summary": {
                    "total_cost": 60
                  },
                  "timestamp": "1428444852",
                  "order_url": "http://petersapparel.parseapp.com/order?order_id=123456",
                  "recipient_name": "Raheel Ashraf",
                  "payment_method": "Visa",
                  "template_type": "receipt"
                }
              }
            }
          },
          "platform": "FACEBOOK"
        },
        {
          "quickReplies": {
            "title": "Would you like to proceed with your booking?",
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