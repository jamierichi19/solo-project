import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* postImageUrl(action) {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
        };
        
        const data = {
            imageUrl: action.payload
        }
        console.log(data)

        yield axios.post('/api/imageurl', data, config);
        yield put({type: 'GET_IMAGE'})
    } catch (error) {
        console.log('Image URL post failed', error);
    }
}

function* imageInfoSaga() {
    yield takeLatest('POST_IMAGE_URL', postImageUrl);
}

export default imageInfoSaga;