import {takeLatest ,put} from 'redux-saga/effects';

function* affeliateAsync(action){
    yield put({type:'Affeliate_async',value:action.value})
    console.log(action.value)
}

export  function* watchAffeliateAsync(){
    yield takeLatest('Affeliate',affeliateAsync)
}

function* configAsync(action){
    yield put({type:'Config_async',value:action.value})
    console.log(action.value)
}

export  function* watchConfigAsync(){
    yield takeLatest('Config',configAsync)
}


function* userAsync(action){
    yield put({type:'User_async',value:action.value})
    console.log(action.value)
}

export  function* watchUserAsync(){
    yield takeLatest('User',userAsync)
}

function* loaddataAsync(action){
    yield put({type:'Loaddata_async',value:action.value})
    console.log(action.value)
}

export  function* watchLoaddataAsync(){
    yield takeLatest('Loaddata',loaddataAsync)
}