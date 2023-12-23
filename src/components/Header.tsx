import Image from "next/image";

export function Header({
  title,
  backgroundImage,
}: {
  title: string;
  backgroundImage: string;
}) {
  return (
    <div className="relative mb-20 w-full h-full">
      <Image
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
}
