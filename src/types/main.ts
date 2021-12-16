export interface Base {
  character_count?: number;
  source_language?: Country;
  creativity?: number;
  n_gen?: number;
}

export interface BuildProps extends Base {
  prompt: string;
  category: string;
  parameters: string;
}

export interface GenerateProps extends Base {
  prompt: string;
  parameters: string;
}

export interface GenerateBlogProps extends Base {
  blog_title: string;
  blog_categories: string;
}

export interface GenerateAdsProps extends GenerateProps {}

export interface GenerateEmailBodyProps extends Base {
  email_subject: string;
  parameters: string;
}

export interface GenerateEmailSubjectProps extends Base {
  keywords: string;
  parameters: string;
}

export interface GenerateProductDescriptionProps extends Base {
  product_title: string;
  product_brand?: string;
  product_category?: string[];
  product_features?: string[];
}

export interface RequestData extends Base {
  prompt: string;
  category: string;
  parameters: string;
  character_count: number;
  source_language: Country;
  creativity: number;
  api_key: string;
  n_gen: number;
}

const countries = [
  "af",
  "sq",
  "am",
  "ar",
  "hy",
  "az",
  "bn",
  "bs",
  "bg",
  "ca",
  "zh",
  "zh-TW",
  "hr",
  "cs",
  "da",
  "fa-AF",
  "nl",
  "en",
  "et",
  "fa",
  "tl",
  "fi",
  "fr",
  "fr-CA",
  "ka",
  "de",
  "el",
  "gu",
  "ht",
  "ha",
  "he",
  "hi",
  "hu",
  "is",
  "id",
  "ga",
  "it",
  "ja",
  "kn",
  "kk",
  "ko",
  "lv",
  "lt",
  "mk",
  "ms",
  "ml",
  "mt",
  "mr",
  "mn",
  "no",
  "ps",
  "pl",
  "pt",
  "pt-PT",
  "pa",
  "ro",
  "ru",
  "sr",
  "si",
  "sk",
  "sl",
  "so",
  "es",
  "es-MX",
  "sw",
  "sv",
  "ta",
  "te",
  "th",
  "tr",
  "uk",
  "ur",
  "uz",
  "vi",
  "cy",
  "auto",
] as const;

type Country = typeof countries[number];
