import { hostGrotesk, martianMono } from "../fonts";

export default function ITServices() {
  return (
    <div className="fixed h-screen w-screen z-90 flex items-center justify-center overflow-hidden text-neutral-300">
      <div className="relative h-full w-full bg-[#000000]">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[radial-gradient(140%_145%_at_45%_10%,rgba(0,0,0,0)_40%,rgba(90,30,255,1)_100%)]">
          <div className="w-screen h-screen flex flex-col items-center justify-center gap-6 sm:gap-8 md:gap-10 px-4">
            <p
              className={`${martianMono.className} text-lg sm:text-xl font-bold text-center bg-white/10 px-3 sm:px-4 py-1 rounded-full`}
            >
              {" "}
              <span className="text-blue-500">*</span> coming soon
            </p>
            <h1
              className={`${martianMono.className} text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-center`}
            >
              IT Services
            </h1>
            <p
              className={`${hostGrotesk.className} text-xs sm:text-base text-center max-w-2xl`}
            >
              We provide a wide range of IT services to our clients. We are a
              team of experienced professionals who are dedicated to providing
              the best possible service to our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
