import {
  MDBCard,
  MDBCardBody,
  MDBCardHeader,
  MDBIcon,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useEffect, useRef } from "react";
import "../App.css";

const MessageContainer = ({ messages, curentUser }: any) => {
  const messageRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (messageRef && messageRef.current) {
      const { scrollHeight, clientHeight } = messageRef.current;
      messageRef.current.scrollTo({
        left: 0,
        top: scrollHeight - clientHeight,
        behavior: "smooth",
      });
    }
  }, [messages]);

  return (
    <MDBCard>
      <MDBCardBody>
        <MDBTypography listUnStyled>
          <div
            ref={messageRef}
            data-bs-spy="scroll"
            data-bs-offset="0"
            className="scrollspy-example"
          >
            {messages.map((m: any, index: any) => (
              <li
                key={index}
                className={
                  "d-flex flex-row justify-content-" +
                  (m.user === curentUser ? "end" : "start") +
                  " mb-4"
                }
              >
                <MDBCard
                  style={{
                    borderRadius: "15px",
                    backgroundColor: "rgba(57, 192, 237,.2)",
                  }}
                >
                  <MDBCardHeader className="d-flex justify-content-between p-2">
                    <p className="fw-bold small mb-0">
                      {m.user}&nbsp;&nbsp;&nbsp;
                    </p>
                    <p className="text-muted small mb-0">
                      <MDBIcon far icon="clock" />{" "}
                      {new Date().toLocaleString() + ""}
                    </p>
                  </MDBCardHeader>
                  <MDBCardBody className="p-2">
                    <p className="mb-0">{m.message}</p>
                  </MDBCardBody>
                </MDBCard>
                <img
                  className="mx-3"
                  src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-chat/ava1-bg.webp"
                  alt="avatar 1"
                  style={{ width: "45px", height: "100%" }}
                />
              </li>
            ))}
          </div>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
  );
};

export default MessageContainer;
