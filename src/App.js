import React, { useReducer, useEffect } from 'react';
import './App.css';

// import ComponentA from './components/ComponentA'
// import ComponentB from './components/ComponentB'
// import ComponentC from './components/ComponentC'
import axios from 'axios';
const initialState = {
  loading: true,
  error: '',
  post: {}
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'FETCH_SUCCESS':
      return {
        loading: false,
        post: action.payload,
        error: ''
      }
    case 'FETCH_ERROR':
      return {
        loading: false,
        post: {},
        error: 'Data failed.'
      }
    default:
      return state
  }
}

// export const CountContext= createContext()
// const initialState = {
//   firstCounter: 0
// }
// const reducer = (state, action) => {
//   switch(action.type){
//       case 'increment1':
//           return { ...state, firstCounter: state.firstCounter + action.value}
//       case 'decrement1':
//           return { ...state, firstCounter: state.firstCounter - action.value}
//       case 'reset':
//           return initialState
//       default:
//           return state
//   }
// }

// export const UserContext = createContext()
// export const LanguageContext = createContext()

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  // const [user, setUser] = useState({name: 'yamada', age: '32'})
  // const [language, setLanguage] = useState('日本語')

  useEffect(() => {
    axios
    .get('https://jsonplaceholder.typicode.com/posts/1')
    .then(res => {
      dispatch({type: 'FETCH_SUCCESS', payload: res.data})
    })
    .catch(err => {
      dispatch({type: 'FETCH_ERROR'})
    })
  })
  return (
    <div className="App">
      {/* <Counter /> */}
      {/* <CounterHook /> */}
      {/* <FormHook /> */}
      {/* <ItemHook /> */}
      {/* <EffectHook /> */}
      {/* <MouseEventEffect /> */}
      {/* <DataFetch /> */}
      {/* <DataFetchById /> */}
      {/* <UserContext.Provider value={user}>
        <LanguageContext.Provider value={language}>
          <ComponentC />
        </LanguageContext.Provider>
      </UserContext.Provider> */}
      {/* <CounterReducer /> */}
      {/* <h1>カウント: {count.firstCounter}</h1>
      <CountContext.Provider value={{ countState: count, countDispatch: dispatch }} >
        <ComponentA />
        <ComponentB />
        <ComponentC />
      </CountContext.Provider> */}

      <h1>{state.loading ? 'Loading...' : state.post.title}</h1>
      <h2>{state.error ? state.error: null}</h2>



    </div>
  );
}

export default App;
