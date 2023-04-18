import hero from "../../assets/aboutImg.svg"
import icon from "../../assets/goodIcon.svg"
import { useGlobalState } from "../../store";

const AboutHero = () => {
  const [about] = useGlobalState("about");
  return (
    <div className="md:flex justify-between">
      <div className="md:w-1/2">
        <img src={hero}  className="w-full" alt="" />
      </div>
      <div  className="w-full md:w-1/2 py-10 px-5 md:pl-10 md:py-10 md:pr-20 space-y-3">
        <h1 className="text-[#111827] text-3xl font-bold md:text-4xl mb-4">Features of purSe</h1>
        {about.map((about, i) => (
        <div key={i} className="flex items-center space-x-3 bg-[#FEF7C3] p-5 rounded-lg">
          <img src={icon} className="w-8" alt="" />
          <p className="text-xl md:text-2xl">{about.text}</p>
        </div>
         ))}
      </div>
    </div>
  );
};
export default AboutHero;
