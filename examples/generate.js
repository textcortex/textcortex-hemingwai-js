const TextCortex = require("hemingwai-javascript");

let hemingwai = new TextCortex(
  "gAAAAABht4j63M8buDUobQjj2YvK-aWIlQFZLXmDYg9Wc1hpfwHXDJ2DGvWvJjXlA1owHzag_cgO7htt7ePU4qrYf7fC5dMdO2JQqvxE9I1DBTM_NpY99e9TyWTz5u1oOjtoS24FZaWF"
);

try {
  const res = hemingwai
    .generate({
      prompt: "Was ist los mit dir?",
      parameters: "",
      source_language: "de",
      character_count: 120,
      creativity: 0.7,
    })
    .then((res) => {
      console.log("res", res);
    });
} catch (error) {
  console.log("error ", error);
}
