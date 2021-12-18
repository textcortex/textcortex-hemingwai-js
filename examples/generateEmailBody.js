const { TextCortex } = require("hemingwai-javascript");

let hemingwai = new TextCortex(
  "gAAAAABht4j63M8buDUobQjj2YvK-aWIlQFZLXmDYg9Wc1hpfwHXDJ2DGvWvJjXlA1owHzag_cgO7htt7ePU4qrYf7fC5dMdO2JQqvxE9I1DBTM_NpY99e9TyWTz5u1oOjtoS24FZaWF"
);

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
