import { createSlice } from '@reduxjs/toolkit'

interface InitialType {
  name: string
}

const initialState: InitialType = {
  name: 'User Name',
}

const userProfileSLice = createSlice({
  name: 'user/profile',
  initialState: initialState as InitialType,
  reducers: {
    setName: (state, { payload }) => {
      state.name = payload
    },
  },
})

export const userProfileActions = userProfileSLice.actions
export default userProfileSLice.reducer
