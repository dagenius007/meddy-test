import styled, { keyframes } from "styled-components";

const load = keyframes`
 from {
    left: -150px;
  }
  to {
    left: 100%;
  }
`;

const SkeletonWrapper = styled.div`
  background: #e1e1e1;
  border-radius: 4px;
  height: 30px;
  position: relative;
  overflow: hidden;
  &::before {
    content: "";
    display: block;
    position: absolute;
    left: -150px;
    top: 0;
    height: 100%;
    width: 150px;
    background: linear-gradient(
      to right,
      transparent 0%,
      #e8e8e8 50%,
      transparent 100%
    );
    animation: ${load} 1s cubic-bezier(0.4, 0, 0.2, 1) infinite;
  }
`;

const Skeleton: React.FC = () => {
  return <SkeletonWrapper />;
};

export default Skeleton;
