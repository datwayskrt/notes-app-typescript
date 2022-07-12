import { useState } from "react";
import {
  Container,
  InputArea,
  TextInput,
  AddBtn,
  Content,
  Text,
  Notes,
  Heading,
  Edit,
  Delete,
  ActionBtns,
  ModalContainer
} from "./styles";

//------------
import { useAppDispatch, useAppSelector } from "./../hooks";
import store from "./../store";
import { add, del } from "./../slice";
import { Provider } from "react-redux";
//-----------------
interface Props {
  note: string;
}

const Modal = () => {
  return (
    <ModalContainer>
      <input type="text" placeholder="editing" />
    </ModalContainer>
  );
};

const Note = ( {note, id}: {string, number}) => {
  const dispatch = useAppDispatch();
  return (
    <Content>
      <Text>{note}</Text>
      <ActionBtns>
        <Edit>edit</Edit>
        <Delete onClick={() => dispatch(del(id))}>delete</Delete>
      </ActionBtns>
    </Content>
  );
};

const Page = () => {
  const [input, setInput] = useState<string>("");
  const todos = useAppSelector((state) => state.todos.text);
  const dispatch = useAppDispatch();
  return (
    <Container>
      <Heading className="title">Notie</Heading>
      <InputArea>
        <TextInput
          max-length="20"
          placeholder="Enter a new note"
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <AddBtn
          onClick={() => {
            dispatch(add(input));
          }}
        >
          +
        </AddBtn>
      </InputArea>
      <Notes>
        <Heading>Total: {todos.length}</Heading>
        {todos
          .map(({text, id } ) => {
            return <Note note={text} id= {id}/>;
          })
          .reverse()}
      </Notes>
    </Container>
  );
};

const FinalPage = () => {
  return (
    <Provider store={store}>
      <Page />
    </Provider>
  );
};

export default FinalPage;
