import {configureStore} from "@reduxjs/toolkit" 
import whaterSlice from "./Whater/whaterSlice"

export const store =configureStore({
    reducer:{
        whater:whaterSlice
    }
})