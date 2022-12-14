import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    username: "null"
}

export const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.username = action.payload
        }
    }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer