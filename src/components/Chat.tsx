import SendMessageForm from "./SendMessageForm";
import MessageContainer from "./MessageContainer";
import ConnectedUsers from "./ConnectedUsers";
import { MDBBtn, MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";

const Chat = ({ sendMessage, messages, users, closeConnection, curentUser }: any) => (
  <MDBContainer fluid className="p-4">
    <MDBRow>
      <MDBCol md="6" lg="5" xl="4" className="mb-4 mb-md-0">
        <ConnectedUsers users={users} />
        <MDBBtn
          className="btn-danger w-100 mt-4"
          onClick={() => closeConnection()}
        >
          Sign out {curentUser}
        </MDBBtn>
      </MDBCol>
      <MDBCol md="6" lg="7" xl="8" className="mb-4 mb-md-0">
        <MessageContainer messages={messages} curentUser={curentUser}/>
        <SendMessageForm sendMessage={sendMessage} />
      </MDBCol>
    </MDBRow>
  </MDBContainer>
);

export default Chat;
