module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "payload": {
                        "facebook": {
                            "attachment": {
                                "payload": {
                                    "template_type": "generic",
                                    "elements": [
                                        {
                                            "image_url": "https://texasstation.sclv.com/~/media/Images/Page-Background-Images/Texas/TS_Hotel_King_lowrez.jpg?h=630&la=en&w=1080",
                                            "title": "Hotel California",
                                            "buttons": [
                                                {
                                                    "type": "postback",
                                                    "title": "Book Now 🏨",
                                                    "payload": " book first hotel"
                                                }
                                            ],
                                            "subtitle": "5 Star \nPrice: $100 Per Day"
                                        },
                                        {
                                            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMxWAipET12AtXfzCH4tkpiawneQ201ySPYkEPQZkMxpt6ebp5_Q",
                                            "title": "Hotel Castleway",
                                            "buttons": [
                                                {
                                                    "type": "postback",
                                                    "title": "Book Now 🏨",
                                                    "payload": "book second hotel"
                                                }
                                            ],
                                            "subtitle": "4 Star \nPrice: $60 Per Day"
                                        },
                                        {
                                            "image_url": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk2p33NIGvulmlbJu9mEGU_PUoOJqqs_MYcQ1YhkIZqcDaBl2Z",
                                            "title": "Pearl Continental",
                                            "buttons": [
                                                {
                                                    "type": "postback",
                                                    "title": "Book Now 🏨",
                                                    "payload": "book third hotel"
                                                }
                                            ],
                                            "subtitle": "7 Star \nPrice: 250$ Per Day"
                                        }
                                    ],
                                    "image_aspect_ratio": "horizontal"
                                },
                                "type": "template"
                            }
                        }
                    },
                    "platform": "FACEBOOK"
                },
            ]
        }

        return payload;
    }
}