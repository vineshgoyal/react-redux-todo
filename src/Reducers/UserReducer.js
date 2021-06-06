function UserReducer(state = [{username: "Default User"}], action) {
    switch (action.type) {
        case "ADD":
        let newState = [...state];
        newState.push(action.payload);
        return newState;
    }
    return state;
}

export default UserReducer;