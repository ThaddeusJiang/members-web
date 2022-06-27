import { SparklesIcon } from "@heroicons/react/outline";

import { t } from "i18next";

import AccountInviteForm from "../../components/AccountInviteForm/AccountInviteForm";

const AccountInvitePage = () => {
  return (
    <div className="main-container mx-auto">
      <h1 className="header2">{t("account invite")}</h1>

      <div className="alert">
        <div>
          <SparklesIcon className="h-5 w-5 text-current" />
          <span>
            {t("welcome to the company", {
              companyFullName: "Jiang Inc.",
            })}
          </span>
        </div>
      </div>

      <AccountInviteForm />
    </div>
  );
};

export default AccountInvitePage;
