import yogaImg from '../../assets/yoga.jpg';
import groupImg from '../../assets/group.webp';
import soloImg from '../../assets/solo.jpg';
import stretImg from '../../assets/stret.webp';

function ClassesInfo({ activeClass }) {
  return (
    <>
      <div
        className={`yoga grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-textGray ${
          activeClass === "yoga" ? "" : "hidden"
        }`}
      >
        <div>
          <h3 className="text-2xl font-bold mb-5">Why are your Yoga?</h3>
          <p className="font-semibold mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            inventore molestias accusamus dolore, harum rerum rem at laboriosam
            labore dolorum voluptatem, quo placeat quod maiores facilis, itaque
            nesciunt reiciendis? Adipisci?
          </p>
          <h3 className="text-2xl font-bold mb-5">When comes Yoga Your Time.</h3>
          <ul>
            <li className="font-semibold mb-5">
              Saturday - Sunday: 8:00am -10:00am
            </li>
            <li className="font-semibold mb-5">
              Monday - Tuesday: 10:00am 12:00pm
            </li>
            <li className="font-semibold mb-5">
              Wednesday - Friday: 3:00pm - 6:00pm
            </li>
          </ul>
        </div>
        <div>
          <img src={yogaImg} alt="Yoga" />
        </div>
      </div>

      <div
        className={`group grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-textGray ${
          activeClass === "group" ? "" : "hidden"
        }`}
      >
        <div>
          <h3 className="text-2xl font-bold mb-5">Why are your Group?</h3>
          <p className="font-semibold mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            inventore molestias accusamus dolore, harum rerum rem at laboriosam
            labore dolorum voluptatem, quo placeat quod maiores facilis, itaque
            nesciunt reiciendis? Adipisci?
          </p>
          <h3 className="text-2xl font-bold mb-5">
            When comes Group Your Time.
          </h3>
          <ul>
            <li className="font-semibold mb-5">
              Saturday - Sunday: 8:00am -10:00am
            </li>
            <li className="font-semibold mb-5">
              Monday - Tuesday: 10:00am 12:00pm
            </li>
            <li className="font-semibold mb-5">
              Wednesday - Friday: 3:00pm - 6:00pm
            </li>
          </ul>
        </div>
        <div>
          <img src={groupImg} alt="Group" />
        </div>
      </div>

      <div
        className={`solo grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-textGray ${
          activeClass === "solo" ? "" : "hidden"
        }`}
      >
        <div>
          <h3 className="text-2xl font-bold mb-5">Why are your Solo?</h3>
          <p className="font-semibold mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            inventore molestias accusamus dolore, harum rerum rem at laboriosam
            labore dolorum voluptatem, quo placeat quod maiores facilis, itaque
            nesciunt reiciendis? Adipisci?
          </p>
          <h3 className="text-2xl font-bold mb-5">
            When comes Group Your Time.
          </h3>
          <ul>
            <li className="font-semibold mb-5">
              Saturday - Sunday: 8:00am -10:00am
            </li>
            <li className="font-semibold mb-5">
              Monday - Tuesday: 10:00am 12:00pm
            </li>
            <li className="font-semibold mb-5">
              Wednesday - Friday: 3:00pm - 6:00pm
            </li>
          </ul>
        </div>
        <div>
          <img src={soloImg} alt="Solo" />
        </div>
      </div>

      <div
        className={`stretch grid grid-cols-1 md:grid-cols-2 gap-4 mt-6 text-textGray ${
          activeClass === "stretch" ? "" : "hidden"
        }`}
      >
        <div>
          <h3 className="text-2xl font-bold mb-5">Why are your Stretching?</h3>
          <p className="font-semibold mb-5">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Id
            inventore molestias accusamus dolore, harum rerum rem at laboriosam
            labore dolorum voluptatem, quo placeat quod maiores facilis, itaque
            nesciunt reiciendis? Adipisci?
          </p>
          <h3 className="text-2xl font-bold mb-5">
            When comes Group Your Time.
          </h3>
          <ul>
            <li className="font-semibold mb-5">
              Saturday - Sunday: 8:00am -10:00am
            </li>
            <li className="font-semibold mb-5">
              Monday - Tuesday: 10:00am 12:00pm
            </li>
            <li className="font-semibold mb-5">
              Wednesday - Friday: 3:00pm - 6:00pm
            </li>
          </ul>
        </div>
        <div>
          <img src={stretImg} alt="Stretching" />
        </div>
      </div>
    </>
  );
}

export default ClassesInfo;
