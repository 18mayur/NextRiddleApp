import Link from "next/link";
import "./WelcomeCard.css";

const WelcomeCard = () => {
  return (
    <>
      <div className="box w-full ">
        <div className="container2 !w-full">
          <div className="clock p-[4rem] flex flex-col items-center gap-[1rem]">
            <div className="welcome">
              <h1 className="text-[4rem] font-bold mb-0">Welcome </h1>
              <h3 className="text-xl font-semibold">To the Riddle Game</h3>
            </div>
            <div className="input-div w-full flex flex-col items-center justify-center">
              {/* <label htmlFor="name-input" className="mb-2">
                Enter your Name to start the game!
              </label> */}
              {/* <input
                placeholder="Enter Your Name !"
                type="text"
                id="name-input"
                // value={Answer}
                name="text"
                className="input "
                // onChange={(e) => setAnswer(e.target.value)}
              ></input> */}
              <Link href="/RiddlesCategory">
                <button>Quick Start!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeCard;
