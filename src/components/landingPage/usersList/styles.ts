import { styled } from "styled-components";

export const UserList = styled.div<{
    indexOfElement: number;
}>`
    display: flex;
    align-items: center;
    gap: 18px;
    animation: .15s reveal .5s forwards;
    animation-delay: ${p => `${p.indexOfElement * .15}s`};
    opacity: 0;
    cursor: pointer;
    
    &:not(:last-child) {
        border-bottom: 2px solid var(--borderColor);
    }

    @keyframes reveal {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
`;
