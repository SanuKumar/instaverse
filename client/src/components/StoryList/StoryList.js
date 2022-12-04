import React from 'react'
import { Row, Spin, Col } from "antd"
import Story from '../Story'
import { useSelector } from "react-redux"

const StoryList = () => {
  const stories = useSelector((state) => state.stories)

  console.log(stories)


  return !stories.length ?
    <div>
      <Spin size="large" ></Spin>
    </div> : (
      <Row gutter={[48, 32]}>
        {stories.map((story) => {
          return (
            <Col key={story._id} lg={24} xl={12} xxl={8}>
              <Story story={story} />
            </Col>
          )
        })}
      </Row>
    )
}

export default StoryList