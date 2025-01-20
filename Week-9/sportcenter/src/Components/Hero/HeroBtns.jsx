function HeroBtns() {
  return (
    <div className="hero-btns flex flex-col sm:w-full md:flex-row">
        <button id="btn-sign-up" className="my-1 md:m-5 bg-darkBlue text-white text-2xl rounded py-1 px-2 font-semibold w-full md:w-auto">
            Sign Up
        </button>
        <button id="btn-details" className="my-1 md:m-5 bg-transparent text-2xl rounded py-1 px-2 font-semibold w-full md:w-auto text-white">
            Details
        </button>
    </div>
  )
}

export default HeroBtns