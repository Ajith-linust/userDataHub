import { styled } from "styled-components";
import { UserList as List } from '@components/landingPage/usersList/styles';

export const ChatBoxWrapper = styled.div`
    width: 300px;
    border-radius: 10px;
    position: absolute;
    bottom: 0px;
    right: 0px;
    z-index: 1000;
`;

export const HeaderWrapper = styled.div`
    background: #2C65C8;
    height: 40px;
    display: flex;
    gap: 10px;
    align-items: center;
    padding: 4px 12px;
    border-radius: 7px 7px 0 0;
    cursor: pointer;

    > p {
        color: white;
        margin: 0;
        font-weight: 500;
    }
`;

export const UsersListWrapper = styled.div`
    height: 300px;
    overflow: auto;
    border-inline: 1px solid #2C65C8;
    position: relative;
    transition: .4s height;
    background-color: var(--bgColor);
`;

export const UserList = styled(List)<{
    online: boolean;
}>`
    padding: 6px 10px;
    cursor: pointer;
    gap: 12px;

    > p {
        margin: 0;
    }

    > span {
        margin-inline: auto 0;
        width: 7px;
        height: 7px;
        border-radius: 7px;
        background-color: ${p => p.online? '#3EA95A' : '#D5D5D5'};
    }
`;
