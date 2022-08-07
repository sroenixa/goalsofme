const ThemeReducer = (state,action) => {
    switch(action.type){
        case "DARK":
            return { darkMode: true };
        case "LIGHT":
            return { darkMode: false };
        default:
            return state;
    }
}
export default ThemeReducer