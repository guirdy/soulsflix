import styled from 'styled-components';

export const Body = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    justify-items: center;
    background-color: var(--black);
    height: 100%;
    position: absolute;
    top: 0;
    width: 100%;

    @media(max-width: 800px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
    }

    h1 {
        color: var(--secondary);
        font-size: 60px;
    }

    p {
        color: var(--white);
        font-size: 20px;
    }

    a {
        text-decoration: none;
        color: var(--secondary);
    }
`;

export const ImgContent = styled.div`
    padding: 10px;
    img {
        width: 50vw;
    }
`;

export const TextContent = styled.div`
    padding: 0 20px;
`;