import hero from "../../assets/other/aboutImg.svg";
import { useGlobalState } from "../../store";
import { FaRegCircleCheck } from "react-icons/fa6";

const Features = () => {
  const [about] = useGlobalState("about");
  return (
    <div className="lg:flex justify-between">
      <div className="lg:w-1/2">
        <img src={hero} className="w-full" alt="" />
      </div>
      <div className="w-full lg:w-1/2 py-10 px-5 lg:pl-10 lg:pr-20 space-y-3">
        <h1 className="text-[#111827] text-3xl font-bold md:text-4xl mb-4">
          Features of PayScan
        </h1>
        {about.map((about, i) => (
          <div
            key={i}
            className="flex items-center space-x-3 bg-[#FEFBE8] p-5 rounded-lg hover:scale-105"
          >
            <FaRegCircleCheck className="text-2xl" />
            <p className="text-xl lg:text-2xl">{about.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Features;
