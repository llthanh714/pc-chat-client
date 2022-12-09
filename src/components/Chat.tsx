import SendMessageForm from "./SendMessageForm";
import MessageContainer from "./MessageContainer";
import ConnectedUsers from "./ConnectedUsers";
import { MDBBtn } from "mdb-react-ui-kit";

const Chat = ({ sendMessage, messages, users, closeConnection }: any) => (
  <div>
    <div>
      <MDBBtn
        className="btn-danger align-self-center"
        onClick={() => closeConnection()}
      >
        Leave Room
      </MDBBtn>
    </div>
    <ConnectedUsers users={users} />
    <div>
      <MessageContainer messages={messages} />
      <SendMessageForm sendMessage={sendMessage} />
    </div>
  </div>
);

export default Chat;
