const { TextCortex } = require("hemingwai-javascript");

let hemingwai = new TextCortex(
  "gAAAAABht4j63M8buDUobQjj2YvK-aWIlQFZLXmDYg9Wc1hpfwHXDJ2DGvWvJjXlA1owHzag_cgO7htt7ePU4qrYf7fC5dMdO2JQqvxE9I1DBTM_NpY99e9TyWTz5u1oOjtoS24FZaWF"
);

hemingwai
  .generateBlog({
    blog_title: "Why SEO is important for your Business?",
    blog_categories: ["SEO", "Business"],
    character_count: 300,
    creativity: 0.5,
    source_language: "en",
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
