import { useState } from "react";
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from "react-icons/ai";

const Accordion = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
  <div className="border w-full border-gray-200 rounded-md shadow-sm hover:scale-105 mb-4">
      <div
        className="flex justify-between items-center cursor-pointer py-3 px-4"
        onClick={toggleAccordion}
      >
        <h3 className="text-lg font-medium">{title}</h3>
        {isOpen ? (
          <AiOutlineMinusCircle className="text-gray-600" />
        ) : (
          <AiOutlinePlusCircle className="text-gray-600" />
        )}
      </div>
      {isOpen && (
        <div className="border-t border-gray-200 py-3 px-4">{children}</div>
      )}
    </div>
  );
};

export default Accordion;
