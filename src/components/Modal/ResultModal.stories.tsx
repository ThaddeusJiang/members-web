import { useState } from "react";

import ResultModal from "./ResultModal";

export const Success = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="btn">
        toggle
      </button>
      <ResultModal
        type="success"
        title={"Success! sent messages"}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const Error = () => {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="btn">
        toggle
      </button>
      <ResultModal
        type="error"
        title={"Error! sent messages"}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export const Warning = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <>
      <button onClick={() => setIsOpen(!isOpen)} className="btn">
        toggle
      </button>
      <ResultModal
        type="warning"
        title={"Warning! sent messages"}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default { title: "components/Modal/ResultModal" };
