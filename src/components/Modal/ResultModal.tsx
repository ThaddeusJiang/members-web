import {
  BadgeCheckIcon,
  ExclamationIcon,
  XCircleIcon,
} from "@heroicons/react/solid";

import Modal, { ModalProps } from "./Modal";

type Props = ModalProps & {
  type: "success" | "error" | "warning";
};

const ResultModal = ({
  title,
  description,
  isOpen,
  onOk,
  onCancel,
  onClose,
  type,
}: Props) => {
  return (
    <div className=" w-80 ">
      <Modal
        title={""}
        description={description}
        isOpen={isOpen}
        onOk={onOk}
        onCancel={onCancel}
        onClose={onClose}
      >
        <div className="card-body items-center text-center">
          {type === "success" && (
            <BadgeCheckIcon className=" h-40 w-60 text-success" />
          )}
          {type === "error" && (
            <XCircleIcon className=" h-40 w-60 text-error" />
          )}
          {type === "warning" && (
            <ExclamationIcon className=" h-40 w-60 text-warning" />
          )}
          <h2 className="card-title" aria-labelledby={title}>
            {title}
          </h2>
        </div>
      </Modal>
    </div>
  );
};

export default ResultModal;
