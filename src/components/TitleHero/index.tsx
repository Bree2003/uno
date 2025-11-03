import Image from 'next/image';

const TitleHero = () => {
  return (
    <div className="block">
      <div className="bg-mindsight-gradient inline-block rounded-xl px-20 py-5">
        <Image alt="logo" src="/mindsight-logo-inline.png" width={230} height={70} />
      </div>
    </div>
  );
};

export default TitleHero;
