import axios, { AxiosError, AxiosInstance } from "axios";

type BuildProps = {
  prompt: string;
  category: string;
  parameters: string;
  character_count: number;
  source_language: string;
  creativity: number;
  n_gen: number;
};

type GenerateProps = {
  prompt: string;
  parameters: string;
  source_language: string;
  character_count: number;
  creativity: number;
  n_gen?: number;
};

class TextCortex {
  private apiKey: string;
  readonly request: AxiosInstance = axios.create({
    baseURL: "https://api.textcortex.com/hemingwai",
    headers: {
      "Content-type": "application/json",
      Accept: "text/plain",
    },
  });

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private processError(error: AxiosError) {
    const errorData = error.response?.data;
    if (errorData.error === 403) {
      throw new Error(
        "API Key is invalid. Check out your API key on https://app.textcortex.com/user/account"
      );
    } else if (errorData.error === 402) {
      throw new Error(
        "Reached API Limits, increase limits by contacting us at dev@textcortex.com or upgrade your account"
      );
    }
    throw error;
  }

  private build({
    prompt,
    category,
    parameters,
    character_count,
    source_language,
    creativity,
    n_gen,
  }: BuildProps) {
    const jsonRequest = {
      prompt: prompt,
      category: category,
      parameters: parameters,
      character_count: character_count,
      source_language: source_language,
      //  Sets creativity, number between 0 and 1. Default is 0.65
      creativity: creativity,
      api_key: this.apiKey,
      n_gen: n_gen,
    };
    return jsonRequest;
  }

  async generate({
    prompt,
    parameters,
    source_language,
    character_count,
    creativity,
    n_gen = 1,
  }: GenerateProps) {
    try {
      const data = this.build({
        prompt,
        category: "Auto Complete",
        parameters,
        character_count,
        source_language,
        creativity,
        n_gen,
      });
      console.log("data", data);
      const res = await this.request({
        method: "POST",
        url: `/generate_text`,
        data,
      });
      console.log("Res", res.data);
    } catch (error: any) {
      this.processError(error as AxiosError);
      console.log("error", error.message);
    }
  }
}

let hemingwai = new TextCortex(
  "gAAAAABht4j63M8buDUobQjj2YvK-aWIlQFZLXmDYg9Wc1hpfwHXDJ2DGvWvJjXlA1owHzag_cgO7htt7ePU4qrYf7fC5dMdO2JQqvxE9I1DBTM_NpY99e9TyWTz5u1oOjtoS24FZaWF"
);

hemingwai.generate({
  prompt: "Was ist los mit dir?",
  parameters: "",
  source_language: "de",
  character_count: 120,
  creativity: 0.7,
});
