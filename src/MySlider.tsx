import { FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import p1 from './assets/projects/p1.png';
import p2 from './assets/projects/p2.png';
import p3 from './assets/projects/p3.png';

const ITEMS = [p1, p2, p3];

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
  backgroundSize: 'contain',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  borderRadius: '2%',
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
        {ITEMS.map((item) => (
          <SwiperSlide className="slider-item" key={item}>
            <div className="slider-item-image-wrapper">
              <div className="slider-item-image" style={getStyles(item)}></div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MySlider;
