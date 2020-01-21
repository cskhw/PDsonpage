import Nav from '../components/nav'
import {connect} from 'react-redux'
import axios from "axios"


function mapDispatchToProps(dispatch){
    return {
        onClick: function(){
            dispatch({type:'test'});
        }
    }
}

export default connect(null, mapDispatchToProps)(Nav);