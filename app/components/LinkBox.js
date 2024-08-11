import Image from "next/image";

const LinkBox = ({ lbTitle, lbNumber, lbSvg, lbTheme, lbAlt }) => {
  return (
    <>
      <div className="flex items-center p-8 bg-white shadow border rounded-lg">
        <div
          className={`${lbTheme} inline-flex flex-shrink-0 items-center justify-center mr-4 h-16 w-16 rounded-full`}
        >
          <Image src={`/svg/${lbSvg}.svg`} width={40} height={40} alt={lbAlt} />
        </div>
        <div className="">
          <span className="block text-2xl font-bold">{lbNumber}</span>
          <span className="block text-gray-500">{lbTitle}</span>
        </div>
      </div>
    </>
  );
};

export default LinkBox;
