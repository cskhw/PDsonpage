import { createStore } from 'redux';

export default createStore(function (state, action) {
    if (state === undefined) {
        return {
        userid: 'test1234',
        userpw: '1234',
        auth: 'false',
        size:0
    }
}
    if (action.type === 'Auth') {
        var i = 0;
        while(i<state.key.length){
            if (state.key[i].id === state.userid  && state.key[i].pw === state.userpw)
                return {...state, auth: 'true'}
        }
    }
 
    if (action.type === 'test'){
        return {...state, size:state.size + 1}
    }
    return state;
}, window.__REDUX_DEV_TOOLS_EXTENSION__ && window.__REDUX_DEV_TOOLS_EXTENSION__())