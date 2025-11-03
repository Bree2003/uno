import MindsightCloudDivider from '@/components/old/MindsightCloudDivider';
import MindsightFooter from '@/components/old/MindsightFooter';
import OnScrollRevealDiv from '@/components/old/ui/animated/on-scroll-reveal';

const About = () => {
  return (
    <>
      <section className="animate-background-cycle bg-gradient-dynamic pt-20">
        <div className="flex flex-col items-center gap-4 pb-3 md:h-full md:p-20 md:pb-5">
          <OnScrollRevealDiv direction="top">
            <h1 className="text-3xl font-semibold md:text-7xl">Politica de privacidad</h1>
          </OnScrollRevealDiv>
        </div>
        <MindsightCloudDivider />
      </section>
      <section className="space-y-10 bg-white p-10 text-black md:space-y-16 md:p-20">
        <p className="mb-4 text-night">
          Esta es una sección de ejemplo para la política de privacidad. Aquí puedes
          incluir información sobre cómo se recopilan, utilizan y protegen los datos de
          los usuarios.
        </p>
        <p className="mb-4 text-night">
          Al utilizar este sitio web, aceptas los términos descritos en esta política. Nos
          comprometemos a proteger tu información personal y garantizar la transparencia
          en el uso de los datos.
        </p>
      </section>
      <MindsightFooter>
        <MindsightCloudDivider variant="bottom" />
      </MindsightFooter>
    </>
  );
};

export default About;
