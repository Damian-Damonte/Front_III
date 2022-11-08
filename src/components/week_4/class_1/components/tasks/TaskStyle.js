import styled from "styled-components";

export const TaskContainer = styled.main`
  margin: 0 auto;
  width: 50%; 
  padding: 20px;

`

export const TaskCard = styled.div`
  border: 1px dotted gray;
  display: flex;
  justify-content: space-evenly;
  padding: 20px;
  margin-bottom: 5px;
`

export const Button = styled.button`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: ${({bgColor}) => bgColor ? "green" : "crimson"};
  color: white;
  cursor: pointer;
`

export const FormAdd = styled.form`
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`

export const Input = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: 1px dotted gray;
  cursor: pointer;
`
export const InputSubmit = styled.input`
  padding: 10px;
  border-radius: 4px;
  border: none;
  background-color: #34a9f7;
  color: white;
  cursor: pointer;
`