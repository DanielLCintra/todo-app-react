import styled from '@emotion/styled';
import { Button, TextField } from "@mui/material";

export const TodoFormContainer = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: row;    
    width: 100vw;
    height: 3rem;
`;

export const TodoButton = styled(Button)`
    height: 115%;
    border-radius: 0  0.5rem .5rem 0;
    width: 10rem;
`;

export const TodoTextField = styled(TextField)`
    width: 30rem;
    border-radius: 0.5rem 0 0 .5rem !important;
`;


