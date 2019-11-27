import { combineReducers } from 'redux';
import PhpLoginReducer from './PhpLoginReducer';
import MsgsReducer from './MsgsReducer';
import VeiculosReducer from './VeiculosReducer';

export default combineReducers({
    PhpLoginReducer,
    MsgsReducer,
    VeiculosReducer,
});
