import Link from "next/link";
import "./WelcomeCard.css";

const WelcomeCard = () => {
  return (
    <>
      <div className="box w-full ">
        <div className="container2 !w-full">
          <div className="clock flex flex-col items-center gap-[3rem]">
            <div className="welcome">
              <h1 className="text-[4rem] font-bold mb-0">Welcome </h1>
              <h3 className="text-xl font-semibold">To the Riddle Game</h3>
            </div>
            <div className="input-div w-full flex flex-col items-start">
              <label htmlFor="name-input" className="mb-2">
                Enter your Name to start the game!
              </label>
              <input
                placeholder="Enter the Answer"
                type="text"
                id="name-input"
                // value={Answer}
                name="text"
                class="input"
                // onChange={(e) => setAnswer(e.target.value)}
              ></input>
              <Link href="/RiddlesCategory">
                <button>Begin!</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeCard;
