import { createStore } from 'redux';

export default createStore(function (state, action) {
    if (state === undefined) { 
    return {
        key: [
            {
            id: 'hello1',
            pw:1234
            },
            {
            id: 'hello2',
            pw:1234 }
            ]
        }
        }
    if(action.type === 'Auth'){
        // if (state.key[i].id === post && state.key[i].pw === post){ 
        // return{...state, }
    }
    
    return state;
}, window.__REDUX_DEV_TOOLS_EXTENSION__ && window.__REDUX_DEV_TOOLS_EXTENSION__())