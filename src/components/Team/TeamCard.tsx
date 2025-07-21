import Link from "next/link";
import Image from "next/image";
import { Button, Title } from "@/components/ui";

type TeamCardProps = {
  card: {
    name: string;
    description: string;
    avatar: string;
  }
}

export const TeamCard = ({ card }: TeamCardProps) => {
  const {name, description, avatar} = card
  return (
    <Link href={''}>
      <Image fill src={avatar} alt={'fsd'} objectFit={'cover'} />
      <div>
        <Title typeTitle={'h3'} className={''}>{name}</Title>
        <p>{description}</p>
        <Button className={''}>Записатися</Button>
      </div>
    </Link>
  )
}