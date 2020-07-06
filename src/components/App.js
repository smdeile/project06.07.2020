import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

const AsyncUserSignUpPage = lazy(() =>
  import(
    "./userMobile/UserSignUpPage.js" /* webpackChunkName: "user-sign-up-page" */
  )
);
const AsyncUserCreateAccountPage = lazy(() =>
  import(
    "./userMobile/UserCreateAccountPage.js" /* webpackChunkName: "user-create-account-page" */
  )
);
const App = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route path="/" exact component={AsyncUserSignUpPage} />
          <Route path="/login" component={AsyncUserCreateAccountPage} />
        </Switch>
      </Suspense>
    </div>
  );
};
export default App;
