import { placeConstants } from '../_constants';

export function places(state = {}, action) {
  switch (action.type) {
    case placeConstants.GETALL_REQUEST:
      return {
        loading: true
      };
    case placeConstants.GETALL_SUCCESS:
      return {
        items: action.places
      };
    case placeConstants.GETALL_FAILURE:
      return { 
        error: action.error
      };
    case placeConstants.DELETE_REQUEST:
      // add 'deleting:true' property to place being deleted
      return {
        ...state,
        items: state.items.map(place =>
          place.id === action.id
            ? { ...place, deleting: true }
            : place
        )
      };
    case placeConstants.DELETE_SUCCESS:
      // remove deleted place from state
      return {
        items: state.items.filter(place => place.id !== action.id)
      };
    case placeConstants.DELETE_FAILURE:
      // remove 'deleting:true' property and add 'deleteError:[error]' property to place 
      return {
        ...state,
        items: state.items.map(place => {
          if (place.id === action.id) {
            // make copy of place without 'deleting:true' property
            const { deleting, ...placeCopy } = place;
            // return copy of place with 'deleteError:[error]' property
            return { ...placeCopy, deleteError: action.error };
          }

          return place;
        })
      };
    default:
      return state
  }
}