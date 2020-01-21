import Auth from '../components/auth'
import {connect} from 'react-redux'

function mapStateToProps(state) {
 
    return{
        userid:state.data,
        userpw:state.userpw
    }
}
function mapDispatchToProps(dispatch){
    
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Auth);