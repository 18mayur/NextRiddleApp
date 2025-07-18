"use client";

import { useEffect, useState } from "react";

// async function fetchRiddleData() {
//   let data = await fetch("https://api.api-ninjas.com/v1/riddles", {
//     method: "GET",
//     headers: { "X-Api-Key": "pY2sWL+nvngbXokOdpA3jQ==X1vgxZultCQ4DxDP" },
//   });
//   data = await data.json();
//   return data;
// }

const RiddleCard2 =  () => {
  const [isStart, setIsStart] = useState(false);
  const [riddle, setRiddle] = useState([]);
    const [showAns,setShowAns]=useState(false);
useEffect(() => {
    if (isStart) {
      const fetchRiddle = async () => {
        try {
          const res = await fetch("https://api.api-ninjas.com/v1/riddles", {
            method: "GET",
            headers: {
              "X-Api-Key": "pY2sWL+nvngbXokOdpA3jQ==X1vgxZultCQ4DxDP",
            },
          });
          const data = await res.json();
          setRiddle(data[0]); 
        } catch (err) {
          console.error("Failed to fetch riddle:", err);
        }
      };

      fetchRiddle();
    }
  }, [isStart]);

  let quotesArray=[
    ["Think you're clever? Let's find out."],
    ["Only the sharpest minds can solve what's ahead. Are you one of them?"],
    ["This isn’t just a game — it’s a test of wit, logic, and nerve."],
    ["Many try. Few succeed. Will you be the one to crack them all?"],
    ["Step in if you're ready to outsmart the game itself."],
    ["Brains vs Riddles — let the battle begin!"],
    ["Only those who dare to think differently will prevail."],
    ["You say you're smart? Prove it."],
    ["These riddles won't solve themselves. Show us what you’ve got."],
    ["The deeper you think, the closer you get. Are you up for the challenge?"]
  ]
    function StartQuotes(){
        let randomIndex = Math.floor(Math.random() * quotesArray.length);
        
    }
    console.log(quotesArray[1])
    let randomIndex = Math.floor(Math.random() * quotesArray.length);
    console.log(randomIndex);
    function getRandomQuote(quotesArray) {
    let quote = [];
    let tempArray = [...quotesArray];

    while (quotesArray.length < 9) {
        let randomIndex = Math.floor(Math.random() * tempArray.length);
        quote.push(tempArray[randomIndex]);
        tempArray.splice(randomIndex, 1);
    }
    return quote;
        }
    let startQuote =getRandomQuote(quotesArray)
  return (
    <>
      <div className="relative flex w-80 flex-col rounded-xl bg-[#d1e7e0] bg-clip-border text-gray-700 shadow-md">
        {isStart && riddle ? (
          
                <>
                  <div className="relative flex justify-center items-center  mx-4 mt-6 h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                    {showAns? <h1 className="text-sm">{riddle.answer}</h1>:<h1 className="text-5xl">Riddles </h1>}
                  </div>
                  <div className="p-6">
                    <h5
                      className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                    >
                      {riddle.title}
                    </h5>
                    <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                      {riddle.question}
                    </p>
                  </div>
                  <div className="p-6 pt-0 flex justify-center">
                    <button
                        onClick={()=>setShowAns(true)}
                      data-ripple-light="true"
                      type="button"
                      className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    >
                      Show Answer
                    </button>
                  </div>
                </>
              
             ) : (
          <div className="p-5 flex flex-col gap-4 justify-center">
            <div className="relative flex justify-center items-center  mx-4 mt-6 h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <h1 className="text-sm">{quotesArray[1]} </h1> 
            </div>
            <button
              onClick={() => setIsStart(true)}
              data-ripple-light="true"
              type="button"
              className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            >
              Start
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default RiddleCard2;
