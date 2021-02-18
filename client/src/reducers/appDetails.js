const APP_DETAILS = (state={logged:false},actions)=>{
    switch(actions.type)
    {
        
        case 'LOG_IN':
            return {
                ...state,
                logged: true
            };
            break;
        case 'LOG_OUT':
            return {
                ...state,
                logged: false
            };
            break;
        default:
            return {...state};
            break;
    }
}

export default APP_DETAILS;