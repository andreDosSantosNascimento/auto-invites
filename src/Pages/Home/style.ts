import styled from "styled-components";

export const Container = styled.div`
    box-sizing: border-box;
    margin: 0 auto;
    max-width: 70%;
    min-height: 95vh;
    background-color: #dcdcdc;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding: 8px;
    align-items: center;
    box-shadow: 0px 0px 5px 2px rgba(220, 220, 220, 0.75);
    -webkit-box-shadow: 0px 0px 5px 2px rgba(220, 220, 220, 0.75);
    -moz-box-shadow: 0px 0px 5px 2px rgba(220, 220, 220, 0.75);

    div.buttons {
        width: 85%;
        padding-bottom: 10px;
        border-bottom: 1px solid #1c1c1c;
        box-sizing: border-box;
        display: flex;
        justify-content: center;
        flex-direction: row;
        margin-bottom: 20px;
    }

    div.buttons button {
        box-sizing: border-box;
        margin: 2px;
        border-radius: 4px;
        border: 1px solid #d9ead3;
        background-color: #34a853;
        color: #dcdcdc;
        height: 32px;
    }

    div.buttons button:disabled {
        cursor: default;
        background-color: #d9ead3;
        border: 1px solid #34a853;
        color: #34a853;
        text-decoration: line-through;
    }
`;
