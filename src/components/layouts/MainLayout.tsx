import { ReactElement } from "react";
import Text from "../text/Text";
import styled from "styled-components";
import { media } from "../../global-styles/queries";
import { Toaster } from "react-hot-toast";

export interface MainLayoutProps {
  title: string;
  children: ReactElement;
}

const LayoutWrapper = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding: 50px;
  font-family: "Inter", sans-serif;
  box-sizing: border-box;
  ${media.md`
    padding: 25px;
  `}
`;

const LayoutContainer = styled.div`
  padding: 0 30px;
  ${media.md`
    padding: 0px;
  `}
`;

const MainLayout: React.FC<MainLayoutProps> = ({ children, title }) => {
  return (
    <LayoutWrapper>
      <Text text={title} size="xl" weight="medium" />
      <LayoutContainer>{children}</LayoutContainer>
      <Toaster />
    </LayoutWrapper>
  );
};

export default MainLayout;
