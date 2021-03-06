import {
  FETCHING_SEARCH_DATA,
  FETCHING_SEARCH_DATA_SUCCESS,
  FETCHING_SEARCH_DATA_FAIL,
} from './../actions/ActionTypes';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null,
};

export default function(state = initialState, action) {

  switch (action.type) {

    // We don't null out data here for smooth pull-to-refresh interaction
    case FETCHING_SEARCH_DATA:
      return Object.assign({}, state, {
        isFetching: true,
        hasError: false,
        errorMessage: null
      });

    case FETCHING_SEARCH_DATA_SUCCESS:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: false,
        errorMessage: null
      });

    case FETCHING_SEARCH_DATA_FAIL:
      return Object.assign({}, state, {
        isFetching: false,
        data: action.payload,
        hasError: true,
        errorMessage: action.error
      });

    default:
      return state;
  }

}
