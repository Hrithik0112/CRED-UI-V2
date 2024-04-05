export default function Home() {
  return (
    <main className="flex w-screen min-h-screen flex-col items-center justify-between ">
      <div className="flex flex-col justify-center items-center h-screen text-white">
        {/* heading  */}
        <div className="text-[100px] leading-[100px] font-bold text-center">
          crafted for the
          <br />
          creditworthy
        </div>
        {/* subheading */}
        <div className="text-xl leading-9 font-medium mt-10 text-center">
          CRED is a members-only club that enables the
          <br />
          trustworthy to make financial progress
        </div>
      </div>
      <video
        src={require("../public/videos/hero-desktop.mp4")}
        autoPlay
        muted
        loop
        playsInline
        className="w-full h-full object-cover absolute top-0 -z-10"
      />
    </main>
  );
}
