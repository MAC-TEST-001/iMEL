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


