const { TextCortex } = require("textcortex-hemingwai-js");

let hemingwai = new TextCortex(YOUR_API_KEY);

hemingwai
  .generateEmailSubject({
    keywords: "bags, shoes, t-shirts ",
    parameters: "Young Women",
    source_language: "en",
    character_count: 200,
    creativity: 0.7,
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
