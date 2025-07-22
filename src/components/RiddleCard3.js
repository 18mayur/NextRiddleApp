"use client";

import { useEffect, useState } from "react";
import Loader from "./Loader";
import cheat from "../../public/Images/beat.png";
import Image from "next/image";
import Loader2 from "./Loader2";
// async function fetchRiddleData() {
//   let data = await fetch("https://api.api-ninjas.com/v1/riddles", {
//     method: "GET",
//     headers: { "X-Api-Key": "pY2sWL+nvngbXokOdpA3jQ==X1vgxZultCQ4DxDP" },
//   });
//   data = await data.json();
//   return data;
// }

const RiddleCard3 = ({category}) => {
  const [isStart, setIsStart] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [riddle, setRiddle] = useState([null]);
  const [showAns, setShowAns] = useState(false);
  const [nextRiddleBtn, setNextRiddleBtn] = useState(false);
  const [Answer, setAnswer] = useState("");
  const [result, setResult] = useState("");
const[test,setTest]=useState("");
  // const [nextRiddle,setNextRiddle]=useState()
useEffect(() => {
    console.log(category)
    
    if (isStart) {
      const fetchRiddle = async (category) => {
        try {
          setIsLoading(true);
          const res = await fetch(`https://riddles-api-eight.vercel.app/${category}`);
          const data = await res.json();
          setTest(data)
           console.log(data);
        } catch (err) {
          console.error("Failed to fetch riddle:", err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchRiddle(category) ;
    }
  }, [isStart]);
  console.log(Answer);
  const handleSubmit = (Answer) => {
    if (Answer.trim().toLowerCase() === test.answer.trim().toLowerCase()) {
      setResult(`You are correct : answer is ${test.answer}` );
    } else {
      setResult("Try again!");
    }
  };
  let quotesArray = [
    ["Think you're clever? Let's find out."],
    ["Only the sharpest minds can solve what's ahead. Are you one of them?"],
    ["This isn’t just a game — it’s a test of wit, logic, and nerve."],
    ["Many try. Few succeed. Will you be the one to crack them all?"],
    ["Step in if you're ready to outsmart the game itself."],
    ["Brains vs Riddles — let the battle begin!"],
    ["Only those who dare to think differently will prevail."],
    ["You say you're smart? Prove it."],
    ["These riddles won't solve themselves. Show us what you’ve got."],
    ["The deeper you think, the closer you get. Are you up for the challenge?"],
  ];
  const handleNextRiddle = () => {
    setShowAns(true);
    setNextRiddleBtn(true);
  };

  function StartQuotes(quotesArray) {
    let randomNo = Math.floor(Math.random() * quotesArray.length);
    return randomNo;
  }
  let startQuote = StartQuotes(quotesArray);
  console.log(quotesArray[startQuote]);
  const fetchNextRiddle=async(category)=>{
     try {
          setIsLoading(true);
          setShowAns(false);
          setNextRiddleBtn(false);
          const res = await fetch(`https://riddles-api-eight.vercel.app/${category}`);
          const data = await res.json();
          setTest(data)
           console.log(data);
        } catch (err) {
          console.error("Failed to fetch riddle:", err);
        } finally {
          setIsLoading(false);
        }
  }

  return (
    <>
      <div className="relative flex mx-4 md:mx-0 md:w-[45%] flex-col rounded-xl bg-[#d1e7e0] bg-clip-border text-gray-700 shadow-md">
        {isStart ? (
          <>
            <div
              className={`relative flex justify-center items-center mx-4 mt-6 h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-zinc-800 shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r ${
                showAns ? "bg-green-600" : "from-blue-500 to-blue-600"
              }`}
            >
              {showAns ? (
                <h1 className="text-[1.35rem] md:text-[1rem] text-center font2">
                  {test.answer}
                </h1>
              ) : (
                result || <h1 className="text-5xl">Riddles</h1>
              )}
            </div>
            {isLoading ? (
              <div className="flex items-center justify-center mb-3  text-black text-lg font-semibold">
                <Loader />
                {/* <Loader2/> */}
              </div>
            ) : (
              <div className="p-6">
                {/* <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {riddle?.category}
                </h5> */}
                <p className="block font-sans overflow-y-scroll text-base font-light leading-relaxed text-inherit antialiased">
                  {test.riddle}
                </p>
              </div>
            )}
            {nextRiddleBtn ? (
              <button
                onClick={()=>fetchNextRiddle(category)}
                type="button"
                className="select-none m-3 rounded-lg font4 bg-blue-500 py-3 px-6 text-center font-sans text-[1rem] tracking-wide font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
              >
                nextRiddle
              </button>
            ) : (
              <div className="flex justify-between pb-4">
                <div className="input-div flex gap-3 px-5">
                  <div>
                    <input
                      placeholder="Enter the Answer"
                      type="text"
                      value={Answer}
                      name="text"
                      class="input"
                      onChange={(e) => setAnswer(e.target.value)}
                    ></input>
                  </div>
                  <div className="btn-div">
                    <button
                      className="btn"
                      onClick={() => {
                        handleSubmit(Answer);
                      }}
                    >
                      <span class="span-mother">
                        <span>S</span>
                        <span>u</span>
                        <span>b</span>
                        <span>m</span>
                        <span>i</span>
                        <span>t</span>
                      </span>
                      <span class="span-mother2">
                        <span>S</span>
                        <span>u</span>
                        <span>b</span>
                        <span>m</span>
                        <span>i</span>
                        <span>t</span>
                      </span>
                    </button>
                  </div>
                </div>
                <div className="px-6 pt-0 flex justify-center">
                  <div className="relative group">
                    <button
                      onClick={handleNextRiddle}
                      type="button"
                      className="select-none rounded-[50%] bg-black p-[8px] text-center text-xs font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
                    >
                      <Image width={24} height={24} alt="img" src={cheat} />
                    </button>
                    <div className="absolute bottom-[120%] left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-10">
                      Do Not Cheat
                    </div>
                  </div>
                </div>
              </div>
            )}
          </>
        ) : (
          <div className="p-5 flex flex-col gap-4 justify-center">
            <h2 className="text-center text-2xl font2">Riddles</h2>
            <div className="relative p-3 flex justify-center items-center h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
              <h1 className="text-center quotes text-[1.5rem] leading-[1.6rem]">
                {quotesArray[startQuote]}
              </h1>
            </div>
            <button
              onClick={() => setIsStart(true)}
              type="button"
              className="select-none rounded-lg font4 bg-blue-500 py-3 px-6 text-center font-sans text-[1rem] tracking-wide font-bold uppercase text-white shadow-md transition-all hover:shadow-lg"
            >
              Start
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RiddleCard3;
