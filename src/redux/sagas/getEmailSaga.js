import axios from 'axios';
import { takeLatest } from 'redux-saga/effects';

function* getEmail(action) {
    try{
        
        const getResponse = yield axios.get(`/api/email?id=${action.payload.id}`);

        const data = { 
            emailList: getResponse.data,
            subject: action.payload.subject,
            body: action.payload.body
        }

        yield axios.post(`api/email`, data);
    }
    catch (error){
        console.log(error); 
    }
}

function* getEmailSaga() {
    yield takeLatest('GET_EMAIL_LIST', getEmail)
}

export default getEmailSaga;