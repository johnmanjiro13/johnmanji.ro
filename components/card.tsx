import Image from "next/image";

type CardImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Props = {
  image: CardImage;
  heading: string;
  content: string;
  url: string;
};

export const Card: React.FC<Props> = ({ image, heading, content, url }) => {
  const { alt, ...imageProps } = image;
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative">
      <Image priority alt={alt} {...imageProps} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base mb-2">{content}</p>
        <a href={url}>{">>"} GitHub</a>
      </div>
    </div>
  );
};
