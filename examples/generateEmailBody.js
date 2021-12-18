const { TextCortex } = require("hemingwai-javascript");

let hemingwai = new TextCortex(YOUR_API_KEY);

hemingwai
  .generateEmailBody({
    email_subject: "Summer Sale on Selected Sunglasses!",
    parameters: "Young Women",
    source_language: "en",
    character_count: 200,
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
