const mealReducer = (state = [], action) => 
{
    switch(action.type)
    {
        case 'FETCH_ALL_MEALS' :
            return state.concat(action.data);
        default:
            return state;
    }   
}

export default mealReducer;