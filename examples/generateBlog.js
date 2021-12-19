const { TextCortex } = require("textcortex-hemingwai-js");

let hemingwai = new TextCortex(YOUR_API_KEY);

hemingwai
  .generateBlog({
    blog_title: "Why SEO is important for your Business?",
    blog_categories: ["SEO", "Business"],
    character_count: 300,
    creativity: 0.5,
    source_language: "en",
    n_gen: 2,
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
