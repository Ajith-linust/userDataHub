import styled from "styled-components";
import background from '../../assets/background.svg';

export const LandingPageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    background-image: url('${background}');
    background-size: calc(100% + 5px);
    background-repeat: no-repeat;
    background-position: -5px 0;
`;

export const UsersListContainer = styled.div`
    position: absolute;
    left: 50%;
    top: 130px;
    transform: translateX(-50%);
    width: 500px;
    text-align: center;
    border-radius: 10px;
    box-shadow: 0px 0px 50px -19px rgba(112,112,112,0.4);
    border-radius: 30px;
    overflow: hidden;

    & > h1 {
        padding: 40px;
        background-color: var(--borderColor);
    }
`;

export const UsersListWrapper = styled.div`
    width: calc(100% - 80px);
    height: 350px;
    overflow-y: auto;
    padding: 0 40px 10px;
    background-color: var(--bgColor);
`;
