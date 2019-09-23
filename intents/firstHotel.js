module.exports = {

  cardFun() {

    const payload = {

      "fulfillmentMessages": [
        {
          "text": {
              "text": [
                  "Here is your Order Confirmation for Hotel California"
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
                      "title": "Hotel California",
                      "subtitle": "Five Star room for 1 night",
                      "image_url": "https://texasstation.sclv.com/~/media/Images/Page-Background-Images/Texas/TS_Hotel_King_lowrez.jpg?h=630&la=en&w=1080",
                      "currency": "USD",
                      "price": 100
                    }
                  ],
                  "summary": {
                    "total_cost": 100
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