import React, { useState } from 'react'
import { useSelector, useDispatch } from "react-redux"
import customer from "../PUBLIC/customer.jpg"
import Product from "./Product"
import "../CSS/products.css"
import Pagination from '@mui/material/Pagination';
import { useEffect } from 'react'
import { getProducts } from '../REDUX/productSlice'
import Skeleton from '@mui/material/Skeleton';

const itemsPerPage = 6

function Products() {
    const productSlice = useSelector((store) => store.productSlice)
    const categorySlice = useSelector( (store) => store.categorySlice)

    let products = productSlice.products
    let selectedProducts = productSlice.selectedProducts
    const loading = productSlice.loading

    const selectedCategory = categorySlice.selectedCategory

    const dispatch = useDispatch()
    useEffect( () => {
        dispatch(getProducts())
    }, [dispatch])

    const [currentPage, setCurrentPage] = useState(1)

    let indexOfLastItem = currentPage * itemsPerPage
    let indexOfFirstItem = indexOfLastItem - itemsPerPage + 1

    const pageCount = Math.ceil(selectedProducts.length / itemsPerPage)

    let productsInPage = selectedProducts.slice(indexOfFirstItem - 1, indexOfLastItem)

  return (
    <div id="productsandpagination" >
        {
            loading ? (<Skeleton sx={{ marginLeft:"250px" }} variant="rectangular" width={900} height={818} />) : (
     
        <><div id="products" >
            {
                productsInPage && productsInPage.map( (product) => (
                    <Product key={product._id} product={product} />
                ))
            }
        </div>
        <Pagination id="pagination" page={currentPage} onChange={ (e) => setCurrentPage(Number(e.target.innerText)) } count={pageCount} hidePrevButton hideNextButton shape='rounded' />
            </>
        )
        }
        

    </div>
  )
}

export default Products