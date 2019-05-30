const reducer = (state = 0, action) => {
   switch(action.type){
     case 'INCREMENT':
          return state + 1;
     default: return state;
    }
}

const createStore = (reducer) => {
  
  let state = reducer(undefined, {});
  
  const callbacks = [];
  
  const getState = () => state;
  
  const dispatch = (action) => {
    state = reducer(state, action)
    callbacks.forEach(cb => cb())
  };
  
  const subscribe = (cb) => {
    callbacks.push(cb);
  };
  
  
  return {
    getState: getState,
    dispatch: dispatch,
    subscribe:subscribe
  }
  
};


const store = createStore(reducer);

store.subscribe(() => {
  alert('I was changed')
  alert(store.getState())
})

console.log(store.getState());

store.dispatch({type: 'INCREMENT'});
store.dispatch({type: 'INCREMENT'});

console.log(store.getState());


