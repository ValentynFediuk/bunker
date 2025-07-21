'use client'
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Slider } from "@/components";
import { TeamCard } from "@/components/Team/TeamCard";

export const TeamSlider = () => {
  const Team = [
    { name: 'Олександр Іванишак', description: 'Барбер з багаторічним досвідом', avatar: '/mock-team-member.jpeg' },
    { name: 'Олександр Іванишак', description: 'Барбер з багаторічним досвідом', avatar: '/mock-team-member.jpeg' },
    { name: 'Олександр Іванишак', description: 'Барбер з багаторічним досвідом', avatar: '/mock-team-member.jpeg' },
    { name: 'Олександр Іванишак', description: 'Барбер з багаторічним досвідом', avatar: '/mock-team-member.jpeg' },
  ]
  return (
    <Slider
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={20}
      slidesPerView={4}
      loop={true}
      autoplay={{ delay: 3000 }}
      navigation
      pagination={{ clickable: true }}
      breakpoints={{
        320: {
          slidesPerView: 1,
        },
        640: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 3,
        },
        1440: {
          slidesPerView: 4,
        },
      }}
      className="w-full h-[300px] rounded-xl overflow-hidden">
      {Team.map((card, i) => (
        <SwiperSlide key={i}>
          <TeamCard card={card}/>
        </SwiperSlide>
      ))}
    </Slider>
  )
}