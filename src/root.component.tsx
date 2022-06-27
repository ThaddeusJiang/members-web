import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import MainLayout from "./components/MainLayout/MainLayout";
import "./configs/axios-config";
import "./configs/i18n-config";
import AccountInvitePage from "./pages/AccountInvitePage/AccountInvitePage";
import MemberNewPage from "./pages/MemberNewPage/MemberNewPage";
import NotificationsPage from "./pages/NotificationsPage/NotificationsPage";
import ProcedureRequestsPage from "./pages/ProcedureRequestsPage/ProcedureRequestsPage";
import ProcedureStartPage from "./pages/ProcedureStartPage/ProcedureStartPage";
import TodoPage from "./pages/TodoPage/TodoPage";
import TodosPage from "./pages/TodosPage/TodosPage";
import TopPage from "./pages/TopPage/TopPage";

const queryClient = new QueryClient();

export default function Root(props) {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={TopPage} />
              <Route exact path="/todos" component={TodosPage} />
              <Route path="/todos/:id" component={TodoPage} />

              <Route
                exact
                path="/procedures/new"
                component={ProcedureStartPage}
              />
              <Route
                exact
                path="/procedures/:id"
                component={ProcedureStartPage}
              />
              <Route
                exact
                path="/procedure_requests"
                component={ProcedureRequestsPage}
              />

              <Route exact path="/members/new" component={MemberNewPage} />
              <Route
                exact
                path="/accounts/invite-accept"
                component={AccountInvitePage}
              />

              <Route
                exact
                path="/notifications"
                component={NotificationsPage}
              />
              <Route path="*">
                <p>TODO: 404, not found</p>
              </Route>
            </Switch>
          </BrowserRouter>
        </MainLayout>
      </QueryClientProvider>

      <Toaster />
    </>
  );
}
