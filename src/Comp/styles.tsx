import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 6rem;

  .title {
    width: 40%;
    font-size: 1.5rem;
    text-align: left;
    margin-bottom: 1rem;
  }
`;

export const InputArea = styled.div`
  display: flex;
  width: 40%;
`;

export const AddBtn = styled.button`
  padding: 8px;
  width: 20%;
  color: white;
  border: 1px solid #ccc;
  border-radius: 0px 4px 4px 0px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.09);

  background: #999;

  font-weight: bolder;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const TextInput = styled.input`
  width: 80%;
  height: 2rem;
  padding: 8px;
  color: #696773;
  outline: none;
  border: none;
  font-size: 1rem;
  border-radius: 4px 0px 0px 4px;
  border: 0.5px solid #ccc;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.09);
`;

export const Notes = styled.div`
  display: flex;
  flex-direction: column;
  width: 40%;
  align-content: left;
`;

export const Edit = styled.button`
  padding: 5px;
  border-radius: 50px;
  border: none;
  width: 3rem;
  color: #fff;
  background: #ccc;
  &:hover {
    cursor: pointer;
    background: #999;
  }
`;

export const Delete = styled(Edit)`
  &:hover {
    background: #999;
  }
`;

export const Heading = styled.h4`
  color: #696773;
  margin-bottom: 0;
  text-align: left;
`;

export const ActionBtns = styled.div`
  display: flex;
  width: 20%;
  justify-content: space-around;
`;

export const Content = styled.div`
  border: 0.5px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1rem;
  border-radius: 4px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0px 3px 12px rgba(0, 0, 0, 0.09);
  color: #696773;
  min-width: calc(100% - 20px);
  padding-left: 10px;
  padding-right: 10px;
  margin-top: 0.5rem;
`;

export const Text = styled.p``;

export const ModalContainer = styled.div`
  width: 200px;
  height: 200px;
  background: #fff;
  display; flex;
  position: fixed;
  flex-direction: column;
  z-index: 1;
  border-radius: 4px;
  box-shadow: 0px 3px 12px rgba(0,0,0,0.09);
  border: .5px solid #ccc; 
`;
