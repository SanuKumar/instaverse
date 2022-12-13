import React from "react";
import { Layout, Image, Typography } from "antd"
import LOGO from "./images/Instaverse.png"
import Home from "./components/Home"
import styles from "./styles"

const { Title } = Typography;
const { Header, Footer } = Layout

function App() {
  return (
    <Layout style={styles.layout}>
      <Header style={styles.header}>
        <Image style={styles.image} width="45" preview="false"
          src={LOGO}
        />
        &nbsp;
        <Title style={styles.title}>Instaverse</Title>
      </Header>
      <Home />
      <Footer style={styles.footer}>Sanu@2022 - Instaverse</Footer>
    </Layout>
  );
}

export default App;
