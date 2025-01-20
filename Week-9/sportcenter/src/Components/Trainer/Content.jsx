import trainer1 from '../../assets/trainer1.jpg'
import trainer2 from '../../assets/trainer2.jpg'
import trainer3 from '../../assets/trainer3.jpg'

function Content() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        <div className="trainer-card mx-auto">
            <div className="bg-cover-clip bg-darkBlue"></div>
            <img src={trainer1} alt="" />
            <div className="trainer-info bg-darkBlue flex flex-col items-center">
              <p className="font-bold text-lg p-2">Jennifer Lawrence</p>
              <p className="font-semibold text-md p-2">Yoga Trainer</p>
            </div>
          </div>
          <div className="trainer-card mx-auto">
            <div className="bg-cover-clip bg-darkBlue"></div>
            <img src={trainer2} alt="" />
            <div className="trainer-info bg-darkBlue flex flex-col items-center">
              <p className="font-bold text-lg p-2">David Salah</p>
              <p className="font-semibold text-md p-2">Fitness Trainer</p>
            </div>
          </div>
          <div className="trainer-card mx-auto">
            <div className="bg-cover-clip bg-darkBlue"></div>
            <img src={trainer3} alt="" />
            <div className="trainer-info bg-darkBlue flex flex-col items-center">
              <p className="font-bold text-lg p-2">Jane Doe</p>
              <p className="font-semibold text-md p-2">Cardio Trainer</p>
            </div>
          </div>
    </div>
  )
}

export default Content