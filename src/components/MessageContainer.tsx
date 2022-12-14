import { MDBCard, MDBCardBody, MDBTypography } from "mdb-react-ui-kit";
import { useEffect, useRef } from "react";
import "../App.css";
import Send from "./MessageSend";
import Recieve from "./MessageRecieve";
import IMessageContainer from "../interfaces/IMessageContainer";

const MessageContainer = ({ messages, curentUser }: IMessageContainer) => {
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
      <MDBCardBody className="p-2">
        <MDBTypography listUnStyled>
          <div
            ref={messageRef}
            data-bs-spy="scroll"
            data-bs-offset="0"
            className="scrollspy-example"
          >
            {messages.map((m: any, index: any) =>
              m.user === curentUser ? (
                <Send key={index} user={m.user} message={m.message} />
              ) : (
                <Recieve key={index} user={m.user} message={m.message} />
              )
            )}
          </div>
        </MDBTypography>
      </MDBCardBody>
    </MDBCard>
  );
};

export default MessageContainer;
