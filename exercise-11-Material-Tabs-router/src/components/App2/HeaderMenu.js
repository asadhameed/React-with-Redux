import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import { Tabs, Tab } from "@material-ui/core";

const HeaderMenu = withRouter(({ history }) => {
  console.log(history);
  const [selectedTab, setSelectedTab] = useState("Crypto");
  const handleChangeTab = (event, newTab) => {
    switch (newTab) {
      case "Crypto":
        history.push("/");
        break;
      case "favorite":
        history.push("/favorite");
        break;
      default:
        history.push("/");
    }
    console.log(newTab);
    setSelectedTab(newTab);
  };

  return (
    <div>
      <Tabs value={selectedTab} onChange={handleChangeTab}>
        <Tab label="Crypto Currency" value="Crypto"></Tab>
        <Tab label="Favorite" value="favorite"></Tab>
      </Tabs>
    </div>
  );
});

export default HeaderMenu;
