import  { call, put, take, fork } from 'redux-saga/effects'
import { successSuggest } from './actions'
import { REQUEST_SUGGEST } from './constants'
import API from './api'

export function* fetchSuggestions(payload) {
    const suggestions = yield call(API.suggest, payload.query)
    yield put(successSuggest(suggestions));
}

export function* requestSuggestion() {
    while (true) {
        const payload = yield take(REQUEST_SUGGEST);
        yield fork(fetchSuggestions, payload);
    }
}

export default function* rootSaga() {
    yield fork(requestSuggestion)
}