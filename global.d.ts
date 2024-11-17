declare module "papaparse" {
    export function parse<T>(
      file: File,
      options: {
        header?: boolean;
        skipEmptyLines?: boolean;
        complete: (results: { data: T[]; errors: any[]; meta: any }) => void;
      }
    ): void;
  
    export function unparse(data: any): string;
  }