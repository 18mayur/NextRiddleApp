"use client";
import Link from "next/link";
import "./WelcomeCard.css";
import "./NewRiddleCard.css";
import { useState, useEffect } from "react";
import Loader2 from "./Loader2";
import cross from "../../public/Images/cross.svg";
import check from "../../public/Images/check.svg";
import hint2 from "../../public/Images/hints2.png";
import congrats from "../../public/Images/firework.png";
import Image from "next/image";
import { usePathname } from "next/navigation";

const NewRiddleCard = ({ category }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [riddles, setRiddles] = useState([]);
  const [counter, setCounter] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [hintCount, setHintCount] = useState(0);
  const [hint, setHint] = useState("");
  const [Answer, setAnswer] = useState("");
  const [showAns, setShowAns] = useState(false);
  const [result, setResult] = useState(false);
  const [nextRiddlebtn, setNextRiddleBtn] = useState(false);
  const [score,setScore]=useState(0);

  const pathname = usePathname();

  const hiddenRoutes =['/RiddlesCategory/funny','/RiddlesCategory/mystery'];

  const HintBtnPath = hiddenRoutes.includes(pathname)
  useEffect(() => {
    console.log(category);
    if (
      pathname === "/RiddlesCategory/mystery" ||
      pathname === "/RiddlesCategory/funny"
    ) {
      const fetchRiddle = async (category) => {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://riddles-api-eight.vercel.app/${category}/10`
          );
          const data = await res.json();
          setRiddles(data.riddlesArray);
          // console.log(data.riddlesArray[0]);
        } catch (err) {
          console.error("Failed to fetch riddle:", err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchRiddle(category);
    } else {
      const fetchRiddle = async (category) => {
        setIsLoading(true);
        let collected = [];
        try {
          while (collected.length < 10) {
            const res = await fetch(
              `https://riddles-api-eight.vercel.app/${category}/10`
            );
            const data = await res.json();
            const filtered = data.riddlesArray.filter((riddle) => {
              const wordCount = riddle.answer.trim().split(/\s+/).length;
              return wordCount >= 2 && wordCount <= 3;
            });
            for (const r of filtered) {
              if (
                collected.length < 10 &&
                !collected.find((item) => item.riddle === r.riddle)
              ) {
                collected.push(r);
              }
            }
          }
          setRiddles(collected);
        } catch (err) {
          console.error("Failed to fetch riddles:", err);
        } finally {
          setIsLoading(false);
        }
      };
      fetchRiddle(category);
    }
  }, [category]);
  // console.log(riddles);
  // console.log(riddles[counter].riddle);
  const handleNextRiddle = () => {
    if (counter < riddles.length - 1) {
      // setCounter(counter + 1);
      setNextRiddleBtn(false);
      setIsLoading(true);
      setTimeout(() => {
        setCounter((prev) => prev + 1);
        setIsLoading(false);
        setShowAns(false);
        setHint("");
        setHintCount(0);
      }, 1000);
    } else {
      setGameOver(true);
    }
  };
  console.log(Answer);
  function normalizeTextAnswer(text) {
    return text
      .toLowerCase()
      .replace(/^(a |an |the |my |your )/, "") // remove common prefixes
      .replace(/^the letter /, "") // special case: 'the letter x'
      .replace(/[^a-z0-9]/g, "") // remove punctuation
      .trim();
  }
  function extractNumber(text) {
    const match = text.match(/\d+/);
    return match ? parseInt(match[0]) : null;
  }

  const handlecheck = (Answer) => {

    let userInput = Answer;
    let correctAnswer = riddles?.[counter]?.answer;
    console.log(userInput);
    console.log(correctAnswer);
    if (!userInput || !correctAnswer) return true;

    const ApiAnswer = normalizeTextAnswer(correctAnswer);
    const UserInputAnswer = normalizeTextAnswer(userInput);
    if (UserInputAnswer === ApiAnswer || UserInputAnswer.includes(ApiAnswer)) {
      setShowAns(true);
      setAnswer("")
      setNextRiddleBtn(true);
      setScore(score+50);
      return ;
    }
    const correctNum = extractNumber(correctAnswer);
    const userNum = extractNumber(userInput);
    if (correctNum !== null && userNum === correctNum) {
      setShowAns(true);
      setAnswer("")
      setNextRiddleBtn(true);
      setScore(score+50);
      return ;
    }
    return setShowAns(false) && setResult(true);
  };
  const generateHint = (answer, hintLevel) => {
    if (hintLevel >= 3) return answer;
    const revealCount = hintLevel === 2 ? 3 : 4;
    const indices = [];
    while (indices.length < revealCount) {
      const idx = Math.floor(Math.random() * answer.length);
      if (!indices.includes(idx) && answer[idx] !== " ") {
        indices.push(idx);
      }
    }
    return answer
      .split("")
      .map((char, i) => {
        if (i === 0 || indices.includes(i)) return char;
        return char === " " ? " " : "_ ";
      })
      .join("");
  };
  const handleHint = () => {
    const currentAnswer = riddles?.[counter]?.answer || "";
    const newHintCount = hintCount + 1;
    setHintCount(newHintCount);

    const newHint = generateHint(currentAnswer, newHintCount);
    setHint(newHint);
  };

  const handleGiveup = () => {
    setShowAns(true);
    setNextRiddleBtn(true);
    if(score<=0){
      setScore(score)
    }else{
      setScore(score-20);
    }
  };
  console.log(score)
  return (
    <>
      <div className="box !absolute w-full ">
        <div className="container2 flex flex-col justify-center items-center !w-full">
        <p className="text-5xl mb-3 text-cyan-50 font-bold">Score :{score}</p>
          <div className="clock flex flex-col items-center ">
            <div className="Que-div flex justify-between items-center ">
              {showAns ? (
                <div className=" flex flex-col w-full">
                <div className="flex gap-2 mb-2">
                  <Image src={congrats} width={24} height={24} alt="congrats"/>
                  <span className=" !text-[1.5rem] font-semibold"> Correct Answer!</span>
                </div>
                  <span className="ms-3 !text-[1.3rem] font-semibold"> {riddles?.[counter]?.answer}</span>
                  </div>
              ) : result ? (
                <h3 className="!text-[2rem] font-semibold">Try again</h3>
              ) : (
                <h3 className="!text-[2rem] font-semibold">Quetion</h3>
              )}
              <span className="pr-3 text-xl">{counter + 1}/10</span>
            </div>
            {gameOver ? (
              <div className="text-3xl font-bold text-red-500 mt-4">
                Game Over!
              </div>
            ) : isLoading ? (
              <div className="flex items-center justify-center !my-4 p-4  text-black text-lg font-semibold">
                <Loader2 />
              </div>
            ) : (
              <div className="px-6 pt-5  text-left w-full back-drop2">
                <p className="text-[1.125rem] text-amber-100 ">
                  {riddles?.[counter]?.riddle || "No riddle available"}
                </p>
                {/* {showAnswer && (
                <p className="text-green-400 mt-2">
                  Answer: {riddles?.[counter]?.answer || "Not available"}
                </p>
              )} */}
              </div>
            )}

            <div className="input-div w-full flex flex-col items-start gap-3 px-6 ">
              <input
                placeholder="Enter the Answer"
                type="text"
                value={Answer}
                name="text"
                onChange={(e) => setAnswer(e.target.value)}
                className="input !mb-0"
              />
              <div className="flex justify-center w-full gap-4 items-center mt-4">
                {nextRiddlebtn ? (
                  <>
                    <button
                      onClick={handleGiveup}
                      className="btn2 !bg-[#ff0033] text-white !px-[1.4rem] rounded  !flex gap-1 items-center "
                    >
                      <Image src={cross} width={24} height={24} />{" "}
                      <span>Give up</span>
                    </button>
                    <button
                      onClick={handleNextRiddle}
                      className="btn2 !bg-[#17d1c5] text-white px-4 py-2 rounded"
                      disabled={counter >= riddles.length - 1}
                    >
                      Next
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={handleGiveup}
                      className="btn2 !bg-[#ff0033] text-white px-4 py-2 rounded  !flex gap-1 items-center "
                    >
                      <Image src={cross} width={22} height={22} />{" "}
                      <span>Give up</span>
                    </button>
                    <button
                      onClick={() => handlecheck(Answer)}
                      className="btn2 !bg-[#26cc5d] !shadow-[#51d17c] text-white px-4 py-2 rounded  !flex gap-1 items-center "
                    >
                      <Image src={check} width={26} height={26} />{" "}
                      <span>check</span>
                    </button>
                  </>
                )}
              </div>
              {
                !HintBtnPath && <div className="hint flex gap-1 mt-4 mb-2.5 items-center text-xl text-amber-50 cursor-pointer ">
                <Image src={hint2} width={30} height={30} />
                <span onClick={handleHint} disabled={hintCount >= 3}>
                  {" "}
                  Give me hint
                </span>
                {hint && <p className="text-lime-400 text-xl ml-2 ">{hint}</p>}
              </div>
              }
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NewRiddleCard;
