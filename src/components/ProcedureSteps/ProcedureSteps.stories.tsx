import ProcedureSteps from "./ProcedureSteps";
import { completed, first, second } from "./ProcedureSteps.mock";

export const firstStep = () => {
  const { steps } = first();
  return <ProcedureSteps steps={steps} />;
};

export const secondStep = () => {
  const { steps } = second();
  return <ProcedureSteps steps={steps} />;
};

export const completedSteps = () => {
  const { steps } = completed();
  return <ProcedureSteps steps={steps} />;
};

export default { title: "components/ProcedureSteps" };
