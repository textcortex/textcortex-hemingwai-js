const { TextCortex } = require("textcortext-hemingwai-javascript");

let hemingwai = new TextCortex(YOUR_API_KEY);

hemingwai
  .generateAds({
    prompt: "Pink Geometric Bag",
    parameters: "Young Women",
    source_language: "en",
    character_count: 200,
    creativity: 0.7,
    n_gen: 2,
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
