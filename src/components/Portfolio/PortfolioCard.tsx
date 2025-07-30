import Image from "next/image";

type PortfolioCardProps = {
  image: string;
}

export const PortfolioCard = ({image}: PortfolioCardProps) => {
  return (
    <div className="relative max-w-xs w-full rounded-xl overflow-hidden shadow-xl group">
      <div className="w-full h-100 relative">
        <Image
          src={image}
          alt="haircut"
          fill
          className="object-contain group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>

  )
}