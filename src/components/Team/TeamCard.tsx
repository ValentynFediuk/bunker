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
  const { name, description, avatar, instagram, telegram, book } = card
  return (
    <div className={'text-center'}>
      <div className={'relative h-50 w-50 mx-auto mb-4'}>
        <Image className={'rounded-full'} fill src={avatar} alt={'fsd'} objectFit={'cover'}/>
      </div>
      <div>
        <Title typeTitle={'h3'} className={'text-1xl md:text-2xl mb-2'}>{name}</Title>
        <p className={'mb-4'}>{description}</p>
        <div className={'flex flex-row justify-center gap-4 mb-4'}>
          {instagram &&
            <Button typeBtn={'link'} isLink href={instagram}>
              <Image width={24} height={24} src={'/instagram.png'} alt={'instagram'}/>
            </Button>
          }
          {telegram &&
            <Button typeBtn={'link'} isLink href={telegram}>
              <Image width={24} height={24} src={'/telegram.png'} alt={'telegram'}/>
            </Button>
          }
        </div>
        <div className={'flex flex-row justify-center items-center gap-4 mb-4'}>
          <Button typeBtn={'primary'} isLink href={book}>
            Записатися
          </Button>
          <Button isLink href={''} typeBtn={'outlined'}>Детальніше</Button>
        </div>
      </div>
    </div>
  )
}