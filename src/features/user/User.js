import { renderIntoDocument } from 'react-dom/test-utils';
import { useSelector, useDispatch } from 'react-redux'
import { setUsername } from "./userSlice";

const User = () => {
    const username = useSelector((state) => state.user.username)
    return username
}

const SetUser = (username) => {
    const dispatch = useDispatch()
    dispatch(setUsername(username))
}

export {SetUser}

export default User
