module.exports = {

  cardFun() {

    const payload = {

      "fulfillmentMessages": [
        {
          "text": {
              "text": [
                  "Here is your Order Confirmation for Pearl Continental"
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
                      "title": "Pearl Continental",
                      "subtitle": "Seven Star room for 1 Day",
                      "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2p33NIGvulmlbJu9mEGU_PUoOJqqs_MYcQ1YhkIZqcDaBl2Z",
                      "currency": "USD",
                      "price": 250                   }
                  ],
                  "summary": {
                    "total_cost": 250
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