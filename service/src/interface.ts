/**
 * @description User-Service parameters
 */
export interface IUserOptions {
  uid: number;
  user_name: string;
  remark: string;
  email: string;
  password: string;
  avatar: string;
  
  create_time: number;
  update_time: number;
}
