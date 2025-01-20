import HeroBtns from "./HeroBtns"

function HeroContent() {
  return (
    <>
        <div className="hero-content absolute bottom-5 md:bottom-10">
            <h1 className="inline-block rounded text-white bg-darkBlue font-bold py-0.5 px-2 md:text-2xl">
                POWERFULL
            </h1>
            <h3 className="font-extrabold text-5xl md:text-7xl xl:text-8xl w-[23rem] md:w-[35rem] text-white">
                Group Practice with Trainer
            </h3>
            <p className="md:text-xl xl:text-3xl md:my-6 p-2 text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corporis necessitatibus, laudantium ea inventore similique quod dolor quis eum consequuntur ut. Laborum placeat assumenda maxime consequuntur at alias, ab libero distinctio?
            </p>
            <HeroBtns />
        </div>
    </>
  )
}

export default HeroContent