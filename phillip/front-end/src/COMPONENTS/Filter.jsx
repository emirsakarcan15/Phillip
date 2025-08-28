import * as React from 'react';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import "../CSS/products.css"
import Divider from '@mui/material/Divider';
import { MdOutlineFilterAlt } from "react-icons/md";
import { BiCategory } from "react-icons/bi";
import { IoPricetagOutline } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector, useDispatch } from "react-redux"
import { getCategories, selectedCategoryHandler } from '../REDUX/categorySlice';
import { filteredProductHandler } from '../REDUX/productSlice';



function Filter() {

    const dispatch = useDispatch()

    const categorySlice = useSelector( (store) => store.categorySlice)
    const productSlice = useSelector( (store) => store.productSlice)

    const categories = categorySlice.categories
    let selectedCategory = categorySlice.selectedCategory

    let products = productSlice.products
    let selectedProducts = productSlice.selectedProducts

    React.useEffect( () => {
      dispatch(getCategories())
    }, [dispatch])

    const [open1, setOpen1] = React.useState(false);

    const handleClick1 = () => {
        setOpen1(!open1);
    };

    const [open2, setOpen2] = React.useState(false);

    const handleClick2 = () => {
        setOpen2(!open2);
    };

    const [open3, setOpen3] = React.useState(false);

    const handleClick3 = () => {
        setOpen3(!open3);
    };

    const [min, setMin] = React.useState()

    const handleMin = (e) => {
      setMin(e.target.value)
    }

    const [max, setMax] = React.useState() 

    const handleMax = (e) => {
      setMax(e.target.value)
    }

    const [kategori, setKategori] = React.useState('0');

    const handleKategoriChange = (event) => {
        setKategori(event.target.value)
        dispatch(selectedCategoryHandler(event.target.value))
    };

    const [searchText, setSearchText] = React.useState("")

    const searchFilter = (someProducts) => {
      return someProducts = someProducts.filter( (someProduct) => someProduct.isim.toLowerCase().includes(searchText.toLowerCase()))
    }

    const searchButton = () => {
        let filteredProducts = products.filter( (product) => product.kategori._id === selectedCategory)
        if (filteredProducts[0]) {

          if (!min && !max) {
            filteredProducts = searchFilter(filteredProducts)
            return dispatch(filteredProductHandler(filteredProducts))
          }

          if (!min && max) {
            filteredProducts = filteredProducts.filter( (product) => product.fiyat <= max)
            filteredProducts = searchFilter(filteredProducts)
            return dispatch(filteredProductHandler(filteredProducts))
          }

          if (min && !max) {
            filteredProducts = filteredProducts.filter( (product) => product.fiyat >= min)
            filteredProducts = searchFilter(filteredProducts)
            return dispatch(filteredProductHandler(filteredProducts))
          }

          if (min>max) {
            throw new Error("Min can't be higher than max.");
          }

          filteredProducts = filteredProducts.filter( (product) => product.fiyat >= min)
          filteredProducts = filteredProducts.filter( (product) => product.fiyat <= max)
          filteredProducts = searchFilter(filteredProducts)

          dispatch(filteredProductHandler(filteredProducts))

        }
        else {
          filteredProducts = products

          if (!min && !max) {
            filteredProducts = searchFilter(filteredProducts)
            return dispatch(filteredProductHandler(filteredProducts))
          }

          if (!min && max) {
            filteredProducts = filteredProducts.filter( (product) => product.fiyat <= max)
            filteredProducts = searchFilter(filteredProducts)
            return dispatch(filteredProductHandler(filteredProducts))
          }

          if (min && !max) {
            filteredProducts = filteredProducts.filter( (product) => product.fiyat >= min)
            filteredProducts = searchFilter(filteredProducts)
            return dispatch(filteredProductHandler(filteredProducts))
          }

          if (min>max) {
            throw new Error("Min can't be higher than max.");
          }

          filteredProducts = filteredProducts.filter( (product) => product.fiyat >= min)
          filteredProducts = filteredProducts.filter( (product) => product.fiyat <= max)
          filteredProducts = searchFilter(filteredProducts)

          dispatch(filteredProductHandler(filteredProducts))
        }
    }

  return (
    <div>
        <List
      sx={{width: 200, maxHeight: 600 , bgcolor: '#988686', border:"2px solid #988686", borderRadius:"25px", marginTop: 10 }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <div style={{ display:"flex", flexDirection:"row", alignItems:"center"}} >
            <MdOutlineFilterAlt style={{ marginLeft:"14px", fontWeight:"900" }} />
            <ListSubheader component="div" style={{ fontSize:"26px", letterSpacing:"0", color:"black", fontWeight:"900", border:"2px solid #988686", borderRadius:"25px", background:"#988686"}} id="nested-list-subheader">
          Filter
        </ListSubheader>
        </div>

      }
    >
    <Divider style={{ background:"black"}} ></Divider>

    <ListItemButton onClick={handleClick1}>
        <ListItemIcon>
          <IoMdSearch style={{ width:"35px", color:"black" }} />
        </ListItemIcon>
        <p style={{ fontSize:"24px", fontWeight:"500", letterSpacing:0 }} >Search</p>
        {open1 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open1} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton >
            <ListItemIcon>
                <TextField id="standard-basic" color='text' value={searchText} onChange={(e) => setSearchText(e.target.value)} variant="standard"  />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>


      <ListItemButton onClick={handleClick2}>
        <ListItemIcon>
          <BiCategory style={{ width:"35px", color:"black" }} />
        </ListItemIcon>
        <p style={{ fontSize:"24px", fontWeight:"500", letterSpacing:0 }} >Category</p>
        {open2 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open2} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton >
            <ListItemIcon>

            <Box sx={{ width: 165, borderRadius:"30px" }}>
                <FormControl stye fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                        <Select style={{  borderRadius:"30px" }} color="text" labelId="demo-simple-select-label" id="demo-simple-select" value={kategori} onChange={handleKategoriChange} >
                            <MenuItem value="0">All</MenuItem>
                            {
                              categories && categories.map( (category) => (
                                <MenuItem value={category._id}>{category.isim}</MenuItem>
                              ))
                            }
                    </Select>
                </FormControl>
            </Box>
              
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>

      <ListItemButton onClick={handleClick3}>
        <ListItemIcon>
          <IoPricetagOutline style={{ width:"35px", color:"black" }} />
        </ListItemIcon>
        <p style={{ fontSize:"24px", fontWeight:"500", letterSpacing:0 }} >Price</p>
        {open3 ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open3} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton >
            <ListItemIcon>
                <TextField style={{ width:"80px" }} id="standard-basic" label="Min" color='text' variant="standard" value={min} onChange={handleMin} />
                <TextField style={{ width:"80px", marginLeft:"10px" }} id="standard-basic" label="Max" color='text' variant="standard" value={max} onChange={handleMax} />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
      <button onClick={searchButton} id="filter-button" >Search</button>
    </List>
    </div>
  )
}

export default Filter