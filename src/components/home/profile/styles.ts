import { styled } from "styled-components";

export const Name = styled.p`
  text-align: center;
  font-size: 18px;
  font-weight: 600;
`;

export const ProfileBlock = styled.div`
  display: grid;
  grid-template-columns: 0.8fr 1.2fr;
  grid-gap: 40px;
  padding-top: 40px;
  overflow: auto;
  height: 100%;
  padding-right: 8px;
`;

export const LeftWrapper = styled.div`
  border-right: 1px solid var(--grey);
  padding: 0 30px 0 0;
`;

export const TextWrapper = styled.div`
  font-size: 18px;
  display: grid;
  grid-template-columns: 120px 1fr;
  gap: 10px;
  padding-bottom: 13px;

  &.company-block {
    border-top: 2px solid #eee;
    padding-top: 10px;
  }

  label {
    color: #a2a2a2;
    text-align: right;
    padding-right: 10px;
    display: block;
    position: relative;
    text-transform: capitalize;
    font-weight: 500;
  }

  label:after {
    content: ":";
    position: absolute;
    right: -2px;
  }

  span {
    font-weight: 600;
  }
`;

export const RightWrapper = styled.div`
  position: relative;
`;

export const LatLangWrapper = styled.p`
    font-size: 14px;
    display: flex;
    justify-content: end;
    gap: 12px;

    > label span {
      color: #a2a2a2;
    }

    label {
      color: var(--primary);
    }
`;
