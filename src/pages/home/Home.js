import Topbar from "../../components/topbar/Topbar";

export default function Home() {
    return (
      <>
        <Topbar />
        <div className="homeContainer">
          <Sidebar />
          <Feed/>
          <Rightbar/>
        </div>
      </>
    );
  }