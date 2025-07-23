import "./WelcomeCard.css";

const WelcomeCard = () => {
  return (
    <>
      <div className="box w-full ">
        <div className="container2 !w-full">
          <div className="clock">
            <div className="welcome">
              <h1 className="text-4xl font-bold">Welcome </h1>
              <h3 className="text-xl font-semibold">To the Riddle Game</h3>
            </div>
            <div className="input-div">
              <label>Enter your Name to start the game!</label>
              <input
                placeholder="Enter the Answer"
                type="text"
                // value={Answer}
                name="text"
                class="input"
                // onChange={(e) => setAnswer(e.target.value)}
              ></input>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WelcomeCard;
