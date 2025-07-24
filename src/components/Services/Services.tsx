import { Title } from "@/components/ui";
import { ServicesCard } from "@/components/Services/ServicesCard";

export const Services = () => {
  const servicesList = [
    {
      icon: '/haircut.svg',
      name: 'Чоловіча стрижка',
      description: 'Класична або сучасна стрижка, з врахуванням форми голови і стилю життя. Професійний підхід і без зайвого пиз*єжу.',
      price: 400,
    },
    {
      icon: '/beard.svg',
      name: 'Стрижка бороди',
      description: 'Філігранне оформлення бороди, щоб виглядати як джентльмен, а не як лісовий бородань.',
      price: 250,
    },
    {
      icon: '/beard-grooming.svg',
      name: 'Камуфляж бороди',
      description: 'Затемнення сивини або освітлення бороди спеціальними засобами. Без ефекту "намалювали фломастером".',
      price: 300,
    },
    {
      icon: '/face.svg',
      name: 'Чистка обличчя',
      description: 'Глибоке очищення шкіри обличчя. Мінус чорні цятки, плюс свіжий вигляд — ніби ти виспався.',
      price: 450,
    },
    {
      icon: '/haircut-styling.svg',
      name: 'Укладка',
      description: 'Професійна укладка зі стайлінг-засобами. На випадок, коли треба “вийти в люди” з головою, а не з хаосом.',
      price: 200,
    },
    {
      icon: '/trimmer.svg',
      name: 'Стрижка машинкою',
      description: 'Швидко, чітко, недорого. Ідеально під нуль або fade без ножиць.',
      price: 250,
    },
    {
      icon: '/thread.svg',
      name: 'Корекція брів ниткою',
      description: 'Точна форма брів без подразнень. Мінімум болю, максимум естетики.',
      price: 180,
    },
    {
      icon: '/wax.svg',
      name: 'Депіляція воском',
      description: 'Позбавлення від небажаного волосся: ніс, вуха, брови. Швидко, чітко, з мінімальним “ай бля!”.',
      price: 150,
    },
]
  return (
    <section className={'bg-stone-950 py-8'}>
    <div className={'container'}>
      <Title typeTitle={'h2'}>
        Послуги
      </Title>
      <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'}>
        {servicesList.map((service) => (
          <ServicesCard key={service.icon} service={service} />
        ))}
      </div>
    </div>
    </section>
  )
}