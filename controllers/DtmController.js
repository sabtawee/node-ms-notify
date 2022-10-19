const { IncomingWebhook } = require("ms-teams-webhook");
const jf = require("JotForm");
// Read a url from the environment variables
const url =
  "https://veninecable.webhook.office.com/webhookb2/9acb0049-c1e7-4356-a2cb-36a6d127eda4@8dafd5e6-f8d1-424f-ac79-0af7ef73dfdb/IncomingWebhook/56b22273d9a544e8972d57b13f930aaf/28122806-083e-4c46-8f84-1c12515f9096";

// Initialize
const webhook = new IncomingWebhook(url);


const getItAction = async (req, res) => {

  try {
    jf.options({
      debug: true,
      apiKey: "9e8b204ca8931071716ddcf5cd3750ff",
    });
    let sid = "222908663377466";

    jf.getFormSubmissions(sid)
      .then(function (r) {
        // console.log(r[0].answers);
        let datas = r[0].answers;
        console.log(r[0]);
        webhook.send(
          JSON.stringify({
            "@type": "MessageCard",
            "@context": "https://schema.org/extensions",
            summary: "Issue 176715375",
            themeColor: "F11547",
            title: datas['1'].text,
            sections: [
              {
                activityTitle: datas['5'].answer,
                activitySubtitle: datas["6"].prettyFormat,
                activityImage:
                  "https://veninecable.files.wordpress.com/2022/06/55.png",
                facts: [
                  {
                    name: datas["7"].text,
                    value: datas["7"].answer,
                  },
                  {
                    name: datas["17"].text,
                    value: datas["17"].prettyFormat,
                  },
                  {
                    name: "Status",
                    value: "Link แก้ไข : https://www.jotform.com/edit/" + r[0].id,
                  },
                ],
                markdown: true,
              },
            ],
          })
        );
      })
      .fail(function (e) {
        console.log(e);
      });
  } catch (error) {
    console.log({ message: error.message });
  }
};

module.exports = { getItAction };
