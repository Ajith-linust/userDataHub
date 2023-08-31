import { Suspense, lazy, useEffect, useRef, useState } from "react";
import ChatSvg from "@assets/svgr/ChatSvg";
import ExpandSvg from "@assets/svgr/Expand";
import ImageWithFallback from "@library/image";
import { useAppSelector } from "@reduxStore/store";
import useOutsideClick from "@hooks/useOutsideClick";
import * as Styles from "./styles";

const Messages = lazy(() => import("./message"));

function ChatBox() {
  const { users } = useAppSelector((state) => state.usersDataHub);

  const [isExpand, setIsExpand] = useState(false);
  const [chatInfo, setChatInfo] = useState({
    isOpen: false,
    profilepicture: "",
    name: "",
  });

  const chatRef = useRef<HTMLDivElement>(null);

  useOutsideClick(chatRef, () => {
    setIsExpand(false);
  });

  useEffect(() => {
    if (!isExpand && chatInfo.isOpen) {
      setChatInfo({
        isOpen: false,
        profilepicture: "",
        name: "",
      });
    }
  }, [isExpand]);

  return (
    <Styles.ChatBoxWrapper ref={chatRef}>
      <Styles.HeaderWrapper onClick={() => setIsExpand((p) => !p)}>
        <ChatSvg />
        <p>Chats</p>
        <ExpandSvg
          styles={{
            marginInline: "auto 0",
            transform: isExpand ? `rotate(180deg)` : `rotate(0deg)`,
          }}
        />
      </Styles.HeaderWrapper>
      {isExpand && (
        <Styles.UsersListWrapper>
          {users.map((data, index) => (
            <Styles.UserList
              key={data.name}
              online={index % 2 === 0}
              onClick={() =>
                setChatInfo({
                  isOpen: true,
                  profilepicture: data.profilepicture,
                  name: data.name,
                })
              }
              indexOfElement={data.id}
            >
              <ImageWithFallback src={data.profilepicture} alt={data.name} />
              <p>{data.name}</p>
              <span></span>
            </Styles.UserList>
          ))}
        </Styles.UsersListWrapper>
      )}
      {isExpand && chatInfo.isOpen && (
        <Suspense fallback={<></>}>
          <Messages
            profilepicture={chatInfo.profilepicture}
            name={chatInfo.name}
            closeHandler={() =>
              setTimeout(() => {
                // wait for the parent click event action
                setChatInfo({
                  isOpen: false,
                  profilepicture: "",
                  name: "",
                });
              }, 100)
            }
          />
        </Suspense>
      )}
    </Styles.ChatBoxWrapper>
  );
}

export default ChatBox;
