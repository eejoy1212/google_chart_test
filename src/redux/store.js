import {combineReducers, createStore} from "redux";
const initialData=[];
const dataReducer=(state=initialData,action)=>{
    const {type,payload}=action;
    if(type==="ADD_DATA"){
        console.log("payload",payload);
        // state=payload
        // console.log("payload2",state);
        // const list=[];
        // list.push(payload);
        // console.log("list",payload);
        return payload;
    }
    else{
        // console.log('payload3',state);
        return state;

    }
}
const rootReducer = combineReducers({
dataReducer
    });
    /*state export */
    let store=createStore(rootReducer);
    
    export default store;