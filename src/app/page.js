'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Product from '@/components/product';

function Page() {
  return (
    <Swiper
      spaceBetween={5}
      slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      
        <SwiperSlide>
          <Product url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU' title='book1' />
        </SwiperSlide>
        <SwiperSlide>
          <Product url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU' title='book2'/>
        </SwiperSlide>
        <SwiperSlide>
          <Product url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU' title='book3'/>
        </SwiperSlide>
        <SwiperSlide> 
          <Product url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU' title='book4'/>
        </SwiperSlide>
        <SwiperSlide>
          <Product url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8rI_tn3BpM-qwJC7iEu1ntsQtAN4ZDteE4g&usqp=CAU' title='book5'/>
        </SwiperSlide>
      
    
    </Swiper>
  
  );
};

export default Page