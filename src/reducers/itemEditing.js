import * as Types from './../constants/ActionTypes';

var initialState = {};


const itemEditing = (state = initialState, action) => {
	switch (action.type) {
		case Types.EDITING_PRODUCT:
			state = action.product;
			return state;

		default: return state;
	}
};

export default itemEditing;