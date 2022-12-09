import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState } from "react";
import { Form } from "react-bootstrap";

const Login = ({ joinRoom }: any) => {
  const [user, setUser] = useState<string>();
  const [room, setRoom] = useState<string>();

  return (
    <MDBContainer fluid>
      <Form className="lobby"
        onSubmit={(e) => {
          e.preventDefault();
          joinRoom(user, room);
        }}
      >
        <MDBRow className="d-flex justify-content-center align-items-center h-100">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto"
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column">
                <h2 className="fw-bold mb-2 text-center">SignalR Chat Hub</h2>
                <p className="text-white-50 mb-3">
                  Please enter your info!
                </p>

                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Enter your name..."
                  id="formControlLg"
                  type="text"
                  size="lg"
                  onChange={(e) => setUser(e.target.value)}
                />
                <MDBInput
                  wrapperClass="mb-4 w-100"
                  label="Enter your room..."
                  id="formControlLg"
                  type="text"
                  size="lg"
                  onChange={(e) => setRoom(e.target.value)}
                />

                <MDBBtn size="lg" disabled={!user || !room}>Join</MDBBtn>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </Form>
    </MDBContainer>
  );
};

export default Login;
