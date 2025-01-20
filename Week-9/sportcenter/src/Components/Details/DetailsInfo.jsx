const DetailsInfoItem = [
    {
        title: "Course",
        value: 325,
    },
    {
        title: "Work Out",
        value: 405,
    },
    {
        title: "Working Hour",
        value: 305,
    },
    {
        title: "Happy Client",
        value: 705,
    }

];

function DetailsInfo() {
  return (
    <>
        {DetailsInfoItem.map((item, index) => (
            <div key={index} className="details-info flex flex-col items-center mt-5 lg:mb-5 p-7 bg-white drop-shadow">
                <p className="text-darkBlue text-2xl font-black pb-5">
                    {item.value}
                </p>
                <h6 className="text-2xl font-black">
                   {item.title} 
                </h6>
            </div>
        ))}
    </>
  )
}

export default DetailsInfo