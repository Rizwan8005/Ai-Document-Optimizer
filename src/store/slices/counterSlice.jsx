import { createSlice } from "@reduxjs/toolkit"

const counterUpdateSlice = createSlice({
name: 'updateCounter',
initialState:{
isCounterUpdate: false
},
reducers:{
setCounterUpdate:(state,action) => {
state.isCounterUpdate = action.payload
}
}
})
export const { setCounterUpdate } = counterUpdateSlice.actions
export default counterUpdateSlice.reducer
