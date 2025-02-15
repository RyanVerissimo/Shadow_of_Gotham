import { createGlobalStyle } from "styled-components";
import bgManage from "../../src/assets/bg-manage.jpg";

const Global = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        font-family: 'poppins', 'sans-serif';
    }

    body {
        width: 100vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        background: url(${bgManage});
    }
`

export default Global;