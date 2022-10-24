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
        border-bottom: 1px solid #1c1c1c50;
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

    div.buttons button.logout {
        background-color: #d8001d;
        font-weight: 700;
    }

    div.buttons button:disabled {
        cursor: default;
        background-color: #d9ead3;
        border: 1px solid #34a853;
        color: #34a853;
        text-decoration: line-through;
    }

    ul {
        display: flex;
        flex-direction: column;
        width: 90%;
        padding: 0;
    }
    li {
        height: 200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
        box-sizing: border-box;
        padding: 0 16px;
        list-style: none;
        background-color: #ffffff;
        color: #1c1c1c;
        border-radius: 8px;
        margin: 4px 0;
        box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
        -webkit-box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
        -moz-box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
    }

    ul li div.li-buttons {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    ul li button {
        background-color: #34a853;
        color: #ffffff;
        width: 40px;
        height: 100px;
        box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
        -webkit-box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
        -moz-box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
        border: none;
        border-radius: 0 100px 100px 0;
    }
    ul li button.delete {
        background-color: #d8001d;
        border-radius: 10px 0 0 10px;
        font-weight: 700;
        text-align: center;
    }

    ul li div li {
        box-sizing: border-box;
        height: max-content;
        width: max-content;
        padding: 2px;
    }
`;

export const Form = styled.form`
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 20px;

    input {
        box-sizing: border-box;
        width: 100%;
        margin: 4px 0;
        padding: 0 16px;
        height: 32px;
        outline: none;
        border: none;
        border-radius: 4px;
        box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
        -webkit-box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
        -moz-box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
    }

    input::placeholder {
        padding-left: 2px;
    }

    button {
        transition: 0.2s;
        margin-top: 16px;
        width: 100px;
        border: none;
        height: 32px;
        border-radius: 4px;
        box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
        -webkit-box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
        -moz-box-shadow: 0px 0px 2px 2px rgba(28, 28, 28, 0.2);
    }

    button:hover {
        background-color: #1c1c1c10;
    }
`;
