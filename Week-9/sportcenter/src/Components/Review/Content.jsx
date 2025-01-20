import client1 from '../../assets/client1.jpg'
import client2 from '../../assets/client2.jpg'

function Content() {
  return (
    <div className="review-content grid grid-cols-1 md:grid-cols-2 gap-6 mb-20 md:mb-40">
          <div>
            <div className="flex flex-row items-center gap-4">
              <img src={client1} alt="" className="rounded-full w-12 h-12 ml-5"/>
              <div>
                <p className="text-lg font-bold py-1">Diet Expert</p>
                <p className="text-md py-1">CEO</p>
              </div>
            </div>
            <div className="review-message bg-darkBlue p-3 m-4 relative">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente eius aperiam ea provident, minus illo obcaecati perferendis est repellendus. Consequatur nisi a iusto illum nemo. Cupiditate odio sed eveniet?</p>
              <div className="shadow-corner-right absolute bg-shadowBlue"></div>
              <div className="shadow-corner-left absolute bg-shadowBlue"></div>
            </div>
          </div>
          <div>
            <div className="flex flex-row items-center gap-4">
              <img src={client2} alt="" className="rounded-full w-12 h-12 ml-5"/>
              <div>
                <p className="text-lg font-bold py-1">Cardio Trainer</p>
                <p className="text-md py-1">CEO</p>
              </div>
            </div>
            <div className="review-message bg-darkBlue p-3 m-4 relative">
              <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam sapiente eius aperiam ea provident, minus illo obcaecati perferendis est repellendus. Consequatur nisi a iusto illum nemo. Cupiditate odio sed eveniet?</p>
              <div className="shadow-corner-right absolute bg-shadowBlue"></div>
              <div className="shadow-corner-left absolute bg-shadowBlue"></div>
            </div>
          </div>
    </div>
  )
}

export default Content