import {UPLOAD_IMAGE} from "../_services/item.service";

const initialState = {
    image: null
};

export default function (state = initialState,action) {
    switch(action.type) {
        case UPLOAD_IMAGE:
            return {
                ...state,
                image: action.payload
            };
        default:
            return state;
    }
}