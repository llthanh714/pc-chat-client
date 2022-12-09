import { useState } from "react";
import { MDBBtn, MDBInputGroup } from "mdb-react-ui-kit";

const SendMessageForm = ({ sendMessage }: any) => {
  const [message, setMessage] = useState("");

  return (
    <form className="pt-2"
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
      }}
    >
      <MDBInputGroup className="mb-0">
        <input
          className="form-control"
          placeholder="Message..."
          type="text"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <MDBBtn
          color="primary"
          type="submit"
          disabled={!message}
          style={{ paddingTop: ".55rem" }}
        >
          Button
        </MDBBtn>
      </MDBInputGroup>
    </form>
  );
};

export default SendMessageForm;
