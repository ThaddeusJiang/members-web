import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

import { t } from "i18next";

const MemberNewPage = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    // eslint-disable-next-line no-console
    console.log(data);
    history.push("/procedure_requests");
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form-control mx-auto max-w-screen-md px-4"
    >
      <h2 className="header2 mx-auto">{t("create a member")}</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="firstName" className="label">
            First Name
          </label>
          <input
            {...register("firstName")}
            type="text"
            id="firstName"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="label">
            Last Name
          </label>
          <input
            {...register("lastName")}
            type="text"
            id="lastName"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label htmlFor="firstName_kana" className="label">
            First Name (Kana)
          </label>
          <input
            {...register("firstName_kana")}
            type="text"
            id="firstName_kana"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="lastName_kana" className="label">
            Last Name (Kana)
          </label>
          <input
            {...register("lastName_kana")}
            type="text"
            id="lastName_kana"
            className="input input-bordered w-full"
          />
        </div>

        <div className=" col-span-2">
          <label htmlFor="birthday" className="label">
            Birthday
          </label>
          <input
            {...register("birthday")}
            type="date"
            id="birthday"
            className="input input-bordered w-full"
          />
        </div>

        <div className=" col-span-2">
          <p className="label">Gender</p>
          <label htmlFor="male" className="label cursor-pointer justify-start ">
            <input
              {...register("gender")}
              type="radio"
              id="male"
              value="male"
              name="gender"
              className="radio"
            />
            <span className=" ml-2">Male</span>
          </label>

          <label
            htmlFor="female"
            className="label cursor-pointer justify-start "
          >
            <input
              {...register("gender")}
              type="radio"
              id="female"
              value="female"
              name="gender"
              className="radio"
            />
            <span className=" ml-2 ">Female</span>
          </label>
        </div>

        <div className=" col-span-2">
          <label htmlFor="mail" className="label">
            Mail
          </label>
          <input
            {...register("mail")}
            type="email"
            id="mail"
            className="input input-bordered w-full"
          />
        </div>
      </div>
      <div className="mt-4">
        <button type="submit" className="btn btn-primary w-full">
          Submit
        </button>
      </div>
    </form>
  );
};

export default MemberNewPage;
