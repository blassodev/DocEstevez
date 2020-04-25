import styled from 'styled-components';

export const BaseComponent = styled.div`
    display: flex;
    flex-direction: column;
    & a{
        color: white;
        &:hover{
            color: gray;
        }
    }
    & svg{
        width: 100px;
        height: 100px;
    }

`;