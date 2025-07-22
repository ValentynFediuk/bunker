import Link from "next/link";
import Image from "next/image";
import { Button, Title } from "@/components/ui";

type TeamCardProps = {
  card: {
    name: string;
    description: string;
    avatar: string;
    instagram?: string;
    telegram?: string;
    book: string
  }
}

export const TeamCard = ({ card }: TeamCardProps) => {
  const {name, description, avatar, instagram, telegram, book} = card
  return (
    <div className={'text-center'}>
      <div className={'relative h-50 w-50 mx-auto mb-4'}>
        <Image className={'rounded-full'} fill src={avatar} alt={'fsd'} objectFit={'cover'} />
      </div>
      <div>
        <Title typeTitle={'h3'} className={'text-1xl md:text-2xl mb-2'}>{name}</Title>
        <p className={'mb-4'}>{description}</p>
        <div className={'flex flex-row justify-center gap-4 mb-4'}>
          {instagram &&
            <a href={instagram} rel={'noreferrer'} target={'_blank'}>
              <Image width={24} height={24} src={'/instagram.png'} alt={'instagram'} />
            </a>
          }
          {telegram &&
            <a href={telegram} rel={'noreferrer'} target={'_blank'}>
              <Image width={24} height={24} src={'/telegram.png'} alt={'telegram'} />
            </a>
          }
        </div>
        <div className={'flex flex-row justify-center items-center gap-4 mb-4'}>
          <a href={book} rel={'noreferrer'} target={'_blank'}>
            <Button className={''}>Записатися</Button>
          </a>
          <Link href={''}>
            <Button background={'black'} className={'border border-white'}>Детальніше</Button>
          </Link>
        </div>

      </div>
    </div>
  )
}