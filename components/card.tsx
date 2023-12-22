import Image from "next/legacy/image";

type CardImage = {
  src: string;
  width: number;
  height: number;
  alt: string;
};

type Props = {
  image?: CardImage;
  heading: string;
  content: string;
  url: string;
};

function imageElement(cardImage: CardImage | undefined): JSX.Element {
  if (cardImage) {
    const { alt, ...imageProps } = cardImage;
    return (
      <Image
        priority
        alt={alt}
        {...imageProps}
        style={{
          maxWidth: "100%",
          height: "auto",
        }}
        className="w-full"
      />
    );
  }
  return <></>;
}

export const Card: React.FC<Props> = ({ image, heading, content, url }) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg relative m-2">
      {imageElement(image)}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{heading}</div>
        <p className="text-gray-700 text-base">{content}</p>
        <a href={url}>{">>"} GitHub</a>
      </div>
    </div>
  );
};
