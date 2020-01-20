import Nav from '../components/nav'
import {connect} from 'react-redux'
import axios from "axios"

function mapStateToProps(state){
    return {
        num:state.num,
        size:0
    }
}

function mapDispatchToProps(dispatch){
    return {
        onClick: function(size){
            dispatch({type:'test', size:size});
        }
    }
}


export default connect(mapStateTOProps, mapDispatchToProps)(Nav);