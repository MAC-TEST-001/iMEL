const initialState ={
    affeliate:null,
    config:null,
    user:null,
    render:false,
    loaddata:false

}

const reducer =(state =initialState,action) =>{

    const newState = {...state};
    if(action.type==='Affeliate_async'){
        newState.affeliate = action.value;
        console.log(action.value)
       
    }
    if(action.type==='Config_async'){
        newState.config = action.value;
        console.log(action.value)
        
    }
    if(action.type==='User_async'){
        newState.user = action.value;
        console.log(action.value)
        
    }
    if(action.type==='Loaddata_async'){
        newState.loaddata = true;
        console.log(action.value)
        
    }

    return newState;

}

export default reducer;