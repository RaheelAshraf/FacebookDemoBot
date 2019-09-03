module.exports = {

    cardFun() {

        const payload = {

            "fulfillmentMessages": [
                {
                    "payload": {
                        "facebook": {
                            "attachment": {
                                "payload": {
                                    "elements": [
                                        {
                                            "default_action": {
                                                "url": "https://google.com",
                                                "type": "web_url",
                                                "webview_height_ratio": "tall"
                                            },
                                            "buttons": [
                                                {
                                                    "url": "https://facebook.com",
                                                    "title": "Link to Facebook",
                                                    "type": "web_url"
                                                },
                                                {
                                                    "type": "postback",
                                                    "title": "Some Text",
                                                    "payload": "Some Text"
                                                }
                                            ],
                                            "subtitle": "Here goes your subtitle.",
                                            "image_url": "https://i.imgur.com/fFxXB2m.png",
                                            "title": "Here is your title!"
                                        },
                                        {
                                            "title": "Here is your title!",
                                            "default_action": {
                                                "type": "web_url",
                                                "webview_height_ratio": "tall",
                                                "url": "https://google.com"
                                            },
                                            "buttons": [
                                                {
                                                    "title": "Link to Facebook",
                                                    "type": "web_url",
                                                    "url": "https://facebook.com"
                                                },
                                                {
                                                    "payload": "Some Text",
                                                    "type": "postback",
                                                    "title": "Some Text"
                                                }
                                            ],
                                            "subtitle": "Here goes your subtitle.",
                                            "image_url": "https://i.imgur.com/fFxXB2m.png"
                                        }
                                    ],
                                    "template_type": "generic",
                                    "image_aspect_ratio":"square"
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

