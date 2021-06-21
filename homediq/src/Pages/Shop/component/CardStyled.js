import styled from "styled-components";
import {Card} from "@material-ui/core";

export const CardStyled= styled(Card)`
   
    padding: 10px;
    border-top: 10px solid blue;
    border-radius: 25px;
    margin: 10px;
    background-color:whitesmoke;
    width:30%;

    :hover{
        border-top:10px solid #f9025c;
    }
`; 