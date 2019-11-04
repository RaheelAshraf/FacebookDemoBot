
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
                                            "image_url": "https://mcdonalds.com.pk/wp-content/uploads/McRoyale-600x600.png",
                                            "title": "Chicken Burger",
                                            "buttons": [
                                                {
                                                    "type": "postback",
                                                    "title": "Order 🍔",
                                                    "payload": "chicken burger",
                                                }
                                            ],
                                            "subtitle": "Price: $5"
                                        },
                                        {
                                            "image_url": "https://mcdonalds.com.pk/wp-content/uploads/Crispy-Chicken-600x600.png",
                                            "title": "Crispy Chicken",
                                            "buttons": [
                                                {
                                                    "type": "postback",
                                                    "title": "Order 🍗",
                                                    "payload": "crispy chicken"
                                                }
                                            ],
                                            "subtitle": "Price: $4"
                                        },
                                        {
                                            "image_url": "https://mcdonalds.com.pk/wp-content/uploads/Double-Cheese-Burger-1.png",
                                            "title": "Beef Burger",
                                            "buttons": [
                                                {
                                                    "type": "postback",
                                                    "title": "Order 🍔",
                                                    "payload": "beef burger"
                                                }
                                            ],
                                            "subtitle": "Price: $6"
                                        },
                                        {
                                            "image_url": "https://mcdonalds.com.pk/wp-content/uploads/Chocolate-and-Strawberry-Sundae-600x600.png",
                                            "title": "Sides and Desserts",
                                            "buttons": [
                                                {
                                                    "type": "postback",
                                                    "title": "Order 🍨",
                                                    "payload": "dessert"
                                                }
                                            ],
                                            "subtitle": "Price: $2"
                                        },
                                        {
                                            "image_url": "https://mcdonalds.com.pk/wp-content/uploads/Coke-Zero-600x600.png",
                                            "title": "Beverages",
                                            "buttons": [
                                                {
                                                    "type": "postback",
                                                    "title": "Order 🥤",
                                                    "payload": "beverages"
                                                }
                                            ],
                                            "subtitle": "Price: $1"
                                        },
                                    ],
                                    "image_aspect_ratio": "square"
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