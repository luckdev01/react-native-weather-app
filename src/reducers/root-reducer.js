import { combineReducers } from 'redux';
import { createReducer } from 'redux-orm';
import orm from '../models';

import navReducer from './navReducer';
import { FILL_CITY_AUTOCOMPLETE, OPEN_CITY_LIST,
    CLOSE_CITY_LIST, CHECK_CITY_WEATHER } from '../constants/ActionTypes';

export const root = (state = { cityList: [], selectCityInputOpened: false, selectedCity: '', weatherInfo: null }, action) => {
        switch (action.type) {
            case OPEN_CITY_LIST:
            return {cityList: [], selectCityInputOpened: true, weatherInfo: null };
            case CLOSE_CITY_LIST:
            return { cityList: [], selectCityInputOpened: false, selectedCity: '', weatherInfo: null };
            default:
            return state;
        }
    };

    const rootReducerCombined = combineReducers({ root, navReducer, orm: createReducer(orm) });

    export default rootReducerCombined;
