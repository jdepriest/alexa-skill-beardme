'use strict';
var Alexa = require('alexa-sdk');
var APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

var languageStrings = {
    "en-GB": {
        "translation": {
            "FACTS": [
              "The Balbo is an extended version of the Van Dyke which wraps around the mouth, with the ends of the mustache flared out beyond the lines that connect to the chin.",
              "The simple term beard is an umbrella term which can include any style of facial hair, although generally excluding a mustache by itself.",
              "A full beard is one which shows full, unmodified growth on all available areas of the face and neck, including the mustache, chin, sideburns, and cheeks.",
              "The Chin curtain is a full beard without a mustache or neck hair.",
              "The Chinstrap beard has sideburns which are connected to each other by a narrow line of hair along the jaw, resembling a helmet strap harnessed to one's chin.",
              "The Clean shaven facial hairstyle contains no facial hair at all other than eyebrows and short, neatly trimmed sideburns.",
              "Friendly muttonchops are Muttonchops which are connected by a mustache.",
              "The Fu Manchu is a thin, narrow, mustache that grows downward in two very long tendrils from the upper lip, with the tapered, pointed ends hanging past the jawline.",
              "The Goat patch is facial hair growing only from the chin directly beneath the mouth.",
              "A Goatee is a beard style incorporating hair on the chin but not the cheeks.",
              "The Goatee and mustache is a goatee in which the mustache is allowed to connect to the hair on the chin.",
              "The Handlebar mustache is a mustache which has its ends grown much longer and often flared out.",
              "A Horseshoe mustache is a full mustache with ends that extend down in parallel straight lines beyond the upper lip and down to the jawline.",
              "A mustache is defined as any facial hair grown specifically on the upper lip.",
              "Mutton chops are a more elaborate growth of sideburns which also grow larger toward the chin, resembling a mutton chop",
              "A Neckbeard is a beard which does not include any hair on the face, but includes the hair of the neck, or under the jaw, or both.",
              "A Pencil mustache is a mustache which is very thin, usually just above the line of the upper lip.",
              "The Shenandoah is a fuller version of the chin curtain in which only the mustache is shaved, allowing the hair on the neck to grow out.",
              "Sideburns are the patch of hair in front of the ears which connects a beard to the hair of one's head.",
              "Side-whiskers are related to sideburns and muttonchops, but considerably more extreme.",
              "The Soul Patch is the patch of hair just below the lower lip, not including the hair over the chin.",
              "Stubble is any length of hair which is long enough to be seen, but short enough to not fully cover the skin beneath.",
              "A Toothbrush mustache is a narrow but tall mustache which generally does not extend beyond the sides of the nose, and extends the full height of the upper lip.",
              "The Van Dyke beard is a type of goatee in which the chin hair is disconnected from the mustache hair.",
              "The Walrus mustache is characterized by whiskers that are thick, bushy, and droop over the mouth.",
              "The Zappa consists of a wide soul patch and full mustache that extends slightly downward past the corners of the mouth. Named for American musician Frank Zappa."

            ],
            "SKILL_NAME" : "British Beard Me",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a beard fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    },
    "en-US": {
        "translation": {
            "FACTS": [
              "The Balbo is an extended version of the Van Dyke which wraps around the mouth, with the ends of the mustache flared out beyond the lines that connect to the chin.",
              "The simple term beard is an umbrella term which can include any style of facial hair, although generally excluding a mustache by itself.",
              "A full beard is one which shows full, unmodified growth on all available areas of the face and neck, including the mustache, chin, sideburns, and cheeks.",
              "The Chin curtain is a full beard without a mustache or neck hair.",
              "The Chinstrap beard has sideburns which are connected to each other by a narrow line of hair along the jaw, resembling a helmet strap harnessed to one's chin.",
              "The Clean shaven facial hairstyle contains no facial hair at all other than eyebrows and short, neatly trimmed sideburns.",
              "Friendly muttonchops are Muttonchops which are connected by a mustache.",
              "The Fu Manchu is a thin, narrow, mustache that grows downward in two very long tendrils from the upper lip, with the tapered, pointed ends hanging past the jawline.",
              "The Goat patch is facial hair growing only from the chin directly beneath the mouth.",
              "A Goatee is a beard style incorporating hair on the chin but not the cheeks.",
              "The Goatee and mustache is a goatee in which the mustache is allowed to connect to the hair on the chin.",
              "The Handlebar mustache is a mustache which has its ends grown much longer and often flared out.",
              "A Horseshoe mustache is a full mustache with ends that extend down in parallel straight lines beyond the upper lip and down to the jawline.",
              "A mustache is defined as any facial hair grown specifically on the upper lip.",
              "Mutton chops are a more elaborate growth of sideburns which also grow larger toward the chin, resembling a mutton chop",
              "A Neckbeard is a beard which does not include any hair on the face, but includes the hair of the neck, or under the jaw, or both.",
              "A Pencil mustache is a mustache which is very thin, usually just above the line of the upper lip.",
              "The Shenandoah is a fuller version of the chin curtain in which only the mustache is shaved, allowing the hair on the neck to grow out.",
              "Sideburns are the patch of hair in front of the ears which connects a beard to the hair of one's head.",
              "Side-whiskers are related to sideburns and muttonchops, but considerably more extreme.",
              "The Soul Patch is the patch of hair just below the lower lip, not including the hair over the chin.",
              "Stubble is any length of hair which is long enough to be seen, but short enough to not fully cover the skin beneath.",
              "A Toothbrush mustache is a narrow but tall mustache which generally does not extend beyond the sides of the nose, and extends the full height of the upper lip.",
              "The Van Dyke beard is a type of goatee in which the chin hair is disconnected from the mustache hair.",
              "The Walrus mustache is characterized by whiskers that are thick, bushy, and droop over the mouth.",
              "The Zappa consists of a wide soul patch and full mustache that extends slightly downward past the corners of the mouth. Named for American musician Frank Zappa."

            ],
            "SKILL_NAME" : "American Beard Me",
            "GET_FACT_MESSAGE" : "Here's your fact: ",
            "HELP_MESSAGE" : "You can say tell me a beard fact, or, you can say exit... What can I help you with?",
            "HELP_REPROMPT" : "What can I help you with?",
            "STOP_MESSAGE" : "Goodbye!"
        }
    }
};

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.APP_ID = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewBeardFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        var factArr = this.t('FACTS');
        var factIndex = Math.floor(Math.random() * factArr.length);
        var randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t("GET_FACT_MESSAGE") + randomFact;
        this.emit(':tellWithCard', speechOutput, this.t("SKILL_NAME"), randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = this.t("HELP_MESSAGE");
        var reprompt = this.t("HELP_MESSAGE");
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', this.t("STOP_MESSAGE"));
    }
};
