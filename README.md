# [hemingwai-javascript](https://textcortex.com/documentation/api)

![hemingwai-javascript](./textcortex_logo.png)

TextCortex API javascript packages for generating content even faster! Generate product descriptions, blogs, ads and more using GPT architecture with a single request to TextCortex API a.k.a HemingwAI
\

## Table of Contents

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [hemingwai-javascript](#hemingwai-javascript)
  - [Table of Contents](#table-of-contents)
  - [Installation and usage](#installation-and-usage)
    - [Get your api key:](#get-your-api-key)
    - [Response:](#response)
    - [API key related errors](#api-key-related-errors)
  - [What kind of texts are possible to generate?](#what-kind-of-texts-are-possible-to-generate)
  - [Text Generation Variables](#text-generation-variables)
  - [Examples](#examples)
  - [Issues](#issues)
    - [❓ Questions](#-questions)
    - [🐞 Bugs](#-bugs)
    - [💡 Feature Requests](#-feature-requests)
  - [Maintainer/Creator](#maintainercreator)
    - [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation and usage

The easiest way to install hemingwai-javascript is using npm or yarn.

```
yarn add hemingwai-javascript
```

Or

for installation via yarn

```
npm install hemingwai-javascript
```

### Get your api key:

1. Signup at https://textcortex.com
2. Sign-in and click on account on top right.
3. Go to API Key section and copy your key.

\
Start generating content with a single line of code!

```js
import { TextCortex } from "hemingwai-javascript";

const hemingwai = new TextCortex(YOUR_API_KEY);

hemingwai.generateProductDescriptions({
  product_title: "Headphone",
  product_brand: "JBL",
  product_features: ["Noise canceling"],
  product_category: ["electronics"],
  source_language: "en",
});
```

### Response:

```js
[
  {
    generated_text:
      " The JBL K8 In-Ear Noise Canceling Earbuds are designed to block out unwanted ambient noise while you're on the go. If you prefer music without distraction, these earphones will do the job for you. Made with a dynamic driver and an inline microphone for exceptional sound quality, they come in black and feature built-in volume control.",
    rank: 0.9762,
    text_length: 336,
    word_frequency: [],
    word_count: 56,
  },
];
```

### API key related errors

API key related errors have an error message attached to them as follows:

```js
if (errorData.error === 403) {
  throw {
    errorMessage:
      "API Key is invalid. Check out your API key on https://app.textcortex.com/user/account",
    ...error,
  };
} else if (errorData.error === 402) {
  throw {
    errorMessage:
      "Reached API Limits, increase limits by contacting us at dev@textcortex.com or upgrade your account",
    ...error,
  };
}
```

## What kind of texts are possible to generate?

Currently we support the following methods for generating copy text like the following:

```js
// Generate Blog Articles:
hemingwai.generateBlog;

// Autocomplete the rest using Hemingwai
hemingwai.generate;

// Generate Ad copies using Hemingwai
hemingwai.generateAds;

// Generate Email Body using Hemingwai
hemingwai.generateEmailBody;

// Generate Email Subject using Hemingwai
hemingwai.generateEmailSubject;

// Generate Product Descriptions using Hemingwai
hemingwai.generateProductDescriptions;
```

## Text Generation Variables

There are some variables that you need to send before making a request to Hemingwai.

Here is a brief summary of what those variables are:

- `prompt`: Prompting the HemingwAI to start writing on a specific subject

- `creativity`: Floating number between 0-1. 0 being the lowest creativity and 1 being the highest. Default is 0.7

- `character_length`: Integer which defines the maximum amount of characters that can be produced by the HemingwAI

- `source_language`: Language code of the source language of the written prompt. for example 'en' for English and 'de' for German.
  [We support 72 languages](https://docs.aws.amazon.com/translate/latest/dg/what-is.html#what-is-languages). If you don't know the language code you can also use 'auto' for this field to automatically sense the input language.

- `parameters`: Used for setting the tone of the generated copy text. It can be basically anything but please keep it plausible :)

<br/>

## Examples

See [examples](https://github.com/textcortex/hemingwai-javascript/tree/master/examples) for examples.

Note: while generating ads, you can add your target segment as an option.

<br/>

## Issues

Looking to contribute? You are welcome. Just fork and PR to staging branch.
<br/>
<br/>

### ❓ Questions

You can have a look at the [HemingwAI's documentation](https://textcortex.com/documentation/api) on TextCortex website
<br/>

Or talk to us at the [TextCortex Dev Community on slack](https://join.slack.com/t/textcortexaicommunity/shared_invite/zt-rmaw7j10-Lz9vf86aF5I_fYZAS7JafQ)
<br/>
<br/>

### 🐞 Bugs

Please file an issue for bugs, missing documentation, or unexpected behavior.

[**See Bugs**][bugs]
<br/>
<br/>

### 💡 Feature Requests

We are happy. Please file an issue to suggest new features. Vote on feature requests by adding a 👍. This helps maintainers prioritize what to work on.
<br/>
<br/>

## Maintainer/Creator

[TextCortex Team](https://textcortex.com) and [Abreham Gezahegn](https://github.com/abrehamgezahegn)

#### License

MIT

[bugs]: https://github.com/textcortex/hemingwai-javascript/labels/bug
