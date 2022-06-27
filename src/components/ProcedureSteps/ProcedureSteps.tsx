import classNames from "classnames";

type Props = {
  steps: Step[];
};

const ProcedureSteps = ({ steps }: Props) => {
  return (
    <ul className="steps max-w-screen-md ">
      {steps.map((step) => (
        <li
          key={step.id}
          data-content={step.icon}
          className={classNames("step", {
            "step-info": step.state === "doing",
            "step-success	": step.state === "done",
          })}
        >
          {step.title}
        </li>
      ))}
    </ul>
  );
};

export default ProcedureSteps;
