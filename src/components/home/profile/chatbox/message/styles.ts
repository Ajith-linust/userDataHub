import { styled } from "styled-components"
import { HeaderWrapper } from "../styles";

export const MessagesWrapper = styled.div`
    position: absolute;
    left: -110%;
    bottom: 0px;
    width: 100%;
    z-index: 1000;
`;

export const MessageHeaderWrapper = styled(HeaderWrapper)`
    gap: 0;
    cursor: default;

    > p {
        margin-left: 10px;
    }
    > svg {
        cursor: pointer;
    }
`;

export const MessgesBlock = styled.div`
    height: 140px;
    overflow: hidden auto;
    background-color: var(--bgColor);
    border-inline: 1px solid #2C65C8;
    padding: 10px;

    > p {
        padding: 0px;
        padding: 5px 8px;
        background-color: #eee;
        width: max-content;
        max-width: 140px;
        border-radius: 6px;
        font-size: 14px;
        animation: 1s reveal forwards;
    }
    
    > span {
        width: 100%;
        display: block;
        text-align: center;
        font-size: 13px;
    }
`;

export const ChatInputWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 6px 10px;
    border: 1px solid #2c65c8;
    border-color: #eee #2c65c8;
    background: white;

    input {
        width: 100%;
        height: 100%;
        background: transparent;
        border: none;
        outline: none;
        color: var(--primary);
    }
`;
