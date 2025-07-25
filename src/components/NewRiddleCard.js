"use client";
import Link from "next/link";
import "./WelcomeCard.css";
import "./NewRiddleCard.css";
import { useState, useEffect } from "react";

const NewRiddleCard = ({ category }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [riddle, setRiddle] = useState("");
  useEffect(() => {
    console.log(category);

      const fetchRiddle = async (category) => {
        try {
          setIsLoading(true);
          const res = await fetch(
            `https://riddles-api-eight.vercel.app/${category}`
          );
          const data = await res.json();
          setRiddle(data);
          console.log(data);
        } catch (err) {
          console.error("Failed to fetch riddle:", err);
        } finally {
          setIsLoading(false);
        }
      };

      fetchRiddle(category);

  }, []);
  return (
    <>
      <div className="box !absolute w-full ">
        <div className="container2 flex justify-center items-center !w-full">
          <div className="clock flex flex-col items-center ">
            <div className="welcome">
              <h3 className="!text-[2rem] font-semibold">Quetion</h3>
            </div>
            <div className="input-div w-full flex flex-col items-start">
              <p className="mb-2">{riddle.riddle}</p>
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

export default NewRiddleCard;
