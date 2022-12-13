import React, { useState } from 'react'
import { useDispatch } from "react-redux"
import { Card, Typography, Tooltip, Image } from "antd"
import { EditOutlined, DeleteTwoTone, HeartTwoTone } from "@ant-design/icons"
import moment from "moment"
import styles from "./styles"
import { deleteStory, likeStory } from '../../actions/stories'

const { Meta } = Card;
const { Link, Paragraph, Text } = Typography

const Story = ({ story, setSelectedId }) => {
  const dispatch = useDispatch()
  const [expand, setExpand] = useState(true)

  return (
    <Card
      style={styles.card}
      cover={<Image src={story.image} />}
      actions={[
        <div style={styles.actions}>
          <Tooltip
            placement='top'
            title="Like"
            color="magenta"
            onClick={() => { dispatch(likeStory(story._id)) }}
          >
            <HeartTwoTone twoToneColor="magenta" />
            &nbsp; {story.likes} &nbsp;
          </Tooltip>
        </div>,
        <Tooltip
          placement='top'
          title="Edit"
        >
          <EditOutlined onClick={() => { setSelectedId(story._id) }} />
        </Tooltip>,
        <Tooltip
          placement='top'
          title="Delete"
          color="red">
          <DeleteTwoTone twoToneColor="red" onClick={() => dispatch(deleteStory(story._id))} />
        </Tooltip>
      ]}
    >
      <Meta title={story.username} />
      <Paragraph
        style={{ margin: 0 }}
        ellipsis={{
          row: 2,
          expandable: true,
          symbol: "more",
          onExpand: () => {
            setExpand(false)
          },
          onEllipsis: () => {
            setExpand(true)
          }
        }}>
        {story.caption}
      </Paragraph>
      {expand ?
        <Link href="#">
          {story.tags.split(" ").map((tag) => `#${tag}`)}
        </Link> :
        null}
      <br />
      <Text type="secondary">{moment(story.postDate).fromNow()}</Text>
    </Card>
  )
}

export default Story