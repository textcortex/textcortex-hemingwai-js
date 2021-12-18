const { TextCortex } = require("hemingwai-javascript");

let hemingwai = new TextCortex(YOUR_API_KEY);

hemingwai
  .generate({
    prompt: "Was ist los mit dir?",
    parameters: "",
    source_language: "de",
    character_count: 120,
    creativity: 0.7,
  })
  .then((res) => {
    console.log("res", res);
  })
  .catch((err) => {
    cosole.log(err);
  });
