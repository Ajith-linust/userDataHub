import { styled } from "styled-components";

export const Header = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid var(--grey);

  h3 {
    margin: 15px 0;
  }
`;

export const ProfileWrapper = styled.div`
  margin-inline: auto 0;
  position: relative;

  > div:first-child {
    display: flex;
    align-items: center;
    gap: 14px;
    cursor: pointer;
  }
`;

export const ModalWrapper = styled.div`
  z-index: 1000;
  position: absolute;
  top: 50px;
  right: 0px;
  width: 250px;
  background: white;
  box-shadow: 0px 0px 50px -19px rgba(112, 112, 112, 0.4);
  padding: 28px;
  text-align: center;
  border-radius: 20px;
  overflow: hidden;
  cursor: default;

  & > p {
    margin-bottom: 5px;
    font-weight: 600;
  }

  & > span {
    color: #a2a2a2;
  }
`;
export const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  justify-content: center;
  border-top: 1px solid #dedede;
  margin-top: 10px;
  padding-top: 10px;
  cursor: pointer;

  p {
    margin: 0;
    font-size: 15px;
  }
`;
export const SignoutBtnWrapper = styled.div`
  width: 90px;
  margin: 25px auto 0;
  padding: 8px 10px;
  background: #d55151;
  border-radius: 50px;
  color: var(--bgColor);
  font-weight: 600;
  cursor: pointer;
`;
