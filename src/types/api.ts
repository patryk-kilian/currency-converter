type ResponseMeta = {
  code: number;
  disclaimer: string;
};

export type Currency = {
  id: number;
  name: string;
  short_code: string;
  code: string;
  precision: number;
  subunit: number;
  symbol: string;
  symbol_first: boolean;
  decimal_mark: string;
  thousands_separator: string;
};

export type Currencies = Record<string, Currency>;

export type CurrencyResponse = Currencies & {
  meta: ResponseMeta;
  response: Currencies;
};

export type ConversionData = {
  timestamp: number;
  date: string;
  from: string;
  to: string;
  amount: number;
  value: number;
};

export type CurrencyConversionResponse = ConversionData & {
  meta: ResponseMeta;
  response: ConversionData;
};
