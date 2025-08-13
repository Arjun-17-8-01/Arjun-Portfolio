import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination, Navigation } from 'swiper'
export default function Carousel({items=[]}){
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640:{slidesPerView:1},
        768:{slidesPerView:2},
        1024:{slidesPerView:3}
      }}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 3500 }}
    >
      {items.map((it, idx)=>(
        <SwiperSlide key={idx}>
          <div className='bg-white dark:bg-slate-800 p-4 rounded shadow'>
            <img src={it.image} alt={it.title} className='w-full h-40 object-cover rounded mb-3'/>
            <h4 className='font-bold'>{it.title}</h4>
            <p className='text-sm'>{it.description}</p>
            <div className='mt-2'>
              <a href={it.link} className='text-blue-500'>View</a>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  )
}
