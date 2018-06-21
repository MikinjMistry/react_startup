const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case 'DELETE_TODO':
      let tempState = [...state];
      tempState.splice(action.key,1 );
      return tempState;
    default:
      return state
  }
}
export default todoReducer