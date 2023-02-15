type AnyObj = Record<string, string>;

type Method = 'OPTIONS' | 'PUT' | 'PATCH' | 'DELETE' | 'TRACE' | 'CONNECT'
  | 'options' | 'put' | 'patch' | 'delete' | 'trace' | 'connect';

interface ResultJSON {
  url: string;
  origin: string;
  header?: AnyObj;
  data?: any;
  params?: AnyObj;
  method?: Method;
  [k in string]?: any;
}

declare function curl2Json(curl: string): ResultJSON;

export = curl2Json;
