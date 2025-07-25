

// async function fetchRiddleData(category2) {
//     let data = await fetch(`https://riddles-api-eight.vercel.app/${category2}`)
//     data=await data.json();
//     return data;
// }
import NewRiddleCard from "@/components/NewRiddleCard";
import RiddleCard3 from "@/components/RiddleCard3";
const page = async({params}) => {
    let {category2}=params;
    // let riddleData=await fetchRiddleData(category2)
  return (
    <>
    <div className=" flex  ">
      <NewRiddleCard category={category2}/>
      {/* <RiddleCard3 category={category2}/> */}
    </div>
    </>
    // <div>
    //     <div className="text-4xl text-amber-50 font-bold">{category2}</div>
    //     <h1 className="text-2xl text-amber-100 font-semibold">{riddleData.riddle}</h1>
    //     <h1 className=" text-xl text-amber-100 font-semibold hidden">{riddleData.answer}</h1>
    // </div>
  )
}

export default page