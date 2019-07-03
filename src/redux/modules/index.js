import { combineReducers } from "redux";
import entities from "./entities";
import home from "./home";
import detail from "./detail";
import app from "./app";
import search from "./search";
//合并成根reducer

const rootReducer = combineReducers({ entities, home, detail, app, search }); //mmp 不加花括号会报Cannot read property 'error' of undefined
export default rootReducer;
