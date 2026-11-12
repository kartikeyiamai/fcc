import "react";

declare module "react" {
  interface InputHTMLAttributes<T> extends HTMLAttributes<T> {
    fieldType?: string | number;
    checktype?: string;
    compname?: string;
    phoneFormat?: string | number;
    isCountryCodeEnabled?: boolean | string;
    valType?: string;
    phoneFormatType?: string | number;
  }
  interface TextareaHTMLAttributes<T> extends HTMLAttributes<T> {
    fieldType?: string | number;
    checktype?: string;
  }
  interface SelectHTMLAttributes<T> extends HTMLAttributes<T> {
    fieldType?: string | number;
    checktype?: string;
  }
}

