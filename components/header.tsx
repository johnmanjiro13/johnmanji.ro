import Image from "next/image";

type Props = {
  title: string;
  backgroundImage: string;
};

export const Header: React.FC<Props> = ({ title, backgroundImage }) => {
  return (
    <div className="relative mb-20">
      <Image
        priority
        src={backgroundImage}
        alt="Background image for title header"
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
        }}
      />
      <h1 className="text-center text-5xl p-20 relative">{title}</h1>
    </div>
  );
};
