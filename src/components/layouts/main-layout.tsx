import Text from "../typography";
import { LayoutWrapper } from "./style";
import { IMainLayout } from "./types";

const MainLayout: React.FC<IMainLayout> = ({ children, title }) => {
  return (
    <LayoutWrapper>
      <Text text={title} size="xl" weight="medium" />
      <>{children}</>
    </LayoutWrapper>
  );
};

export default MainLayout;
