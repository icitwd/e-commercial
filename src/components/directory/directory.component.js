import React, { useState } from "react";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

function Directory() {
  const [sections, setSections] = useState([
    {
      title: "hats",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "",
    },
    {
      title: "jackets",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "",
    },
    {
      title: "sneakers",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "",
    },
    {
      title: "womens",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "",
    },
    {
      title: "mens",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "",
    },
  ]);
  return (
    <div className="directory-menu">
      {sections.map(
        (
          { id, ...otherSectionProps } //  { title, imageUrl, id, size, linkUrl } koymadık cünkü spread operatör.
        ) => (
          <MenuItem key={id} {...otherSectionProps} />
        )
      )}
    </div>
  );
}

export default Directory;
