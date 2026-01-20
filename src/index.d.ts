type AnyObj = Record<string, string>;

type Method =
  | 'get' | 'GET'
  | 'delete' | 'DELETE'
  | 'head' | 'HEAD'
  | 'options' | 'OPTIONS'
  | 'post' | 'POST'
  | 'put' | 'PUT'
  | 'patch' | 'PATCH'
  | 'purge' | 'PURGE'
  | 'link' | 'LINK'
  | 'unlink' | 'UNLINK';

export declare interface ResultJSON {
  url: string;
  origin: string;
  header?: AnyObj;
  data?: any;
  // -L/--location follow redirects (boolean flag)
  location?: boolean;
  params?: AnyObj;
  // -F/--form is normalized to an array (even for single occurrence)
  form?: string[];
  method?: Method | (string & {});
  [k in string]?: any;
}

declare function curl2Json(curl: string): ResultJSON;

export = curl2Json;
