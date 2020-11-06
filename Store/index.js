import { useReducer,useContext,createContext } from 'react'
const storeContext = createContext()
const dispatchContext = createContext()

const initialState = {
  user: {},
  connected:false
}

const reducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return {
        ...state,
        user:{
          ...action.user
        },
        connected:true
      }
      break
    default:
      return state
  }
} 

const StoreProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <dispatchContext.Provider value={dispatch}>
      <storeContext.Provider value={state}>
        {children}
      </storeContext.Provider>
    </dispatchContext.Provider>
  )
}

export const useStore = () => useContext(storeContext)

export const useDispatch = () => useContext(dispatchContext)

export default StoreProvider