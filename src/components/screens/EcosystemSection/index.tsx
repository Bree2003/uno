import Image from 'next/image';
import TitleSection from '../../TitleSection';

const Ecosystem = () => {
  const items = [
    { title: 'Mindfulness', desc: 'Técnicas de atención plena (como Calm).' },
    { title: 'Nutrición', desc: 'Hábitos saludables y descanso reparador.' },
    { title: 'Sueño', desc: 'Rutinas para mejorar la calidad del descanso.' },
    { title: 'Salud mental', desc: 'Acompañamiento profesional y comunidad.' },
    { title: 'Actividad física', desc: 'Movimiento consciente y bienestar.' },
    { title: 'Bienestar digital', desc: 'Equilibrio con la tecnología.' },
  ];

  return (
    <section className="relative flex flex-col items-center justify-center p-10">
      <div className="mb-10 flex justify-center">
        <TitleSection textTitle="Nuestro Ecosistema" />
      </div>

      {/* Contenedor circular */}
      <div className="relative flex h-[600px] w-[600px] items-center justify-center md:h-[700px] md:w-[700px]">
        {/* Imagen central */}
        <Image alt="mindy" width={250} height={250} src="/mindy.png" className="z-10" />

        {/* Elementos alrededor */}
        {items.map((item, i) => {
          const angle = (i / items.length) * 2 * Math.PI;
          const radius = 300; // 🔹 más separación del centro

          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;

          return (
            <div
              key={i}
              className="absolute flex w-60 items-center space-x-3 rounded-2xl border-2 border-[--mindsight-accent] bg-white p-4 shadow-md transition-transform hover:scale-105"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <div className="rounded-full bg-violet-100 p-2">
                <svg
                  className="h-6 w-6 text-violet-600"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-gray-800">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.desc}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Ecosystem;
