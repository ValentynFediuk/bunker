import { Title } from "@/components/ui";
import Image from "next/image";

type CosmeticsCardProps = {
  cosmeticsItem: {
    name: string;
    description: string;
    image: string;
    price: number;
  }

}

export const CosmeticsCard = ({cosmeticsItem}: CosmeticsCardProps) => {
  const { image, name, description, price } = cosmeticsItem

  return (
    <div className={'p-4 rounded-xl shadow-xl text-center'}>
      <Image className={'mx-auto mb-4 md:mb-8'} width={80} height={100} src={image} alt={name}/>
      <Title typeTitle={'h3'}>{name}</Title>
      <p className={'mb-4'}>{description}</p>
      <p className={'text-green-700 font-black text-2xl'}>{price}ГРН</p>
    </div>
  )
}