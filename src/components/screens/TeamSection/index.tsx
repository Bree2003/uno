import TitleSection from '../../TitleSection';

const TeamSection = () => {
  return (
    <div className="p-10">
      <div className="mb-10 flex justify-center">
        <TitleSection textTitle="Conoce al equipo Mindsight" />
      </div>
      <p className="mb-4 text-xl leading-relaxed text-gray-600">
        Somos un equipo multidisciplinario, cada uno un artesano de su propia área, pero
        con un objetivo en común, permitirte dormir mejor!
      </p>
    </div>
  );
};

export default TeamSection;
