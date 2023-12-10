import { IMainLayout } from "./types";

const MainLayout: React.FC<IMainLayout> = ({ component: Component, title }) => {
  return (
    <div className="App">
      <p>{title}</p>
      <div></div>
    </div>
  );
};

export default MainLayout;
