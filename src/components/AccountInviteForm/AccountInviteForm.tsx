import { useForm } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";

import { t } from "i18next";
import * as yup from "yup";

const schema = yup
  .object({
    password: yup.string().required().min(8),
    passwordConfirm: yup
      .string()
      .required()
      .oneOf([yup.ref("password")]),
  })
  .required();

type Props = {
  onSubmit?: (values: { password: string }) => void;
};

const AccountInviteForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className=" main-container mx-auto "
    >
      <div>
        <label htmlFor="password" className="label">
          <span className=" label-text">{t("password")}</span>
        </label>

        <input
          {...register("password")}
          type="password"
          id="password"
          className="input input-bordered w-full"
          autoComplete="off"
        />

        <label htmlFor="password" className="label">
          <span className="text-error label-text-alt">
            {errors.password?.message}
          </span>
        </label>
      </div>

      <div>
        <label htmlFor="passwordConfirm" className="label">
          <span className=" label-text">{t("password (confirm)")}</span>
        </label>

        <input
          {...register("passwordConfirm")}
          type="password"
          id="passwordConfirm"
          className="input input-bordered w-full"
          autoComplete="off"
        />

        <label htmlFor="passwordConfirm" className="label">
          <span className="text-error label-text-alt">
            {errors.passwordConfirm?.message}
          </span>
        </label>
      </div>

      <div className="mt-4 flex justify-end">
        <button type="submit" className="w-full btn  btn-primary">
          {t("register")}
        </button>
      </div>
    </form>
  );
};

export default AccountInviteForm;
