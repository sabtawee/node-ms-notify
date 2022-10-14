const ResultModel = require("../models/ResultModel");
const { IncomingWebhook } = require("ms-teams-webhook");

// Read a url from the environment variables
const url =
  "https://veninecable.webhook.office.com/webhookb2/9acb0049-c1e7-4356-a2cb-36a6d127eda4@8dafd5e6-f8d1-424f-ac79-0af7ef73dfdb/IncomingWebhook/2e28d11dd38e463f92bff71087f006e5/28122806-083e-4c46-8f84-1c12515f9096";

// Initialize
const webhook = new IncomingWebhook(url);

const gutJust = async (req, res) => {
  try {
    let id = req.body.submissionID
    let name = req.body.q17_input17
    let obj = req.body.q31_input31
    console.log(id)
    console.log(name)
    console.log(obj)
    await webhook.send(
      JSON.stringify({
        "@type": "MessageCard",
        "@context": "https://schema.org/extensions",
        summary: "Issue 176715375",
        themeColor: "0078D7",
        title: 'Issue opened: "Push notifications not working"',
        sections: [
          {
            activityTitle: id,
            activitySubtitle: name,
            activityImage:
              "https://connectorsdemo.azurewebsites.net/images/MSC12_Oscar_002.jpg",
  
            text: "There is a problem with Push notifications, they don't seem to be picked up by the connector.",
          },
        ],
      })
    );
  } catch (error) {
    console.log({ message: error.message })
  }
}

const getmet = async (req, res) => {
  res.json("hello world")
}



module.exports = { gutJust, getmet };
