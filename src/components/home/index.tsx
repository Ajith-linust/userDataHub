import { useEffect, useRef } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "@reduxStore/store";
import ImageWithFallback from "@library/image";
import Indicator from "@assets/indicator.svg";
import Profile from "./profile";
import ProfileHeader from "./profile/header";
import ChatBox from "./profile/chatbox";
import * as Styles from "./styles";

/**
 * navigation bar names
 */
const names = ["profile", "posts", "gallery", "toDo"];

function Home() {
  const { users, loader } = useAppSelector((state) => state.usersDataHub);

  const { id } = useParams();
  const location = useLocation();
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const elementIndex = useRef(0);

  useEffect(() => {
    import("@reduxStore/reducer").then((req) => {
      /**
       * if Id is undefied return it
       */
      if (!id || users.length === 0) {
        return;
      }

      dispatch(req.updatePersonInformation({ id: parseInt(id) }));
    });
  }, [users, id]);

  const navigateHandler = (name: string) => {
    navigate(`/${name}/${id}`);
  };

  if (loader.users || loader.personalInformation) return;

  return (
    <Styles.HomePageWrapper>
      <Styles.SideNavWrapper>
        <Styles.TextWrapper>
          {names.map((data, index) => {
            let isSelected = !!location.pathname.match(data);
            if (isSelected) elementIndex.current = index;

            return (
              <Styles.Name
                onClick={() => navigateHandler(data)}
                key={data}
                isSelected={isSelected}
              >
                {data}
              </Styles.Name>
            );
          })}
          <Styles.BallWrapper index={elementIndex.current || undefined}>
            <ImageWithFallback
              src={Indicator}
              alt={"indication"}
              width="100%"
              height="100%"
            />
          </Styles.BallWrapper>
        </Styles.TextWrapper>
      </Styles.SideNavWrapper>
      <Styles.ProfileWrapper>
        <ProfileHeader />
        {location.pathname.match("profile") ? (
          <Profile />
        ) : (
          <Styles.ComingSoon>Coming Soon</Styles.ComingSoon>
        )}
        <ChatBox />
      </Styles.ProfileWrapper>
    </Styles.HomePageWrapper>
  );
}

export default Home;
