import Image from 'next/image';

interface TitleSectionProps {
  textTitle: string;
}

const TitleSection = ({ textTitle }: TitleSectionProps) => {
  return (
    <div className="bg-mindsight-accent inline-flex items-center gap-10 rounded-xl p-3">
      <h2 className="text-2xl font-bold uppercase text-white">{textTitle}</h2>
      <Image src="/star-white.png" width={20} height={20} alt="star" />
    </div>
  );
};

export default TitleSection;
