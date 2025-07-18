
async function fetchRiddleData() {
  let data = await fetch("https://api.api-ninjas.com/v1/riddles", {
    method: "GET",
    headers: { "X-Api-Key": "pY2sWL+nvngbXokOdpA3jQ==X1vgxZultCQ4DxDP" },
  });
  data = await data.json();
  return data;
}

const RiddleCard = async () => {
  let riddleData = await fetchRiddleData();

  return (
    <>
      <div class="relative flex w-80 flex-col rounded-xl bg-[#d1e7e0] bg-clip-border text-gray-700 shadow-md">
        {riddleData.map((item, index) => {
          return (
            <>
              <div class="relative flex justify-center items-center text-5xl mx-4 mt-6 h-32 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
                <h1>Riddles </h1>
              </div>
              <div class="p-6">
                <h5
                  key={index}
                  class="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased"
                >
                  {item.title}
                </h5>
                <p class="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                  {item.question}
                </p>
              </div>
              <div class="p-6 pt-0 flex justify-center">
                <button
                  data-ripple-light="true"
                  type="button"
                  class="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                >
                  Show Answer
                </button>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
};

export default RiddleCard;
