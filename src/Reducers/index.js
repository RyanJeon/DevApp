import {combineReducers} from 'redux';
import {reducer as FormReducer} from 'redux-form';
import PostReducer from './PostReducer';
import UserReducer from './UserReducer';

const rootReducer = combineReducers({
  form: FormReducer,
  posts: PostReducer,
  user: UserReducer
});

export default rootReducer;
