import { IAuthState } from "../types/authTypes";

export type Action =
  | { type: "LOGIN"; payload: IAuthState }
  | { type: "LOGOUT" };

export const initialState: IAuthState = {
  isAuthenticated: false,
  user: null,
};

const reducer = (state: IAuthState, action: Action): IAuthState => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        ...action.payload,
      };
    case "LOGOUT":
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
