import Image from 'next/image'
import { Title } from "@/components/ui";

type ServiceCardProps = {
  service: {
    icon: string;
    name: string;
    description: string;
    price: number
  }
}

export const ServicesCard = ({ service }: ServiceCardProps) => {
  const { icon, name, description, price } = service
  return (
    <div className={'p-4 rounded-xl shadow-xl text-center'}>
      <Image className={'mx-auto mb-4 md:mb-8'} width={100} height={100} src={icon} alt={name}/>
      <Title typeTitle={'h3'}>{name}</Title>
      <p className={'mb-4'}>{description}</p>
      <p className={'text-green-700 font-black text-2xl'}>{price}ГРН</p>
    </div>
  )
}