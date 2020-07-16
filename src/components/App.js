import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const AsyncUserSignUpPage = lazy(() =>
  import(
    "./userMobile/userSignUpPage/UserSignUpPage.js" /* webpackChunkName: "user-sign-up-page" */
  )
);
const AsyncUserCreateAccountPage = lazy(() =>
  import(
    "./userMobile/UserCreateAccountPage/UserCreateAccountPage.js" /* webpackChunkName: "user-create-account-page" */
  )
);
const AsyncUserChoosePlan = lazy(() =>
  import(
    "./userMobile/userChoosePlan/UserChoosePlan.js" /* webpackChunkName: "user-create-account-page" */
  )
);
const AsyncUserPaymentPage = lazy(() =>
  import(
    "./userMobile/userPaymentPage/UserPaymentPage.js" /* webpackChunkName: "user-payment-page" */
  )
);
const AsyncUserPaymentPageCard = lazy(() =>
  import(
    "./userMobile/userPaymentPageCard/userPaymentPageCard.js" /* webpackChunkName:  "user-payment-page-card" */
  )
);
const AsyncUserThankYouPage = lazy(() =>
  import(
    "./userMobile/userThankYouPage/UserThankYouPage.js" /* webpackChunkName:  "user-thank you page" */
  )
);
const AsyncUserDesktopSignUp = lazy(() =>
  import(
    "./userDesktop/userDesktopSignUp/UserDesktopSignUp.js" /* webpackChunkName:  "user desktop sign up" */
  )
);
const AsyncUserDesktopCreateAccount = lazy(() =>
  import(
    "./userDesktop/userDesktopCreateAccount/UserDesktopCreateAccount.js" /* webpackChunkName:  "user desktop create account" */
  )
);
const AsyncUserDesktopChoosePlan = lazy(() =>
  import(
    "./userDesktop/userDesktopChoosePlan/UserDesktopChoosePlan.js" /* webpackChunkName:  "user desktop choose plan" */
  )
);
const AsyncUserDesktopPaymentPage = lazy(() =>
  import(
    "./userDesktop/userDesktopPaymentPage/UserDesktopPaymentPage.js" /* webpackChunkName:  "user desktop payment page" */
  )
);
const AsyncUserDesktopPaymentCard = lazy(() =>
  import(
    "./userDesktop/userDesktopPaymentCard/UserDesktopPaymentCard.js" /* webpackChunkName:  "user desktop payment card" */
  )
);
const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={AsyncUserSignUpPage} />
          <Route
            path="/userCreateAccountPage"
            component={AsyncUserCreateAccountPage}
          />
          <Route path="/userChoosePlan" component={AsyncUserChoosePlan} />
          <Route path="/UserPaymentPage" component={AsyncUserPaymentPage} />
          <Route
            path="/userPaymentPageCard"
            component={AsyncUserPaymentPageCard}
          />
          <Route path="/userThankYouPage" component={AsyncUserThankYouPage} />
          <Route path="/userDesktopSignUp" component={AsyncUserDesktopSignUp} />
          <Route
            path="/userDesktopCreateAccount"
            component={AsyncUserDesktopCreateAccount}
          />
          <Route
            path="/userDesktopPaymentPage"
            component={AsyncUserDesktopPaymentPage}
          />
          <Route
            path="/UserDesktopPaymentCard"
            component={AsyncUserDesktopPaymentCard}
          />
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
