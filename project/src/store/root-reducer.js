import {combineReducers} from 'redux';
import { mainData } from './main-data/main-data';
import { additionalData } from './additional-data/additional-data';
import { user } from './user/user';


export const NameSpace = {
  DATA: 'DATA',
  ADDITIONAL: 'ADDITIONAL',
  USER: 'USER',
};

export default combineReducers({
  [NameSpace.DATA]: mainData,
  [NameSpace.ADDITIONAL]: additionalData,
  [NameSpace.USER]: user,
});
