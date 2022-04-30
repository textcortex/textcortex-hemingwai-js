const { TextCortex } = require("textcortex-hemingwai-js");

const hemingwai = new TextCortex(YOUR_API_KEY);

hemingwai
  .generateInstagramCaption({
    product: "Rayban Black Finish Sunglasses",
    audience: "University students",
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
