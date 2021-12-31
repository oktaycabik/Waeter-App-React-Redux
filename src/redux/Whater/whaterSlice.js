import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
export const getWhater =createAsyncThunk("whater/getWhater",async(data)=>{
    const res =await axios(`https://api.collectapi.com/weather/getWeather?data.lang=tr&data.city=${data}`,{
        headers:{
            Authorization:"apikey 2aLyOPYgTu5LdGWj3u3J6o:5W9rGwlD2rRVQHiSKP2HYy"
        }
    })
  
    return res.data.result
    
})
export const whaterSlice =createSlice({
    name:"whater",
    initialState:{
        item:[]
    },
    extraReducers:{
        [getWhater.pending]:(state,action)=>{
            console.log("Loading..")
           
        
           },
        [getWhater.fulfilled]:(state,action)=>{
         state.item=action.payload
        
     
        }
    }
    
})
export default whaterSlice.reducer