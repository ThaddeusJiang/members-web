import { useState } from "react";

import { t } from "i18next";

import ProcedureRequestSenderModal from "../../components/Modal/ProcedureRequestSenderModal";
import ResultModal from "../../components/Modal/ResultModal";
import ProcedureRequestsCell from "../../components/ProcedureRequestsCell/ProcedureRequestsCell";

const ProcedureRequestsPage = () => {
  let [isOpen, setIsOpen] = useState(false);
  const [isResultOpen, setIsResultOpen] = useState(false);

  const sendRequest = () => {
    setIsOpen(false);
    setIsResultOpen(true);
  };

  return (
    <div className="main-container  mx-auto">
      <h2 className="text-2xl label">{t("procedure requests")}</h2>

      <button onClick={() => setIsOpen(true)} className=" btn btn-primary">
        {t("send request")}
      </button>

      <div className="mt-4">
        <ProcedureRequestsCell />
      </div>

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
    </div>
  );
};

export default ProcedureRequestsPage;
