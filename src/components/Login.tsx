import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";
import { useState } from "react";

const Login = ({ joinRoom }: any) => {
  const [user, setUser] = useState<string>();
  const [room, setRoom] = useState<string>();

  return (
    <MDBContainer fluid className="mt-5">
      <form
        className="lobby"
        onSubmit={(e) => {
          e.preventDefault();
          joinRoom(user, room);
        }}
      >
        <MDBCard>
          <MDBRow className="g-0 d-flex align-items-center">
            <MDBCol md="4">
              <MDBCardImage
                src="https://e0.pxfuel.com/wallpapers/247/650/desktop-wallpaper-best-cool-tumblr-iphone-for-whatsapp-chat-ideas.jpg"
                alt="phone"
                className="rounded-t-5 rounded-tr-lg-0"
                fluid
              />
            </MDBCol>

            <MDBCol md="8">
              <MDBCardBody>
                <h2 className="fw-bold mb-2 text-center">SignalR Chat Hub</h2>
                <p className="mb-3 text-center">llthanh714</p>
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

                <MDBBtn
                  size="lg"
                  className="mb-4 w-100"
                  disabled={!user || !room}
                >
                  Join
                </MDBBtn>
              </MDBCardBody>
            </MDBCol>
          </MDBRow>
        </MDBCard>
      </form>
    </MDBContainer>
  );
};

export default Login;
