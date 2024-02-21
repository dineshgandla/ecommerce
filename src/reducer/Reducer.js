

const Reducer = (state , action) => {
    switch(action.type){
        case "SET_LOADING" :
            return {
                ...state,
                isLoading:true
            };
        
        case "SET_API_DATA" :
            const featuredData = action.payload.filter((currEle)=>{
                return currEle.featured === true;
                // return console.log(currEle.featured);

            });

            return{
                ...state,
                isLoading:false,
                isError:false,
                products:action.payload,
                featuredProducts:featuredData
            }
        
        case "API_ERROR" :
            return{
                ...state,
                isLoading:false,
                isError : true,
            }
        case "SET_SINGLE_LOADING" : 
            return{
                ...state, 
                isSingleLoading:true,
            }
        case "SET_SINGLE_PRODUCT" : 
            return{
                ...state,
                isSingleLoading:false,
                singleProduct : action.payload,  
            }
        
        case "SET_SINGLE_ERROR":
            return {
                ...state,
                isSingleLoading: false,
                isError: true,
            };
            
        default :
            return state;
    }
}

export default Reducer
