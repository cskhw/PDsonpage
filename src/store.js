import { createStore } from 'redux';

export default createStore(function (state, action) {
    if (state === undefined) {
        return ({
            key: [
                {
                    id: 'hello1',
                    pw: 1234
                },
                {
                    id: 'hello2',
                    pw: 1234
                }
            ]
        },
        {
            userid: '',
            userpw: '',
            auth: 'false'
        })
    }
    if (action.type === 'Auth') {
        var i = 0;
        while(i<state.key.length){
            if (state.key[i].id === state.userid  && state.key[i].pw === state.userpw)
                return {...state, auth: 'true'}
        }
    }
    return state;
}, window.__REDUX_DEV_TOOLS_EXTENSION__ && window.__REDUX_DEV_TOOLS_EXTENSION__())