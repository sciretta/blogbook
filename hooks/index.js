import { useEffect } from 'react'
import { useDispatch } from '../Store'
import { handleCheckLoggedIn } from '../handles/users'

export const useLogIn = () => {
	const dispatch = useDispatch()
	useEffect(() => {
    handleCheckLoggedIn(dispatch)
  }, [])
}