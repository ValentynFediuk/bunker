import { Title } from "@/components/ui";
import { WhyUsCard } from "@/components/WhyUs/WhyUsCard";

export const WhyUs = () => {
  const whyUsList = [
    {
      name: 'Професіонали',
      image: 'certificate.svg',
      description: 'Ми не просто махаємо машинкою — у кожного барбера руки ростуть з правильного місця. Все чисто, безпечно, по-людськи.'
    },
    {
      name: 'Майстри своєї справи',
      image: 'master.svg',
      description: 'Фанати ножиць і бороди — ми кайфуємо від того, що робимо. Стрижемо так, що потім дзеркало саме каже “краса!”'
    },
    {
      name: 'Перевірені часом',
      image: 'trusted.svg',
      description: 'Понад 10 тисяч клієнтів залишилися задоволені й повернулись ще. Рейтинг 5★ — не куплений, а зароблений.'
    },
  ]

  return (
    <section className={'py-8  '}>
      <div className={'container'}>
        <Title typeTitle={'h2'}>Чому ми?</Title>
        <div className={'flex items-center justify-center flex-wrap md:flex-row gap-8 xl:justify-between'}>
          {whyUsList.map(item => (
            <WhyUsCard key={item.image} whyUsCard={item} />
          ))}
        </div>
      </div>
    </section>
  )
}