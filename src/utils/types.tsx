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
export interface TodoData{
  id:string;
  status:boolean;
  content:string
}
export interface initialData{
  data:TodoData[];
  filterData:TodoData[]
  tab:string,
  id:string,
  content:string
}
