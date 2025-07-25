import Link from "next/link";
import "./style.css";

const RiddlesCategory = () => {
  return (
    <>
      <div className="container2 mx-auto w-[75%] flex ">
        <div class="w-full p-4 bg-style border rounded-4xl shadow-sm sm:p-6  ">
          <h5 class="mb-3 text-base font-semibold text-gray-900 md:text-xl dark:text-white">
            RIDDLE Category
          </h5>
          <div className="flex gap-4 ">
            <ul class="my-4 w-full space-y-3">
              <li className="science-bg flex justify-center items-center rounded-2xl w-full h-[120px]">
                <Link href="/RiddlesCategory/science" className="back-drop flex justify-center items-center">
                  <span class="whitespace-nowrap">
                    Science
                  </span>
                </Link>
              </li>
              <li className="math-bg flex justify-center items-center rounded-2xl w-full h-[120px]">
              <Link href="/RiddlesCategory/math" className="back-drop flex justify-center items-center">
                  <span class=" whitespace-nowrap">
                    Math
                  </span>
                </Link>
              </li>
              <li className="logic-bg flex justify-center items-center rounded-2xl w-full h-[120px]">
                 <Link href="/RiddlesCategory/logic" className="back-drop flex justify-center items-center">
                  <span class=" whitespace-nowrap">
                    Logic
                  </span>
                 </Link>
              </li>
            </ul>
            <ul class="my-4 w-full space-y-3">
              <li className="mystery-bg flex justify-center items-center rounded-2xl w-full h-[120px]">
                 <Link href="/RiddlesCategory/mystery" className="back-drop flex justify-center items-center">
                  <span class=" whitespace-nowrap">
                    Mystery
                  </span>
                </Link>
              </li>
              <li className="Who-bg flex justify-center items-center rounded-2xl w-full h-[120px]">
                <Link href="/RiddlesCategory/who-am-i" className="back-drop flex justify-center items-center">
                  <span class=" whitespace-nowrap">
                    Who Am I ?
                  </span>
                </Link>
              </li>
              <li className="funny-bg flex justify-center items-center rounded-2xl w-full h-[120px]">
                 <Link href="/RiddlesCategory/who-am-i" className="back-drop flex justify-center items-center">
                  <span class=" whitespace-nowrap">
                   Funny
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default RiddlesCategory;
