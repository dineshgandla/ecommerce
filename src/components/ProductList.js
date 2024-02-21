import React from 'react'
import { useFilterContext } from '../context/FilterContext'
import GridView from './GridView';
import ListView from './ListView';


const ProductList = () => {
  const {grid_view , filter_products} = useFilterContext();
// console.log(filter_products);
  if(grid_view === true){
    return <GridView products ={filter_products}/>
  }
  if(grid_view === false){
    return <ListView products ={filter_products}/>
  }

  // return (
  //   <div>
  //     productList
  //   </div>
  // )
}

export default ProductList
