import React, {
  createContext,
  useEffect,
  useReducer,
  useCallback,
} from "react";
import useAxiosPrivate from "../hooks/useAxiosPrivate";
import reducer, { initialState } from "../reducers/AuthReducer";
import { IAuthState } from "../types/authTypes";

const AuthContext = createContext<{
  state: IAuthState;
  dispatch: React.Dispatch<any>;
  initialize: VoidFunction;
}>({
  state: initialState,
  dispatch: () => null,
  initialize: () => null,
});

export const AuthProvider: React.FC<React.PropsWithChildren> = ({
  children,
}): JSX.Element => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const axiosPrivate = useAxiosPrivate();

  const initialize = useCallback(async () => {
    const { data } = await axiosPrivate.get("/profile/me");
    dispatch({ type: "LOGIN", payload: { isAuthenticated: true, ...data } });
  }, [dispatch]);

  useEffect(() => {
    initialize();
  }, []);

  return (
    <AuthContext.Provider value={{ state, dispatch, initialize }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
