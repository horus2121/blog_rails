import { RootState } from "./store";

export const getUser = (store: RootState) =>
    store && store.user ? store.user : []