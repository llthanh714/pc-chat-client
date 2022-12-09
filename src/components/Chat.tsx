import SendMessageForm from "./SendMessageForm";
import MessageContainer from "./MessageContainer";
import ConnectedUsers from "./ConnectedUsers";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const Chat = ({ sendMessage, messages, users, closeConnection }: any) => (
  <MDBContainer fluid className="p-5" style={{ backgroundColor: "#eee" }}>
    <MDBBtn
      className="btn-danger align-self-center"
      onClick={() => closeConnection()}
    >
      Leave Room
    </MDBBtn>
    <MDBRow>
      <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
        <ConnectedUsers users={users} />
      </MDBCol>
      <MDBCol md="6" lg="7" xl="8" className="mb-4 mb-md-0">
        <MessageContainer messages={messages} />
        <SendMessageForm sendMessage={sendMessage} />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default Chat;
