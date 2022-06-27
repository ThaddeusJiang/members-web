import { useState } from "react";
import { Helmet } from "react-helmet";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";

import { yupResolver } from "@hookform/resolvers/yup";

import { t } from "i18next";
import * as yup from "yup";

import { useMembers } from "../../components/MembersCell/MembersCell";
import ProcedureRequestSenderModal from "../../components/Modal/ProcedureRequestSenderModal";
import ResultModal from "../../components/Modal/ResultModal";

const schema = yup
  .object({
    targetMember: yup.string().required(),
    targetDate: yup.string().required(),
  })
  .required();

const ProcedureStartPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // TODO:

  const queryMembers = useMembers();

  let [isOpen, setIsOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const sendRequest = () => {
    setIsOpen(false);
    setIsResultOpen(true);
  };

  const onSubmit = (data) => {
    // TODO: result modal vs result toast
    // toast("Successfully sent a request");
    // eslint-disable-next-line no-console
    console.log(data);
    setIsOpen(true);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="main-container mx-auto  form-control"
      >
        <Helmet>
          <title>{t("start a procedure")}</title>
        </Helmet>
        {/* TODO: dynamic by type */}
        <h2 className="header2 mx-auto mt-4">{t("start a procedure")}</h2>
        <div>
          <div>
            <label htmlFor="targetMember" className="label">
              {t("target member")}
            </label>
            <select
              {...register("targetMember")}
              id="targetMember"
              className="select select-bordered w-full"
            >
              {queryMembers.isLoading ? (
                <option disabled>{t("loading")}</option>
              ) : (
                <>
                  {queryMembers.data?.map((member) => (
                    <option key={member.id} value={member.id}>
                      {member.name}
                    </option>
                  ))}
                </>
              )}
            </select>

            <label htmlFor="targetMember" className="label">
              <span className="text-error label-text-alt">
                {errors.targetMember?.message}
              </span>
            </label>

            <div className="label">
              <div className="label-text-alt">
                {t("if the member isn't existed, you can")}&nbsp;
                <Link
                  className="link link-primary"
                  to="/members/new?procedureId="
                >
                  {t("create member")}
                </Link>
              </div>

              <div className="label-text-alt">
                {t("Do you want to deal multiple members together?")}&nbsp;
                <Link
                  className="link link-primary"
                  to="/procedure_requests?procedureId="
                >
                  {t("here")}
                </Link>
              </div>
            </div>
          </div>

          <div>
            <label htmlFor="targetDate" className="label">
              {t("target date")}
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
        </div>

        <div className="mt-4">
          <button type="submit" className=" btn btn-primary w-full">
            {t("next")}
          </button>
        </div>
      </form>

      <ProcedureRequestSenderModal
        title="Send Procedure Request"
        description="Send a procedure request to a patient"
        isOpen={isOpen}
        onOk={sendRequest}
        onCancel={() => setIsOpen(false)}
        onClose={() => setIsOpen(false)}
      />

      <ResultModal
        title={t("success! sent messages")}
        isOpen={isResultOpen}
        type={"success"}
        onClose={() => setIsResultOpen(false)}
      />
    </>
  );
};

export default ProcedureStartPage;
