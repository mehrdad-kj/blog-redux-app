import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    {id: "1", name: "mehrdad karami"},
    {id: "2", name: "Ali Mortazavi"}
]


const usersSlice = createSlice({
    name: "users",
    initialState,
    reducers:{}
})

export const selectAllUsers = (state) => state.users;

export default usersSlice.reducer