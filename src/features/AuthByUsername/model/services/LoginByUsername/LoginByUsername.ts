import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from 'entities/User';
import { USER_LOCALSTORAGE_KEY } from 'shared/conts/localstorage';
import { ThunkConfig } from 'app/providers/StoreProvider/config/StateSchema';

export interface LoginByUsernameProps {
  username: string;
  password: string
}

export const LoginByUsername = createAsyncThunk<
  User,
  LoginByUsernameProps,
  ThunkConfig<string>
  >(
    'login/LoginByUsername',
    async (authData, thunkApi) => {
      const { extra, dispatch, rejectWithValue } = thunkApi;
      try {
        const response = await extra.api.post<User>('/login', authData);

        if (!response.data) {
          throw new Error();
        }

        localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data));
        dispatch(userActions.setAuthData(response.data));

        return response.data;
      } catch (e) {
        console.log(e);
        return rejectWithValue('error');
      }
    },

  );
