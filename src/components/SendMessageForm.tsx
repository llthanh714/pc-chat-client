import { useState } from "react";
import { MDBBtn, MDBCard, MDBCardBody, MDBInputGroup } from "mdb-react-ui-kit";

const SendMessageForm = ({ sendMessage }: any) => {
  const [message, setMessage] = useState("");

  return (
    <form
      className="pt-2"
      onSubmit={(e) => {
        e.preventDefault();
        sendMessage(message);
        setMessage("");
      }}
    >
      <MDBCard>
        <MDBCardBody className="p-1">
          <MDBInputGroup>
            <input
              className="form-control"
              placeholder="Message..."
              type="text"
              onChange={(e) => setMessage(e.target.value)}
              value={message}
              style={{ border: "none" }}
            />
            <MDBBtn
              color="success"
              type="submit"
              disabled={!message}
              style={{ paddingTop: ".55rem" }}
            >
              Send
            </MDBBtn>
          </MDBInputGroup>
        </MDBCardBody>
      </MDBCard>
    </form>
  );
};

export default SendMessageForm;
