import { Alert, Button, Checkbox, Divider, Flex, Form, Input, Space, Typography } from 'antd';
import { onFinish } from './api/api';
import { useState } from 'react';


const { Title } = Typography;




const App = () => {
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)

  const handleFinish = (values) => {
    Promise.resolve(onFinish(values)).then(() => {
      setSuccess(true)
      setError(false)
    }).catch((error) => {
      setError(true)
      setSuccess(false)
      console.error(error);
    })
  }

  return (

    <Space style={{ position: "relative", left: "40%", top: "50px" }}>

      <Flex vertical align='center' >
        <Title>Авторизация</Title>
        <Divider style={{ maxWidth: 500 }} />
        <p>Вход при помощи почты и пароля:</p>
        <Form
          name="basic"
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,

          }}
          initialValues={{
            remember: true,
          }}
          onFinish={handleFinish}

          autoComplete="off"
        >
          <Form.Item

            label="Email"
            name="Email"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите свою почту!',
              },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите свой пароль!',
              },
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            name="remember"
            valuePropName="checked"
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Checkbox>Запомнить меня</Checkbox>
          </Form.Item>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button type="primary" htmlType="submit">
              Войти на сайт
            </Button>
            <span style={{ position: "relative", top: 20 }}>
              {success ? <Alert message="Успешный вход!" type='success' /> : error ? <Alert message="Ошибка!Пользователь не найден" type='error' /> : null}
            </span>
          </Form.Item>
        </Form>
      </Flex>
    </Space>
  )
};
export default App