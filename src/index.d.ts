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
  params?: AnyObj;
  method?: Method | (string & {});
  [k in string]?: any;
}

declare function curl2Json(curl: string): ResultJSON;

export = curl2Json;
