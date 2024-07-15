import { AxiosBasicCredentials } from 'axios';

export interface CreateBitcoinJsonRpcOptions {
  ancient?: boolean;
  auth?: AxiosBasicCredentials;
}

export type BitcoinFeeEstimateMode = 'UNSET' | 'ECONOMICAL' | 'CONSERVATIVE';
