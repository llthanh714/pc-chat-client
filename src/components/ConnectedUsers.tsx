import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBTypography
} from "mdb-react-ui-kit";

const ConnectedUsers = ({ users }: any) => {
  return (
    <MDBContainer fluid className="py-5">
      <MDBRow>
        <MDBCol md="5" lg="4" xl="3" className="mb-4 mb-md-0">
          <MDBCard>
            <MDBCardBody>
              <h5 className="text-mute text-center pb-2">Connected Users</h5>
              <MDBTypography listUnStyled className="mb-0">
                {users.map((u: any, idx: number) => (
                  <div key={idx}>
                    <li
                      className="p-2 border-bottom"
                      style={{ backgroundColor: "#eee" }}
                    >
                      <a href="#!" className="d-flex justify-content-between">
                        <div className="d-flex flex-row">
                          <img
                            src={
                              "https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-" +
                              (idx + 1) +
                              ".webp"
                            }
                            alt="avatar"
                            className="rounded-circle d-flex align-self-center me-3 shadow-1-strong"
                            width="60"
                          />
                          <div className="pt-1">
                            <p className="fw-bold mb-0">{u}</p>
                            <p className="small text-success">Online</p>
                          </div>
                        </div>
                        <div className="pt-1">
                          <p className="small text-muted mb-1">Just now</p>
                          {/* <span className="badge bg-danger float-end">1</span> */}
                        </div>
                      </a>
                    </li>
                  </div>
                ))}
              </MDBTypography>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default ConnectedUsers;
