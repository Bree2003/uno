import Image from 'next/image';

const VideoSection = () => {
  return (
    <section className="py-16 md:py-28">
      <div className="container mx-auto flex flex-col items-center gap-10 px-6 md:flex-row md:justify-between md:gap-16">
        <div className="w-full md:w-1/2">
          <video
            src="/Mindsight_Video_v1.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="border-mindsight-accent h-64 w-full rounded-3xl object-cover shadow-2xl ring-1 ring-white/30 transition-transform duration-500 hover:scale-[1.02] md:h-[26rem]"
          />
        </div>

        <div className="w-full text-center md:w-1/2">
          <Image
            src="/meendy-letra.png"
            alt="El secreto del buen dormir"
            width={550}
            height={550}
            className="mx-auto object-contain drop-shadow-2xl transition-transform duration-500 hover:scale-105"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
