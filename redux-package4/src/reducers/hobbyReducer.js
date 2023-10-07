const initState = {
    list: [],
    activeId: null
}

const hobbyReducer = (state = initState, action) => {
    console.log(state, action);
    switch (action.type) {
        case "ADD_HOBBY": {
            const newList = [...state.list];
            newList.push(action.payload);
            return {
                ...state,
                list: newList
            }
        }
        case "ACTIVE_HOBBY_ID": {
            const newHobbyId = action.payload;
            return {
                ...state,
                activeId: newHobbyId
            }
        }
        default:
            return state;
    }
}

export default hobbyReducer;