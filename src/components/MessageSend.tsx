import { MDBCard, MDBCardBody, MDBCardHeader, MDBIcon } from "mdb-react-ui-kit";
import IMessage from "../interfaces/IMessage";

const MessageSend = ({ user, message }: IMessage) => {
  return (
    <>
      <li className={"d-flex flex-row justify-content-end mb-4"}>
        <MDBCard
          style={{
            borderRadius: "15px",
            backgroundColor: "#fbfbfb",
          }}
        >
          <MDBCardHeader className="d-flex justify-content-between p-2">
            <p className="fw-bold small fst-italic mb-0">
              {user}&nbsp;&nbsp;&nbsp;
            </p>
            <p className="text-muted small fst-italic mb-0">
              <MDBIcon far icon="clock" /> {new Date().toLocaleString() + ""}
            </p>
          </MDBCardHeader>
          <MDBCardBody className="p-2">
            <p className="mb-0">{message}</p>
          </MDBCardBody>
        </MDBCard>
        <img
          className="ms-2"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava3-bg.webp"
          alt="avatar"
          style={{ width: "45px", height: "100%" }}
        />
      </li>
    </>
  );
};

export default MessageSend;
