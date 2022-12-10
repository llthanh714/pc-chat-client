import { MDBCard, MDBCardBody, MDBCardHeader, MDBIcon } from "mdb-react-ui-kit";

const MessageRecieve = ({ m, index }: any) => {
  return (
    <>
      <li key={index} className={"d-flex flex-row justify-content-start mb-4"}>
        <img
          className="me-2"
          src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
          alt="avatar"
          style={{ width: "45px", height: "100%" }}
        />
        <MDBCard
          style={{
            borderRadius: "15px",
            backgroundColor: "rgba(57, 192, 237,.2)",
          }}
        >
          <MDBCardHeader className="d-flex justify-content-between p-2">
            <p className="fw-bold small fst-italic mb-0">{m.user}&nbsp;&nbsp;&nbsp;</p>
            <p className="text-muted small fst-italic mb-0">
              <MDBIcon far icon="clock" /> {new Date().toLocaleString() + ""}
            </p>
          </MDBCardHeader>
          <MDBCardBody className="p-2">
            <p className="mb-0">{m.message}</p>
          </MDBCardBody>
        </MDBCard>
      </li>
    </>
  );
};

export default MessageRecieve;
