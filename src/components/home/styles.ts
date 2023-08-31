import { styled } from "styled-components";

export const HomePageWrapper = styled.div`
  display: grid;
  grid-template-columns: 270px 1fr;
  width: calc(100vw - 20px);
  max-width: 1300px;
  margin: auto;
  gap: 40px;
  height: 800px;
  position: relative;

  @media (max-height: 800px) {
    margin-block: 20px;
    height: ${window.innerHeight - 40 + 'px'};
  }
`;

export const SideNavWrapper = styled.div`
  background: linear-gradient(200deg, rgba(58,89,200,1) 0%, rgba(104,74,200,1) 110%);
  border-radius: 30px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-inline: 30px;
  position: relative;
  height: 100%;
`;

export const TextWrapper = styled.div`
  position: relative;
`;

export const Name = styled.p<{
  isSelected: boolean;
}>`
  margin: 0;
  padding: 14px 0;
  text-transform: capitalize;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  color: ${(p) => (p.isSelected ? "var(--bgColor)" : "#8B8ADC")};
  transition: color 0.4s;

  &:hover {
    color: var(--bgColor);
  }

  &:not(:last-child) {
    border-bottom: 1px solid #909090;
  }
`;

export const BallWrapper = styled.div<{ index?: number }>`
  position: absolute;
  top: ${p => p.index ? `${p.index * 57}px`: `0px`};
  right: -41px;
  transition: .4s top;
  width: 45px;
  height: 45px;
`;

export const ProfileWrapper = styled.div`
  height: 100%;
  max-height: 800px;
  display: flex;
  flex-direction: column;

  @media (max-height: 800px) {
    height: ${window.innerHeight - 40 + 'px'};
  }
`;

export const ComingSoon = styled.h1`
    font-size: 4em;
    align-self: center;
    height: 100%;
    display: flex;
    align-items: center;
    color: #dcdcdc;
`;
