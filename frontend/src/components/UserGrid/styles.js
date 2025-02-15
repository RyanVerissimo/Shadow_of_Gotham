import styled from "styled-components";

export const Table = styled.table`
    width: 100%;
    max-width: 800px;
    padding: 20px;
    margin: 20px auto;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tr = styled.tr``;

export const Th = styled.th`
    text-align: start;
    border-bottom: inset;
    padding-bottom: 5px;

    @media (max-width: 500px) {
        ${({ $onlyWeb }) => $onlyWeb && "display: none"}
    }
`;

export const Tbody = styled.tbody``

export const Td = styled.td`
    padding-top: 15px;
    text-align: ${({ alignCenter }) => (alignCenter ? "center" : "start")};
    width: ${({ width }) => (width ? width : "auto")};

    @media (max-width: 500px) {
        ${({ $onlyWeb }) => $onlyWeb && "display: none"}
    }
`;