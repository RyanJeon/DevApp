import {combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import PostReducer from './PostReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  posts: PostReducer
});

export default rootReducer;
