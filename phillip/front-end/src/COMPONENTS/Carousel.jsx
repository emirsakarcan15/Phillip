import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import '../CSS/swiper.css';
import shipping from "../PUBLIC/shipping.jpg"
import ai from "../PUBLIC/ai.jpg"
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { useSelector, useDispatch } from "react-redux"
import { getBanners } from '../REDUX/bannerSlice';

import Skeleton from '@mui/material/Skeleton';



function Carousel() {

    const dispatch = useDispatch()
    const bannerSlice = useSelector( (store) => store.bannerSlice)
    const banners = bannerSlice.banners
    let loading = bannerSlice.loading

    useEffect( () => {
      dispatch(getBanners())
    }, [dispatch])


    

  return (
    <div>
      {
      loading ? ( <Skeleton sx={{ bgcolor:"grey.900", marginLeft:"350px" }} variant="rectangular" width={900} height={418} /> ) : (
        
   
        <Swiper
        spaceBetween={30}
        effect={'fade'}
        
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        className="mySwiper"
      >
      
          
        
        {banners.map((banner, index) => (
      <SwiperSlide key={index}>
        <img src={banner.fotoğraf_url} alt={`Banner ${index}`} />
      </SwiperSlide>
    ))}
      </Swiper> 
      )
} 
    </div>
  )
}

export default Carousel