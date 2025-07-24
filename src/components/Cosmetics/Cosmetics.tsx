import { Title } from "@/components/ui";
import { CosmeticsCard } from "@/components/Cosmetics/CosmeticsCard";

export const Cosmetics = () => {
  const cosmeticsList = [
    {
      name: 'Шампунь для волосся',
      description: 'Шампунь для волосся бренда Perfomen',
      image: '/shampoo.png',
      price: 200
    },
    {
      name: 'Шампунь для волосся',
      description: 'Шампунь для волосся бренда Perfomen',
      image: '/shampoo.png',
      price: 200
    },
    {
      name: 'Шампунь для волосся',
      description: 'Шампунь для волосся бренда Perfomen',
      image: '/shampoo.png',
      price: 200
    },
    {
      name: 'Шампунь для волосся',
      description: 'Шампунь для волосся бренда Perfomen',
      image: '/shampoo.png',
      price: 200
    },
    {
      name: 'Шампунь для волосся',
      description: 'Шампунь для волосся бренда Perfomen',
      image: '/shampoo.png',
      price: 200
    },
    {
      name: 'Шампунь для волосся',
      description: 'Шампунь для волосся бренда Perfomen',
      image: '/shampoo.png',
      price: 200
    },
    {
      name: 'Шампунь для волосся',
      description: 'Шампунь для волосся бренда Perfomen',
      image: '/shampoo.png',
      price: 200
    },
    {
      name: 'Шампунь для волосся',
      description: 'Шампунь для волосся бренда Perfomen',
      image: '/shampoo.png',
      price: 200
    },
  ]
  return (
    <section className={'py-8 bg-stone-950'}>
      <div className={'container'}>
        <Title typeTitle={'h2'}>Косметика</Title>
        <div className={'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 gap-4'}>
          {cosmeticsList.map((cosmeticsItem, index) => (
            <CosmeticsCard key={cosmeticsItem.image + index} cosmeticsItem={cosmeticsItem} />
          ))}
        </div>
      </div>
    </section>
  )
}