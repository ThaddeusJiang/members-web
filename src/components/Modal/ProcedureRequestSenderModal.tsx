import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

import { yupResolver } from "@hookform/resolvers/yup";

import { t } from "i18next";
import * as yup from "yup";

import Modal, { ModalProps } from "./Modal";

const schema = yup
  .object({
    email: yup.string().required().email(),
    targetDate: yup.string().required(),
  })
  .required();

type Props = ModalProps & {};

const ProcedureRequestSenderModal = ({
  title,
  description,
  isOpen,
  onOk,
  onCancel,
  onClose,
}: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    // TODO: result modal vs result toast
    // toast("Successfully sent a request");
    // eslint-disable-next-line no-console
    console.log(data);
    onOk();
  };

  return (
    <Modal
      title={title}
      description={description}
      isOpen={isOpen}
      onOk={onOk}
      onCancel={onCancel}
      onClose={onClose}
    >
      <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
        <div>
          <label htmlFor="email" className="label">
            <span className=" label-text">
              Email
              {/* TODO:  */}
              {/* <span className=" badge  badge-error">{t("required")}</span> */}
            </span>
          </label>

          <input
            {...register("email")}
            type="email"
            id="email"
            className="input input-bordered w-full"
            autoComplete="off"
          />

          <label htmlFor="email" className="label">
            <span className="text-error label-text-alt">
              {errors.email?.message}
            </span>
          </label>
        </div>

        <div>
          <label htmlFor="targetDate" className="label">
            Target Date
          </label>
          <input
            {...register("targetDate")}
            type="date"
            id="targetDate"
            className="input input-bordered w-full"
          />
        </div>

        <div className="mt-4 flex justify-end">
          <button onClick={onCancel} className="btn btn-outline">
            {t("cancel")}
          </button>

          <button type="submit" className="ml-4 btn  btn-primary">
            {t("submit")}
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ProcedureRequestSenderModal;
