import Load from '../components/load'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return {
        size:state.size,
        auth:state.auth
    }
}

function mapDispatchToProps(dispatch){
    return {
        increment: function(){
            dispatch({type:'test'});
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Load);