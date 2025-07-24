import { Title } from "@/components/ui";
import Image from 'next/image'
type WhyUsCardProps = {
  whyUsCard: {
    name: string;
    description: string;
    image: string;
  }
}

export const WhyUsCard = ({whyUsCard}: WhyUsCardProps) => {
  const { image, name, description } = whyUsCard

  return (
    <div className={'text-center max-w-80'}>
      <Image className={'mx-auto mb-4 md:mb-8'} width={80} height={100} src={image} alt={name}/>
      <Title typeTitle={'h3'}>{name}</Title>
      <p className={'mb-4'}>{description}</p>
    </div>
  )
}