//ignore this one. This is for personal research.

import About from "./About";

const main = () => {
  return (
    <>
      <About />
    </>
  );
};

// lazy loading instead of regular import statements, we use this approach.

const Admin = React.lazy(() => import("./admin.js"));
const Customer = React.lazy(() => import("./customer.js"));

export default (props) => {
  <React.Suspense fallback={<p>Loading page...</p>}>
    <Route path="/" exact>
      <Admin />
    </Route>
    <Route path="/customer">
      <Customer />
    </Route>
  </React.Suspense>;
};
