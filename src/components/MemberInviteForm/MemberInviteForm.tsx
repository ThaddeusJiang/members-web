import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { t } from "i18next";
import * as yup from "yup";

const schema = yup
  .object({
    email: yup.string().required().email(),
    targetDate: yup.string().required(),
  })
  .required();

type Props = {
  onSubmit?: () => void;
  onCancel?: () => void;
};

const MemberInviteForm = ({ onSubmit, onCancel }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="w-full ">
      <div>
        <label htmlFor="email" className="label">
          <span className=" label-text">Email</span>
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

        <label htmlFor="targetDate" className="label">
          <span className="text-error label-text-alt">
            {errors.targetDate?.message}
          </span>
        </label>
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
  );
};

export default MemberInviteForm;
