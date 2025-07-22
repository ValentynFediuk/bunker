'use client'
import { SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { Slider } from "@/components";
import { TeamCard } from "@/components/Team/TeamCard";

export const TeamSlider = () => {
  const Team = [
    {
      name: 'Олександр Іванишак',
      description: 'Барбер з багаторічним досвідом',
      avatar: '/mock-team-member.jpeg',
      instagram: 'https://www.instagram.com/die.your.dream/',
      telegram: 'https://t.me/ValentynFediuk',
      book: 'https://n828512.alteg.io/company/769457/personal/select-services?o=m2833716'
    },
    {
      name: 'Олександр Іванишак',
      description: 'Барбер з багаторічним досвідом',
      avatar: '/mock-team-member.jpeg',
      instagram: 'https://www.instagram.com/die.your.dream/',
      telegram: 'https://t.me/ValentynFediuk',
      book: 'https://n828512.alteg.io/company/769457/personal/select-services?o=m2833716'
    },
    {
      name: 'Олександр Іванишак',
      description: 'Барбер з багаторічним досвідом',
      avatar: '/mock-team-member.jpeg',
      instagram: 'https://www.instagram.com/die.your.dream/',
      telegram: 'https://t.me/ValentynFediuk',
      book: 'https://n828512.alteg.io/company/769457/personal/select-services?o=m2833716'
    },
    {
      name: 'Олександр Іванишак',
      description: 'Барбер з багаторічним досвідом',
      avatar: '/mock-team-member.jpeg',
      instagram: 'https://www.instagram.com/die.your.dream/',
      telegram: 'https://t.me/ValentynFediuk',
      book: 'https://n828512.alteg.io/company/769457/personal/select-services?o=m2833716'
    },
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
      className="w-full h-[460px]">
      {Team.map((card, i) => (
        <SwiperSlide key={i}>
          <TeamCard card={card}/>
        </SwiperSlide>
      ))}
    </Slider>
  )
}