import { Store, configureStore } from "@reduxjs/toolkit";
import userSlice from "../src/features/user/userSlice";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const store: Store = configureStore({
  reducer: {
    user: userSlice,
  },
});

export const useAppDispatch: () => typeof store.dispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<
  ReturnType<typeof store.getState>
> = useSelector;
