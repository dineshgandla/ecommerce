const filterReducer = (state, action) => {
    
    switch (action.type) {
      case "LOAD_FILTER_PRODUCTS":
        let priceArr = action.payload.map((currEle)=>currEle.price)
        let maxPrice = Math.max(...priceArr)
        
        return {
          ...state,
          filter_products: [...action.payload],
          all_products: [...action.payload],
          filters:{...state.filters, price:maxPrice, maxPrice}
          
        };
  
      case "SET_GRID_VIEW":
        return {
          ...state,
          grid_view: true,
        };
      case "SET_LIST_VIEW":
        return {
          ...state,
          grid_view: false,
        };

      case "GET_SORT_VALUE":
        let userSortValue = document.getElementById("sort");
        let sort_value = userSortValue.options[userSortValue.selectedIndex].value;
        
        // console.log(sort_value);
        return {
          ...state,
          sorting_value:sort_value,
        }
        
      case "UPDATE_FILTER_VALUE":
        const {name , value} = action.payload;
        return {
          ...state,
          filters:{
            ...state.filters,
            [name]:value
          }
        }

      case "SORTING_PRODUCTS" :
        let newSortData;

        const {filter_products , sorting_value} = state;
        let tempSortProduct = [...filter_products];
        // let tempSortProduct = [...action.payload]

        const sortingProducts = (a,b)=>{
          if(sorting_value === "lowest"){
            return a.price - b.price
          }
          if(sorting_value === "highest"){
            return b.price - a.price
          }
          if(sorting_value === "a-z"){
            return a.name.localeCompare(b.name)
          }
          if(sorting_value === "z-a"){
            return b.name.localeCompare(a.name)
          }
        };

        newSortData = tempSortProduct.sort(sortingProducts);
        return {
          ...state,
          filter_products:newSortData,
        }

      case "FILTER_PRODUCTS":
        let {all_products} = state;

        let tempFilterProducts = all_products
        const {text , category , company , color , price} = state.filters;
        
        if(text){
          tempFilterProducts = tempFilterProducts.filter((currEle)=>{
            return currEle.name.toLowerCase().includes(text);
          })
        }
        if(category !== "all"){
          tempFilterProducts = tempFilterProducts.filter((currEle)=>{
            return currEle.category === category
          }) 
        }
        if(company !== "all" ){
          tempFilterProducts = tempFilterProducts.filter((currEle)=>{
            return currEle.company.toLowerCase() === company.toLowerCase()
            
          }) 
        }
        
        if(color !== "all"){
          tempFilterProducts = tempFilterProducts.filter((currEle)=>{
            return currEle.colors.includes(color);
          })
        }
        if(price === 0){
          tempFilterProducts = tempFilterProducts.filter((currEle)=> currEle.price === price)
        } else {
          tempFilterProducts = tempFilterProducts.filter(
            (currEle)=>currEle.price < price
          );
        }
        
        
        return {
          ...state,
          filter_products:tempFilterProducts
        }
      case  "CLEAR_FILTERS" :
        return{
          ...state,
          filters:{
            ...state.filters,
            text:"",
            category:"all",
            company:"all",
            color:"all",
            // maxPrice:0,
            price : state.filters.maxPrice,
            // minPrice: state.filters.maxPrice,
          }
        }
      default:
        return state;
    }
  };
  
  export default filterReducer;