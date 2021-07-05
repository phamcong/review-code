import { ActionType, createAction } from "@ngrx/store";

export const ADD_PRODUCT_INTO_ORDER = "[ADD] Product into orders"
export const addProductIntoOrder = createAction(ADD_PRODUCT_INTO_ORDER);
export const UPDATE_QUANTITY = '[Update] Quantity';
export const updateQuantity = createAction(UPDATE_QUANTITY);
export const REMOVE_ORDER = "[REMOVE] order"
export const removeOrder = createAction(REMOVE_ORDER);

export type OrdersActions = ActionType<typeof addProductIntoOrder> |  ActionType<typeof updateQuantity> |  ActionType<typeof removeOrder>;
