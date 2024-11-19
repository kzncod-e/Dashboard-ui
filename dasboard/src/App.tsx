import SideBar from "./components/SideBar";
import TopBar from "./components/TopBar";
import Profile from "./components/Profile";
import DataProfile from "./components/DataProfile";

function App() {
  return (
    <>
      <div className="flex bg-[#d9d9d9]">
        <SideBar />
        <div className="flex  gap-5 w-full flex-col">
          <TopBar />
          <div className=" px-4">
            <Profile />
            <DataProfile />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
