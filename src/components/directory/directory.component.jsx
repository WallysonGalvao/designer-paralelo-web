import React from "react";

import MenuItem from "../menu-item/menu-item.component";

import "./directory.styles.scss";

import image_30 from "../../assets/30.png";
import image_31 from "../../assets/31.png";

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: "BULLSBEER",
          imageUrl: image_30,
          id: 1,
          linkUrl: "hats"
        },
        {
          title: "BULLSBEER",
          imageUrl: image_30,
          id: 2,
          linkUrl: ""
        },
        {
          title: "BULLSBEER",
          imageUrl: image_30,
          id: 3,
          linkUrl: ""
        },
        {
          title: "BULLSBEER",
          imageUrl: image_30,
          size: "large",
          id: 4,
          linkUrl: ""
        },
        {
          title: "SEU PROJETO",
          imageUrl: image_30,
          size: "large",
          id: 5,
          linkUrl: ""
        },
        {
          title: "SEU PROJETO AQUI!!!!",
          imageUrl: image_31,
          size: "large",
          id: 6,
          linkUrl: "hats"
        }
      ]
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <MenuItem key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;
