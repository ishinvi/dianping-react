import url from "../../utils/url";
import { FETCH_DATA } from "../middleware/api";
import {
  schema as orderSchema,
  USED_TYPE,
  TO_PAY_TYPE,
  AVILABLE_TYPE,
  REFUND_TYPE
} from "./entities/orders";
import { combineReducers } from "../../../../../../Library/Caches/typescript/3.5/node_modules/redux";
const initialState = {
  orders: {
    isFetching: false,
    ids: [],
    toPayIds: [], //待付款的订单id
    availableIds: [], //可使用的订单id
    refundIds: [] //退款订单id
  },
  currentTab: 0
};

//actionTypes
export const types = {
  //获取订单列表
  FETCH_ORDERS_REQUEST: "USER/FETCH_ORDERS_REQUEST",
  FETCH_ORDERS_SUCCESS: "USER/FETCH_ORDERS_SUCCESS",
  FETCH_ORDERS_FAILURE: "USER/FETCH_ORDERS_FAILURE",

  //设置当前选中tab
  SET_CURRENT_TAB: "USER/SET_CURRENT_TAB"
};

//actions
export const actions = {
  //获取订单列表
  loadOrders: () => {
    return (dispatch, getState) => {
      const { ids } = getState().user.orders;
      if (ids.length > 0) {
        return null;
      }
      const endPoint = url.getOrders();
      dispatch(fetchOrders(endPoint));
    };
  },
  setCurrentTab: index => ({
    type: types.SET_CURRENT_TAB,
    index
  })
};

fetchOrders = endPoint => ({
  [FETCH_DATA]: {
    types: [
      types.FETCH_ORDERS_REQUEST,
      types.FETCH_ORDERS_SUCCESS,
      types.FETCH_ORDERS_FAILURE
    ],
    endPoint,
    orderSchema
  }
});

//reducer
const orders = (state = initialState.orders, action) => {
  switch (action) {
    case types.FETCH_ORDERS_REQUEST:
      return { ...state, isFetching: true };
    case types.FETCH_ORDERS_SUCCESS:
      const toPayIds = action.response.ids.filter(
        id => action.response.orders[id].type === TO_PAY_TYPE
      );
      const availableIds = action.response.ids.filter(
        id => action.response.orders[id].type === AVILABLE_TYPE
      );
      const refundIds = action.response.ids.filter(
        id => action.response.orders[id].type === REFUND_TYPE
      );
      return {
        ...state,
        isFetching: false,
        ids: state.ids.concat(action.response.ids),
        toPayIds: state.toPayIds.concat(toPayIds),
        availableIds: state.availableIds.concat(availableIds),
        refundIds: state.refundIds.concat(refundIds)
      };
    default:
      return state;
  }
};

const currentTab = (state = initialState.currentTab, action) => {
  switch (action.type) {
    case types.SET_CURRENT_TAB:
      return action.index;
    default:
      return state;
  }
};

const reducer = combineReducers(orders, currentTab);

export default reducer;
