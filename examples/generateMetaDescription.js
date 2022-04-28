// const { TextCortex } = require("textcortex-hemingwai-js");
const { TextCortex } = require("../dist/index");

let hemingwai = new TextCortex(YOUR_API_KEY);

hemingwai
  .generateMetaDescription({
    pageTitle: "Urban Fast Intro Video Template",
    pageKeywords: "video templates, stock videos, design elements, ",
  })
  .then((res) => {
    console.log("res: ", res);
  })
  .catch((err) => {
    console.log("err", err);
  });
