import React, { useState } from "react";

import { Container, Tab, Title, ActiveLine } from "./styles";

interface Props {
  titlePrimary: string;
  titleSecundary: string;

  onPrimary: () => void;
  onSecundary: () => void;
}

const TopBar: React.FC<Props> = ({
  titlePrimary,
  titleSecundary,
  onPrimary,
  onSecundary,
}) => {
  const [activeTab, setActiveTab] = useState<1 | 2>(1);

  function handleSwitchTab(value: 1 | 2) {
    setActiveTab(value);
  }

  return (
    <Container>
      <Tab
        onPress={() => {
          onPrimary();
          handleSwitchTab(1);
        }}
      >
        <Title active={activeTab === 1}>{titlePrimary}</Title>
        {activeTab === 1 && <ActiveLine />}
      </Tab>

      <Tab
        onPress={() => {
          onSecundary();
          handleSwitchTab(2);
        }}
      >
        <Title active={activeTab === 2}>{titleSecundary}</Title>
        {activeTab === 2 && <ActiveLine />}
      </Tab>
    </Container>
  );
};

export default TopBar;
