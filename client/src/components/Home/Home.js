import React, { useEffect } from 'react'
import { useDispatch } from "react-redux"
import StoryList from '../StoryList'
import StoryForm from '../StoryForm'
import { Layout } from "antd"
import styles from "./styles"
import { getStories } from "../../actions/stories"

const { Sider, Content } = Layout

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getStories())
  }, [dispatch])

  return (
    <Layout>
      <Sider style={styles.sider} width={400}>
        <StoryForm />
      </Sider>
      <Content style={styles.content}>
        <StoryList />
      </Content>
    </Layout>
  )
}

export default Home