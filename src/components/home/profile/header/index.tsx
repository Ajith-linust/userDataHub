import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router";
import ImageWithFallback from "@library/image";
import { useAppSelector } from "@reduxStore/store";
import { IUser } from "@reduxStore/state/types";
import * as Styles from "./styles";

function ProfileHeader() {
  const { personInformation, users } = useAppSelector(
    (state) => state.usersDataHub
  );
  const { name, email, profilepicture, id } = personInformation;

  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [userList, setUserList] = useState<IUser[]>([]);

  const headerRef = useRef<HTMLDivElement | null>(null);

  {
    /**
    Ref will not work here because I used condition base render.
    So I used useCallback function for recall the function when the element is called.
    */
  }
  const modalRef = useCallback(
    (node: HTMLDivElement) => {
      const listener = (event: MouseEvent) => {
        if (!event) return;

        // Do nothing if clicking ref's element or descendent elements
        if (
          node &&
          !node?.contains(event.target as Node) &&
          !headerRef.current?.contains(event.target as Node) &&
          isModalOpen
        ) {
          setIsModalOpen(false);
          return;
        }
      };
      document.addEventListener("click", listener);
    },
    [isModalOpen]
  );

  useEffect(() => {
    let filter = users.filter((d) => d.id !== id);
    setUserList(filter.slice(0, 2));
  }, [users, id]);

  const navigateHandler = (urlId: number) => {
    navigate(`/profile/${urlId}`);
  };

  return (
    <Styles.Header>
      <h3>Profile</h3>
      <Styles.ProfileWrapper>
        <div ref={headerRef} onClick={() => setIsModalOpen((p) => !p)}>
          <ImageWithFallback src={profilepicture} alt={name} />
          <span>{name}</span>
        </div>

        {isModalOpen && (
          <Styles.ModalWrapper ref={modalRef}>
            <ImageWithFallback
              src={profilepicture}
              alt={name}
              width="100px"
              height="100px"
              styles="margin: auto;"
            />
            <p>{name}</p>
            <span>{email}</span>
            {userList.map((data) => (
              <Styles.UserWrapper
                key={data.id}
                onClick={() => navigateHandler(data.id)}
              >
                <ImageWithFallback
                  src={data.profilepicture}
                  alt={data.name}
                  width="28px"
                  height="28px"
                />
                <p>{data.name}</p>
              </Styles.UserWrapper>
            ))}
            <Styles.SignoutBtnWrapper onClick={() => navigate(`/`)}>
              {"Sign out"}
            </Styles.SignoutBtnWrapper>
          </Styles.ModalWrapper>
        )}
      </Styles.ProfileWrapper>
    </Styles.Header>
  );
}

export default ProfileHeader;
