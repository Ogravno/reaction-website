import { useSelector, useDispatch } from 'react-redux'
import { setUser } from "./userSlice"

const User = () => {
    const username = useSelector((state) => state.user.username)
    const dispatch = useDispatch()
    return (
        <section>
            <h1>Your username is: {username}</h1>
        </section>
    )
}

export default User