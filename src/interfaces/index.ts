export interface GenericData<T> {
  data: T;
}

export interface UserStore {
  isAuth: boolean;
  userData: null | UserData;
  accessToken: null | string;
  refreshToken: null | string;
}


export interface UserData {
  id: string;

}

export interface AuthSuccessResponse {
  accessToken: string;
  refreshToken: string;
}
