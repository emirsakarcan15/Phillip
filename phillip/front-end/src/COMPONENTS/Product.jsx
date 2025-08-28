import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "../CSS/products.css"


function Product({ product }) {
  return (
    <div>
        <Card sx={{ width: 300, margin:"20px", borderRadius:"30px" }}>
            <CardMedia
                sx={{ height: 190 }}
                image={product.fotoğraf_url}
            />
            <CardContent>
                <Typography gutterBottom variant="h4" component="div" sx={{ fontWeight: 800 }} >
                {product.isim}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {product.aciklama}
                </Typography>
                <Typography variant="body2" sx={{ color: 'black', fontSize: "25px" }}>
                ${product.fiyat}
                </Typography>
            </CardContent>
            <CardActions>
                <button id='product-button'>See The Product</button>
            </CardActions>
        </Card>

    </div>
  )
}

export default Product