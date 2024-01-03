
import './App.css'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

import { EffectCoverflow, Pagination } from 'swiper/modules';

import bg1 from './images/bg1.jpg';
import bg2 from './images/bg2.jpg';
import bg3 from './images/bg3.jpg';
import bg4 from './images/bg4.jpg';
import bg5 from './images/bg5.jpg';

function App() {


  return (
    <>
    <h1>Photo Gallery</h1>
    <Swiper
    effect={'coverflow'}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={'auto'}
    coverflowEffect={{
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    }}
    pagination={true}
    modules={[EffectCoverflow, Pagination]}
    className="mySwiper"
  >
    <SwiperSlide>
      <img src={bg1} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={bg2} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={bg3} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={bg4} />
    </SwiperSlide>
    <SwiperSlide>
      <img src={bg5} />
    </SwiperSlide>
    
  </Swiper>
    </>
  )
}

export default App
