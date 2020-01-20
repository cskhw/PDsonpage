import Auth from '../components/auth'
import {connect} from 'react-redux'
import axios from "axios"

function mapStateToProps(state) {
    return{
        userid:state.userid,
        userpw:state.userpw
    }
}
function mapDispatchToProps(dispatch){
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);