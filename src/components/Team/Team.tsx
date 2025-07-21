'use client'
import { Title } from "@/components/ui";
import { TeamSlider } from "@/components/Team";

export const Team = () => {
  return (
    <section className='py-8'>
      <div className="container">
        <Title className={'text-3xl md:text-4xl text-center mb-8'} typeTitle={'h2'}>Команда</Title>
        <TeamSlider />
      </div>
    </section>
  )
}