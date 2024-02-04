import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
    reducers: {
        users: usersReducer,
    }
})

export default store;