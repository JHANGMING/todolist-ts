interface ErrorData {
  message: string;
  status: boolean;
}
export interface ApiError {
  data: ErrorData;
  status: number;
}

export interface authData{
  nickname:string,
  token:string,
}
