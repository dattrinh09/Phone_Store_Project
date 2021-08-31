import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"

//Get Data From Store
export const getProductData = createAsyncThunk(
    'apps/getData', async () => {
        const res = await axios.get('http://localhost:8000/getAllProducts', {withCredentials: true})

        return res.data.listProducts
})

//Add Product To Store
export const addToStore = createAsyncThunk(
    'apps/addToStore', async product =>{
        await axios.post('http://localhost:8000/admin/add',{withCredentials: true},product )
})

//Delete Data In Store
export const deleteInStore = createAsyncThunk(
    'apps/deleteInStore', async id =>{
        console.log(id)
        await axios.delete('http://localhost:8000/admin/delete', id)
    }
)

//Get Data From Cart
// export const getDataFromCart = createAsyncThunk(
//     'apps/getDataFormCart', async () => {
//         const res = await axios.get('')
//         return res.data
// })

// // Add Product To Cart
// export const addToCart = createAsyncThunk(
//     'apps/addToCart', async id => {     
//         await axios.post('', id)
// })

const appSlice = createSlice({
    name: 'apps',
    initialState: {
        productData: [],
        cartData: [],
        productShow: []
    },

    reducers:{
        //Show Product Data:
        // showProductData(state, action){
        //     state.productShow = state.productData.filter(product => product._id === action.payload)
        // },

        // //Add To Cart
        // addProductToCart: {
		// 	reducer(state, action) {
		// 		state.cartData.push(action.payload)
		// 	},
		// 	prepare(id) {
		// 		return {
		// 			payload: {
		// 				id,
        //                 quantiy: 1
		// 			}
		// 		}
		// 	}
		// }, 

    },

    extraReducers: {
        //Get Product Data
        [getProductData.pending]: (state, action) => {
			console.log('Fetching todos from backend ....')
		},
		[getProductData.fulfilled]: (state, action) => {
			console.log('Done')
			state.productData = action.payload
		},
		[getProductData.rejected]: (state, action) => {
			console.log('Failed to get todos!!!')
		},

        //Get Data From Cart
        // [getDataFromCart.pending]: (state, action) => {
		// 	console.log('Fetching todos from backend ....')
		// },
		// [getDataFromCart.fulfilled]: (state, action) => {
		// 	console.log('Done')
		// 	state.cartData = action.payload
		// },
		// [getDataFromCart.rejected]: (state, action) => {
		// 	console.log('Failed to get todos!!!')
		// },

    }
})

const appReducer = appSlice.reducer

export const datasSelector = state => state.appReducer.productData

export const productShowSelector = state => state.appReducer.productShow

export const cartDataSelector = state => state.appReducer.cartData

export const { showProductData, addProductToCart } = appSlice.actions

export default appReducer