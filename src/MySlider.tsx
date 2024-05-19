import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { FaCode, FaEye } from 'react-icons/fa6';

import { PROJECTS } from './Utils';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

const getStyles = (src: string) => ({
  width: '100%',
  height: 'auto',
  aspectRatio: '1 / 1',
  // background: 'red',
  backgroundImage: `url(${src})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '10px',
});

function MySlider() {
  return (
    <div className="wrapper">
      <Swiper
        freeMode={true}
        modules={[FreeMode, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        onSlideChange={() => console.log('slide change')}
      >
        {PROJECTS.map((item) => (
          <SwiperSlide className="slider-item" key={item.img}>
            <div className="slider-item-image-wrapper">
              <div className="slider-item-image" style={getStyles(item.img)}></div>
              <div className="slider-item-image-overlay">
                <a href={`${item.code}`} target="_blank">
                  <FaCode size={25} />
                </a>
                <a href={`${item.deploy}`} target="_blank">
                  <FaEye size={25} />
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MySlider;
