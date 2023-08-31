import React, { useEffect, useState } from "react";
import { useAppSelector } from "@reduxStore/store";
import ImageWithFallback from "@library/image";
import GeoMap from "@library/map";
import * as Styles from "./styles";

interface ILatLang {
  lat: string;
  lng: string;
}

interface IObject {
  name: string;
  value: string | ILatLang;
}

function Profile() {
  const { personInformation } = useAppSelector((state) => state.usersDataHub);
  const { name, profilepicture } = personInformation;

  const [modifiedData, setModifiedData] = useState<{
    user: IObject[];
    company: IObject[];
    address: IObject[];
  }>({
    user: [],
    company: [],
    address: [],
  });

  useEffect(() => {
    /**
     * Instead of creating seperate elements, We can wrap the data and display it with help of map fucntion
     */

    let obj: {
      [key: string]: IObject[];
    } = {
      user: [],
      company: [],
      address: [],
    };

    Object.entries(personInformation).forEach(([key, data]) => {
      if (key === "id" || key === "name" || key === "profilepicture") return;

      let newObj: IObject[] = [];
      if (typeof data === "object") {
        Object.entries(data as IObject).forEach(([childKey, childData]) => {
          newObj.push({
            name: childKey,
            value: childData,
          });
        });
        obj[key] = newObj;
      } else {
        obj["user"].push({
          name: key,
          value: data,
        });
      }
    });

    setModifiedData(obj as any);
  }, [personInformation]);

  const textRender = (name: string, value?: string, className?: string) => (
    <Styles.TextWrapper key={name} className={className}>
      <label>{name}</label>
      {value && <span>{value}</span>}
    </Styles.TextWrapper>
  );

  return (
    <Styles.ProfileBlock>
      <Styles.LeftWrapper>
        <ImageWithFallback
          src={profilepicture}
          alt={name}
          width={"200px"}
          height={"200px"}
          styles={`margin-inline: auto;`}
        />
        <Styles.Name>{name}</Styles.Name>

        {/** Calling the function that return JSX for reduce the code space */}
        {modifiedData.user.map((d) => textRender(d.name, d.value as string))}

        {/** Company Header */}
        {textRender("Company", undefined, "company-block")}

        {/** Company details */}
        {modifiedData.company.map((d) => textRender(d.name, d.value as string))}
      </Styles.LeftWrapper>
      <Styles.RightWrapper>
        {/** Address Header */}
        {textRender("Address", undefined)}

        {/** Map details */}
        {modifiedData.address.map((d) =>
          d.name === "geo" ? (
            <React.Fragment key={d.name}>
              <GeoMap
                latAndLong={[
                  parseInt((d.value as ILatLang).lat),
                  parseInt((d.value as ILatLang).lng),
                ]}
              />
              <Styles.LatLangWrapper>
                <label>
                  <span>Lat: </span>
                  {(d.value as ILatLang).lat}
                </label>
                <label>
                  <span>Long: </span>
                  {(d.value as ILatLang).lng}
                </label>
              </Styles.LatLangWrapper>
            </React.Fragment>
          ) : (
            textRender(d.name, d.value as string)
          )
        )}
      </Styles.RightWrapper>
    </Styles.ProfileBlock>
  );
}

export default Profile;
