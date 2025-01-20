import purchase1 from "../../assets/purchase1.jpg";
import purchase2 from "../../assets/purchase2.jpg";
import purchase3 from "../../assets/purchase3.jpg";
import purchase4 from "../../assets/purchase4.jpg";

function Content() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-10">
      <div className="rounded-lg shadow-xl flex flex-col justify-between items-center">
        <img src={purchase1} alt="" className="rounded-lg" />
        <h6 className="font-bold">Kettlebell / 5kg</h6>
        <p className="font-bold">
          <span className="line-through">89.99$ </span>/ 59.99$
        </p>
        <div className="add-to-card flex flex-row items-center mx-7">
          <i className="fa-regular fa-cart-shopping fa-xs"></i>
          <p className="font-bold px-7 py-2">Add to Cart</p>
        </div>
      </div>
      <div className="rounded-lg shadow-xl flex flex-col justify-between items-center">
        <img src={purchase2} alt="" className="rounded-lg" />
        <h6 className="font-bold">Treadmill</h6>
        <p className="font-bold">
          <span className="line-through">899.99$ </span>/ 599.99$
        </p>
        <div className="add-to-card flex flex-row items-center mx-7">
          <i className="fa-regular fa-cart-shopping fa-xs"></i>
          <p className="font-bold px-7 py-2">Add to Cart</p>
        </div>
      </div>
      <div className="rounded-lg shadow-xl flex flex-col justify-between items-center">
        <img src={purchase3} alt="" className="rounded-lg" />
        <h6 className="font-bold">Adjustable Dumbbell</h6>
        <p className="font-bold">
          <span className="line-through">89.99$ </span>/ 59.99$
        </p>
        <div className="add-to-card flex flex-row items-center mx-7">
          <i className="fa-regular fa-cart-shopping fa-xs"></i>
          <p className="font-bold px-7 py-2">Add to Cart</p>
        </div>
      </div>
      <div className="rounded-lg shadow-xl flex flex-col justify-between items-center">
        <img src={purchase4} alt="" className="rounded-lg" />
        Name
        <h6 className="font-bold">Kettlebell / 3kg</h6>
        <p className="font-bold">
          <span className="line-through">89.99$ </span>/59.99$
        </p>
        <div className="add-to-card flex flex-row items-center mx-7">
          <i className="fa-regular fa-cart-shopping fa-xs"></i>
          <p className="font-bold px-7 py-2">Add to Cart</p>
        </div>
      </div>
    </div>
  );
}

export default Content;
