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
      <div className="container">
        <h1> RiddleCard</h1>
        <div className="container">
          {riddleData.map((item, index) => {
            return (
              <>
                <h2 key={index} className="font-bold">
                  Title :{item.title}
                </h2>
                <h3 className="semi-bold">Riddle : {item.question}</h3>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default RiddleCard;
