import Login from '../components/login'
import {connect} from 'react-redux'

function mapStateToProps() {
    return{
        userid = state.id;
        userpw = state.pw;
    }
}
function mapDispatchToProps() {
    return function auth(){

        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);