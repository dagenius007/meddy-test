export interface IPayout {
  username: string;
  value: string;
  status: string;
  dateAndTime: Date;
}

export interface IMetadata {
  page: number;
  limit: number;
  totalCount: number;
}

export interface IPayoutResponse {
  data: IPayout[];
  metadata: IMetadata;
}
