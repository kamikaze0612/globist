import { RouterProvider, createBrowserRouter } from "react-router-dom";

import AppLayout from "./ui/AppLayout";
import HomePage from "./ui/HomePage";
import Countries, {
  loader as countriesLoader,
} from "./features/countries/Countries";
import Country, { loader as countryLoader } from "./features/countries/Country";
import { CountriesProvider } from "./store";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <HomePage />,
        },
        {
          path: "/country/:countryName",
          element: <Country />,
          loader: countryLoader,
        },
        {
          path: "/countries",
          element: <Countries />,
          loader: countriesLoader,
        },
      ],
    },
  ]);

  return (
    <CountriesProvider>
      <RouterProvider router={router} />
    </CountriesProvider>
  );
}

export default App;
