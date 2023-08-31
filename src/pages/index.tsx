import { useEffect, lazy, Suspense } from "react";
import { RouteObject, useRoutes } from "react-router-dom";
import { userInformationURL } from "@reduxStore/url";
import { useAppDispatch } from "@reduxStore/store";
import { IUser } from "@reduxStore/state/types";

/**
 * Lazy loading is the technique of rendering only-needed
 */
const LandingPage = lazy(() => import("@components/landingPage"));
const Home = lazy(() => import("@components/home"));

function App() {
  const home = <Suspense fallback={<>...</>}><Home /></Suspense>;

  const routes: RouteObject[] = [
    {
      path: "/",
      element: <LandingPage />,
    },
    { path: "profile/:id", element: home },
    { path: "posts/:id", element: home },
    { path: "gallery/:id", element: home },
    { path: "toDO/:id", element: home },
    {
      path: "*",
      element: <h1 style={{ textAlign: "center" }}>Page Not Found</h1>,
    },
  ];

  // The useRoutes() hook allows you to define your routes as JavaScript objects
  // instead of <Routes> and <Route> elements. This is really just a style
  // preference for those who prefer to not use JSX for their routes config.
  return useRoutes(routes);
}

function RoutePage() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    try {
      // use try method to avoid Runtime error and Page breaks.

      /**
       * Get users information using fetch method.
       * I don't use axios because we have only one API call.
       * So i go with the default fetch method.
       */

      import("@reduxStore/reducer").then(async (req) => { // dynamic file import
        dispatch(req.updateLoader({
          users: true,
          personalInformation: true
        }));

        let data = await fetch(userInformationURL);

        if (data.status !== 200) throw "Oops! Something went wrong";

        let usersInfo: {
          users: IUser[];
        } = await data.json();

        dispatch(req.updateUsersInformation({ users: usersInfo.users }));
      });
    } catch (e: any) {
      console.warn(e.message || e);
    }
  }, []);

  return <Suspense><App /></Suspense>;
}

export default RoutePage;
