import * as ReducerActions from '../reducers/';
import * as Actions from './';
import { AppThunkPromise } from '../store';
import { apiRequest } from '../../Helpers/apiRequestHandler';
import {
  AuthSuccessResponse,
  UserData,
  GenericData,
} from '../../interfaces';

export const loginAction = (email: string, password: string): AppThunkPromise<string | void> => {
  return async (dispatch) => {
    try {
      const body = {
        email: email,
        password: password,
      };
      const response = await apiRequest<GenericData<AuthSuccessResponse>>({
        url: '/auth/login',
        method: 'POST',
        data: body,
      });
      dispatch(
        ReducerActions.setTokens({
          accessToken: response.data.accessToken,
          refreshToken: response.data.refreshToken,
        }),
      );
    } catch (error) {
      if (error instanceof Error) {
        console.log('error', error);
        return error.message;
      }
    }
  };
};
