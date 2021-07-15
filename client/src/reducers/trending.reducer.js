const { GET_TRENDS } = require("../actions/post.actions");

const initialState = {};

export default function trendingReducer(state = initialState, action) {

    switch (action.type) {
        case GET_TRENDS:
            return action.payload;


        default:
            return state;
    }
}