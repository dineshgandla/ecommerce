import { createContext, useContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from '../reducer/Reducer'
const AppContext = createContext();

const API = "https://api.pujakaitem.com/api/products";

const initialState = {
    isLoading : false,
    isError : false,
    products : [],
    featuredProducts : [],
    isSingleLoading : false,
    singleProduct : {},
}
const AppProvider = ({children}) =>{
    const [state, dispatch] = useReducer(reducer, initialState)

    const getProducts =async (url) =>{
        dispatch({type:"SET_LOADING"});
        try{
            const response =await axios.get(url);
            const products = await response.data;
            dispatch({type : "SET_API_DATA" , payload: products })
        }
        catch(error){
            dispatch({type:"API_ERROR"})
        }
    }

    // api call for single product

    const getSingleProduct = async (url) =>{
        dispatch({type : 'SET_SINGLE_LOADING'});
        try{
            const response =await axios.get(url);
            const singleProductItem = await response.data;
            // console.log(singleProduct);
            dispatch({type : 'SET_SINGLE_PRODUCT' , payload : singleProductItem})
        }catch(e){
            dispatch({type : 'SET_SINGLE_PRODUCT_ERROR'})
        }
    }

    useEffect(()=>{
        getProducts(API)
    },[])

    return(
        <AppContext.Provider value={{...state , getSingleProduct}}>
            {children}
        </AppContext.Provider>
    )
}

// creating custom hook

const useProductContext = () =>{
    return useContext(AppContext);
}

export {AppProvider , AppContext , useProductContext };