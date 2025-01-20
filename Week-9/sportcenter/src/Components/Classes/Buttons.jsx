function Buttons({ activeClass, setActiveClass }) {
  const buttons = [
    { id: "yoga", label: "Yoga" },
    { id: "group", label: "Group" },
    { id: "solo", label: "Solo" },
    { id: "stretch", label: "Stretching" },
  ];

  return (
    <div className="classes-btns flex justify-around">
      {buttons.map((button) => (
        <button
          key={button.id}
          id={`${button.id}-btn`}
          className={`text-white inline-block text-xl md:text-2xl py-2 px-3 lg:px-6 my-5 md:my-20 font-semibold rounded ${
            activeClass === button.id
              ? "bg-orange"
              : "bg-darkBlue hover:bg-orange"
          }`}
          onClick={() => setActiveClass(button.id)}
        >
          {button.label}
        </button>
      ))}
    </div>
  );
}

export default Buttons;
