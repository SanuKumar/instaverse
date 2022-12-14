import React from 'react'
import { Link } from "react-router-dom"
import { Typography, Layout, Image, Button, Avatar } from "antd"
import styles from "./styles"
import LOGO from "../../images/Instaverse.png"

const { Title } = Typography;
const { Header } = Layout

const AppBar = () => {
  const user = null

  return (
    <Header style={styles.header}>
      <Link to="/">
        <div style={styles.homeLink}>
          <Image style={styles.image} width={45} preview="false" src={LOGO} />
          &nbsp;
          <Title style={styles.title}>Instaverse</Title>
        </div>
      </Link>
      {!user ? (
        <Link to="/authform">
          <Button htmlType='button' style={styles.login}>
            Log In
          </Button>
        </Link>)
        :
        (
          <div style={styles.userInfo}>
            <Avatar style={styles.avatar} alt="username" size="large">
              U
            </Avatar>
            <Title style={styles.title} level={4}>
              Sanu
            </Title>
            <Button htmlType='button'>
              Log Out
            </Button>
          </div>
        )}
    </Header>
  )
}

export default AppBar