const { TextCortex } = require("textcortex-hemingwai-js");

let hemingwai = new TextCortex(YOUR_API_KEY);

hemingwai
  .generateBlogTitle({
    blogCategories: ["startups", "raising vc funding", "being influential"],
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
