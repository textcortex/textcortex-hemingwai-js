import axios, { AxiosError, AxiosInstance } from "axios";
import {
  BuildProps,
  GenerateProps,
  GenerateBlogProps,
  GenerateAdsProps,
  GenerateEmailBodyProps,
  GenerateEmailSubjectProps,
  GenerateProductDescriptionProps,
  RequestData,
  GenerateMetaDescProps,
  GenerateBlogTitleProps,
} from "./types/main";

type ErrorResponse = AxiosError & {
  errorMessage?: string;
};
export class TextCortex {
  private apiKey: string;
  private request: AxiosInstance = axios.create({
    baseURL: "https://api.textcortex.com/hemingwai",
    headers: {
      "Content-type": "application/json",
      Accept: "text/plain",
    },
  });

  constructor(apiKey: string) {
    this.apiKey = apiKey;
  }

  private processError(error: AxiosError): ErrorResponse {
    const errorData = error.response?.data;
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
    throw error;
  }

  private build({
    prompt,
    category,
    parameters,
    character_count = 384,
    source_language = "auto",
    creativity = 0.65,
    n_gen = 1,
  }: BuildProps): RequestData {
    const reqData = {
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
    return reqData;
  }

  private async makeRequest(data: RequestData) {
    try {
      const res = await this.request({
        method: "POST",
        url: `/generate_text`,
        data,
      });
      return res.data;
    } catch (error: any) {
      this.processError(error as AxiosError);
    }
  }

  async generate({
    prompt,
    parameters,
    source_language,
    character_count,
    creativity,
    n_gen,
  }: GenerateProps) {
    const data = this.build({
      prompt,
      category: "Auto Complete",
      parameters,
      character_count,
      source_language,
      creativity,
      n_gen,
    });
    return this.makeRequest(data);
  }

  async generateBlog(input: GenerateBlogProps) {
    let parameters = "";
    if (input.blog_categories) {
      parameters = `Blog Categories: ${JSON.stringify(input.blog_categories)}`;
    }

    const data = this.build({
      character_count: input.character_count,
      source_language: input.source_language,
      creativity: input.creativity,
      n_gen: input.n_gen,
      prompt: input.blog_title,
      category: "Blog Body",
      parameters,
    });
    return this.makeRequest(data);
  }

  async generateAds(input: GenerateAdsProps) {
    const data = this.build({
      prompt: input.prompt,
      category: "Ads",
      parameters: input.parameters,
      character_count: input.character_count,
      creativity: input.creativity,
      n_gen: input.n_gen,
      source_language: input.source_language,
    });

    return this.makeRequest(data);
  }

  async generateEmailBody(input: GenerateEmailBodyProps) {
    const data = this.build({
      prompt: input.email_subject,
      category: "Email Body",
      parameters: input.parameters,
      character_count: input.character_count,
      creativity: input.creativity,
      n_gen: input.n_gen,
      source_language: input.source_language,
    });

    return this.makeRequest(data);
  }

  async generateEmailSubject(input: GenerateEmailSubjectProps) {
    const data = this.build({
      prompt: input.keywords,
      category: "Email Subject",
      parameters: input.parameters,
      character_count: input.character_count,
      creativity: input.creativity,
      n_gen: input.n_gen,
      source_language: input.source_language,
    });

    return this.makeRequest(data);
  }

  async generateProductDescriptions({
    product_brand = "",
    product_category = [],
    product_features = [],
    ...input
  }: GenerateProductDescriptionProps) {
    let parameters = "";
    if (product_brand.length > 0) {
      parameters = parameters + "Brand: '" + product_brand + "'";
    }
    if (product_category.length > 0) {
      if (parameters === "") {
        parameters =
          parameters + "Category: " + JSON.stringify(product_category);
      } else {
        parameters =
          parameters + " Category: " + JSON.stringify(product_category);
      }
    }

    if (product_features.length > 0) {
      if (parameters === "") {
        parameters =
          parameters + "Features: " + JSON.stringify(product_features);
      } else {
        parameters =
          parameters + " Features: " + JSON.stringify(product_features);
      }
    }

    const data = this.build({
      prompt: input.product_title,
      category: "Product Description",
      parameters: parameters,
      character_count: input.character_count,
      creativity: input.creativity,
      n_gen: input.n_gen,
      source_language: input.source_language,
    });

    return this.makeRequest(data);
  }

  async generateMetaDescription(input: GenerateMetaDescProps) {
    const data = this.build({
      prompt: input.pageTitle,
      category: "Meta Description",
      parameters: input.pageKeywords,
      character_count: input.character_count || 256,
      creativity: input.creativity,
      n_gen: input.n_gen,
      source_language: input.source_language,
    });
    return this.makeRequest(data);
  }

  async generateBlogTitle(input: GenerateBlogTitleProps) {
    const data = this.build({
      prompt: JSON.stringify(input.blogCategories),
      category: "Blog Title",
      parameters: "",
      character_count: input.character_count,
      creativity: input.creativity,
      n_gen: input.n_gen,
      source_language: input.source_language,
    });
    return this.makeRequest(data);
  }
}
