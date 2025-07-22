
import { use } from "react"

async function fetchRiddleData(category2) {
    let data = await fetch(`https://riddles-api-eight.vercel.app/${category2}`)
    data=await data.json();
    return data;
}
const page = async({params}) => {
    let {category2}=use(params);
        let riddleData=await fetchRiddleData(category2)
  return (
    <div>
        <div>{params.category2}</div>
        <h1>{riddleData.riddle}</h1>
        <h1>{riddleData.answer}</h1>
    </div>
  )
}

export default page