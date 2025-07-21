'use client'

import { Swiper } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperOptions } from 'swiper/types';

type SliderProps = {
  className?: string;
  children: React.ReactNode;
} & SwiperOptions;

export const Slider = ({className, children, ...settings}: SliderProps) => {
  return (
    <Swiper
      {...settings}
      className={className}
    >
      {children}
    </Swiper>
  );
}