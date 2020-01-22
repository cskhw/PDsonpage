import {connect} from 'react-redux'

function mapStateToProps(state) {
 
    return{
        userid:state.userid,
        userpw:state.userpw,
        auth:state.auth
    }
}
function mapDispatchToProps(dispatch){
    
    return {
        
    }
}


export default connect(mapStateToProps, mapDispatchToProps)();