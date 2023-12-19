interface ErrorData {
  message: string;
  status: boolean;
}
export interface ApiError {
  data: ErrorData;
  status: number;
}