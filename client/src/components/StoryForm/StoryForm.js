import React from 'react'
import { Card, Form, Input, Typography, Button } from "antd"
import FileBase64 from "react-file-base64"
import styles from "./styles"
import e from 'cors'

const { Title } = Typography

const StoryForm = () => {
  const [form] = Form.useForm()

  const onSubmit = () => { }

  return (
    <Card style={styles.card} title={
      <Title level={4} style={styles.title}>

      </Title>
    }>
      <Form
        form={form}
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 16 }}
        layout="horizontal"
        size="middle"
        onFinish={onSubmit}
      >
        <Form.Item name="username" label="Username" rules={[{ required: true }]}>
          <Input allowClear />
        </Form.Item>
        <Form.Item name="caption" label="Caption" rules={[{ required: true }]}>
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} /> 
        </Form.Item>
        <Form.Item name="tags" label="Tags">
          <Input.TextArea allowClear autoSize={{ minRows: 2, maxRows: 6 }} />
        </Form.Item>
        <Form.Item name="image" label="Image" rules={[{ required: true }]}>
          <FileBase64
            type="file"
            multiple={false}
            onDone={() => {
              form.setFields({
                image: e.base64
              })
            }}
          />
        </Form.Item>
        <Form.Item name="image" label="Image" rules={[{ required: true }]}>
          
        </Form.Item>
      </Form>
    </Card>
  )
}

export default StoryForm