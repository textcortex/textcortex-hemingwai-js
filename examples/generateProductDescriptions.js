const { TextCortex } = require("textcortext-hemingwai-javascript");

let hemingwai = new TextCortex(YOUR_API_KEY);

hemingwai
  .generateProductDescriptions({
    product_title: "Headphone",
    product_brand: "JBL",
    product_features: ["Noise canceling"],
    product_category: ["electronics"],
    source_language: "en",
    n_gen: 3,
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
