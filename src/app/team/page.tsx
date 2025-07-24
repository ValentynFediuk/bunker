import { Hero } from "@/components";
import { TeamCard } from "@/components/Team";

export default function TeamPage() {
  const teamList = [
    {
      id: '0',
      name: 'Олександр Іванишак',
      description: 'Барбер з багаторічним досвідом',
      avatar: '/mock-team-member.jpeg',
      instagram: 'https://www.instagram.com/die.your.dream/',
      telegram: 'https://t.me/ValentynFediuk',
      book: 'https://n828512.alteg.io/company/769457/personal/select-services?o=m2833716'
    },
    {
      id: '0',
      name: 'Олександр Іванишак',
      description: 'Барбер з багаторічним досвідом',
      avatar: '/mock-team-member.jpeg',
      instagram: 'https://www.instagram.com/die.your.dream/',
      telegram: 'https://t.me/ValentynFediuk',
      book: 'https://n828512.alteg.io/company/769457/personal/select-services?o=m2833716'
    },
    {
      id: '0',
      name: 'Олександр Іванишак',
      description: 'Барбер з багаторічним досвідом',
      avatar: '/mock-team-member.jpeg',
      instagram: 'https://www.instagram.com/die.your.dream/',
      telegram: 'https://t.me/ValentynFediuk',
      book: 'https://n828512.alteg.io/company/769457/personal/select-services?o=m2833716'
    },
    {
      id: '0',
      name: 'Олександр Іванишак',
      description: 'Барбер з багаторічним досвідом',
      avatar: '/mock-team-member.jpeg',
      instagram: 'https://www.instagram.com/die.your.dream/',
      telegram: 'https://t.me/ValentynFediuk',
      book: 'https://n828512.alteg.io/company/769457/personal/select-services?o=m2833716'
    },

  ]
  return (
    <>
      <Hero title={'Команда'} description={'Кожен з наших барберів — не просто майстер, а чувак, який реально шарить у стилі. Ми не штампуємо стрижки, а підходимо до кожного як до свого — з руками, які вирішують, і головою, яка думає.'} image={'/team.jpeg'}/>
      <section className={'py-8'}>
       <div className={'container'}>
          <div className={'flex justify-between flex-wrap gap-8 items-center justify-center'}>
        {teamList.map((item, index) => (
          <TeamCard key={item.avatar + index} card={item}/>
        ))}
      </div>
       </div>
      </section>
    </>
  )
}