import url from "../../utils/url";
import { FETCH_DATA } from "../middleware/api";
import { schema as keywordSchema } from "./entities/keywords";

//第一步定义actionTypes
export const types = {
  //获取热门关键词
  FETCH_POPULAR_KEYWORDS_REQUEST: "SEARCH/FETCH_POPULAR_KEYWORDS_REQUEST",
  FETCH_POPULAR_KEYWORDS_SUCCESS: "SEARCH/FETCH_POPULAR_KEYWORDS_SUCCESS",
  FETCH_POPULAR_KEYWORDS_FAILURE: "SEARCH/FETCH_POPULAR_KEYWORDS_FAILURE",
  //根据输入的文本获取相关关键词
  FETCH_RELATED_KEYWORDS_REQUEST: "SEARCH/FETCH_RELATED_KEYWORDS_REQUEST",
  FETCH_RELATED_KEYWORDS_SUCCESS: "SEARCH/FETCH_RELATED_KEYWORDS_SUCCESS",
  FETCH_RELATED_KEYWORDS_FAILURE: "SEARCH/FETCH_RELATED_KEYWORDS_FAILURE",
  //设置当前输入
  SET_INPUT_TEXT: "SEARCH/SET_INPUT_TEXT",
  CLEAR_INPUT_TEXT: "SEARCH/CLEAR_INPUT_TEXT",
  //历史查询记录
  ADD_HISTORY_KEYWORD: "SEARCH/ADD_HISTORY_KEYWORD",
  CLEAR_HISTORY_KEYWORDS: "SEARCH/CLEAR_HISTORY_KEYWORD"
};

const initialState = {
  inputText: "",
  popularKeywords: {
    isFetching: false,
    ids: []
  },
  /**
   * relatedKeywords对象结构:
   * {
   *    '火锅':{
   *        isFetching:false,
   *        ids:[]
   *    }
   * }
   */
  relatedKeywords: {},
  historyKeywords: [] //保存关键词Id
};
//第二步，编写actionCreators
export const actions = {
  //获取热门关键词
  loadPopularKeywords: () => {
    return (dispatch, getState) => {
      const { ids } = getState().search.popularKeywords;
      if (ids.length > 0) {
        return null;
      }
      const endpoint = url.getPopularKeywords();
      return dispatch(fetchPopularKeywords(endpoint));
    };
  },
  //根据输入获取相关关键词
  loadRelatedKeywords: text => {
    return (dispatch, getState) => {
      const { relatedKeywords } = getState.search;
      if (relatedKeywords[text]) {
        return null;
      }
      const endpoint = url.getRelatedKeywords(text);
      return dispatch(fetchRelatedKeywords(text, endpoint));
    };
  },
  setInputText: text => ({
    types: types.SET_INPUT_TEXT,
    text
  }),
  clearInputText: () => ({
    types: types.CLEAR_INPUT_TEXT
  }),
  addHistoryKeyword: keywordId => ({
    types: types.ADD_HISTORY_KEYWORD,
    text: keywordId
  }),
  clearHistoryKeywords: () => ({
    types: types.CLEAR_HISTORY_KEYWORDS
  })
};

const fetchPopularKeywords = endpoint => ({
  [FETCH_DATA]: {
    types: [
      FETCH_POPULAR_KEYWORDS_REQUEST,
      FETCH_POPULAR_KEYWORDS_SUCCESS,
      FETCH_POPULAR_KEYWORDS_FAILURE
    ],
    endpoint,
    schema: keywordSchema
  }
});

const fetchRelatedKeywords = (text, endpoint) => ({
  [FETCH_DATA]: {
    types: [
      FETCH_RELATED_KEYWORDS_REQUEST,
      FETCH_RELATED_KEYWORDS_SUCCESS,
      FETCH_RELATED_KEYWORDS_FAILURE
    ],
    endpoint,
    schema: keywordSchema
  },
  text
});
