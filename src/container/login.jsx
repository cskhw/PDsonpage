import Load from '../components/load'
import {connect} from 'react-redux'
import axios from "axios"


function mapDispatchToProps(dispatch){
    return {
        Auth: function(){
            dispatch({type:'Auth'});
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Load);