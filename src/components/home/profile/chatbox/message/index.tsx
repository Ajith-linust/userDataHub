import React, { useEffect, useRef, useState } from "react";
import ImageWithFallback from "@library/image";
import { formatUnixTimestamp } from "@utils/date";
import SendSvg from "@assets/svgr/SendSvg";
import ExpandSvg from "@assets/svgr/Expand";
import CloseSvg from "@assets/svgr/CloseSvg";
import { chatData as chatHub } from "../constants";
import * as Styles from "./styles";

function Messages({
  profilepicture,
  name,
  closeHandler,
}: {
  profilepicture: string;
  name: string;
  closeHandler: () => void;
}) {
  const [chatData, setChatData] = useState(chatHub);
  const [isExpand, setIsExpand] = useState(true);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const messageBlockRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let messageBlock = messageBlockRef.current;

    if(!messageBlock?.children[messageBlock?.children?.length - 1]) return;

    {/** Auto focus input and focus the last element */}

    if (inputRef.current) {
      inputRef.current.value = '';
      inputRef.current.focus();
    }

    messageBlock?.children[messageBlock?.children.length - 1]?.scrollIntoView({ behavior: 'smooth' });
  }, [chatData]);

  const messageSendHandler = () => {
    if(!inputRef.current) return;
    setChatData((p) => [...p, {
      ...p,
      sender: "user",
      message: inputRef.current?.value || "",
      messagedAt: new Date().getTime(),
    }]);
  };

  return (
    <Styles.MessagesWrapper>
      <Styles.MessageHeaderWrapper>
        <ImageWithFallback
          width="24px"
          height="24px"
          src={profilepicture}
          alt={name}
        />
        <p>{name}</p>
        <ExpandSvg
          styles={{
            marginInline: "auto 0",
            transform: isExpand ? `rotate(180deg)` : `rotate(0deg)`,
          }}
          onClick={() => setIsExpand((p) => !p)}
        />
        <CloseSvg onClick={closeHandler} />
      </Styles.MessageHeaderWrapper>
      {isExpand && (
        <>
          <Styles.MessgesBlock ref={messageBlockRef}>
            {chatData.map((data, index) => (
              <React.Fragment key={index}>
                {data.messagedAt && (
                  <span>{formatUnixTimestamp(data.messagedAt)}</span>
                )}
                <p
                  style={{
                    marginInline: data.sender === "user" ? "auto 0" : "0",
                  }}
                >
                  {data.message}
                </p>
              </React.Fragment>
            ))}
          </Styles.MessgesBlock>
          <Styles.ChatInputWrapper>
            <input ref={inputRef} />
            <SendSvg
              fill="#2C65C8"
              styles={{ cursor: "pointer" }}
              onClick={messageSendHandler}
            />
          </Styles.ChatInputWrapper>
        </>
      )}
    </Styles.MessagesWrapper>
  );
}

export default Messages;
