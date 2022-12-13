import React, { useState } from 'react'
import { Card, Typography, Tooltip, Image } from "antd"
import { EditOutlined, DeleteTwoTone, HeartTwoTone } from "@ant-design/icons"
import moment from "moment"
import styles from "./styles"

const { Meta } = Card;
const { Link, Paragraph, Text } = Typography

const Story = ({ story, setSelectedId }) => {
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
            onClick={() => { }}
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
          <DeleteTwoTone twoToneColor="red" onClick={() => { }} />
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