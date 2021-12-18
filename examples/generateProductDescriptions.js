const { TextCortex } = require("hemingwai-javascript");

let hemingwai = new TextCortex(
  "gAAAAABht4j63M8buDUobQjj2YvK-aWIlQFZLXmDYg9Wc1hpfwHXDJ2DGvWvJjXlA1owHzag_cgO7htt7ePU4qrYf7fC5dMdO2JQqvxE9I1DBTM_NpY99e9TyWTz5u1oOjtoS24FZaWF"
);

hemingwai
  .generateProductDescriptions({
    product_title: "Headphone",
    product_brand: "JBL",
    product_features: ["Noise canceling"],
    product_category: ["electronics"],
    source_language: "en",
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
