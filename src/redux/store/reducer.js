const initialState ={
    affeliate:null,
    config:null,
    user:null

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
        newState.config = action.value;
        console.log(action.value)
        
    }

    return newState;

}

export default reducer;