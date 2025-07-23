import WelcomeCard from "@/components/WelcomeCard";

export default function Home() {
  return (
    <>
      {/* <div className="flex justify-center mx-5 items-start">
          <WelcomeCard/>
      </div> */}
      <div className="relative z-10 flex flex-col items-center mt-[4rem] h-full text-white text-center">
          <WelcomeCard/>
      </div>
    </>
  );
}
