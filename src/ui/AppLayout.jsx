import { Outlet, useNavigation } from "react-router-dom";

import Header from "./Header";
import Footer from "./Footer";
import Loader from "../components/Loader";

function AppLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <div className="grid h-screen grid-rows-[auto_1fr_auto]">
      {isLoading && <Loader />}
      <Header />
      <main className=" overflow-y-auto bg-stone-50 dark:bg-slate-800">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default AppLayout;
