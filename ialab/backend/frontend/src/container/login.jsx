import Login from '../components/login'
import {connect} from 'react-redux'

function mapStateToProps(state) {
    return {
        userid:state.userid,
        userpw:state.userpw,
        auth:state.auth
    }
}
export default connect(mapStateToProps, null)(Login);