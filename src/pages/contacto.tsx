import React from 'react';
import type { HeadFC } from "gatsby";
import { Button, Col, Form, Input, Row, Typography } from "antd";
import LayoutMain from '../components/layouts/Main';
import MotionHoc from '../components/animation/MotionHC';
import { MdEmail, MdSend } from 'react-icons/md';
import useSendEmail from '../services/contact/useSendEmail';


const { Title } = Typography;

const ContactPage = () => {

    const [form] = Form.useForm();

    const { sendEmail, loading } = useSendEmail();

    const handleFinishForm = () => {
        form.validateFields().then(async (values: any) => {
            console.log(values);
            let result = await sendEmail(values);
            console.log(result);
        }).catch(() => { })
    }

    return <LayoutMain location={"contact"}>
        <Row justify="center">
            <Col>
                <div className="flex items-center">
                    <MdEmail className='mr-2 text-2xl' />
                    <Title level={1} className="futura-font" style={{ color: "rgb(248, 250, 252)", margin: "0px" }}>
                        Contacto
                    </Title>
                </div>
            </Col>
        </Row>
        <Row>
            <Col span={24}>
                <Row>
                    <Col span={23} sm={19} md={15} lg={10} style={{ margin: "0px auto" }}>
                        <Form
                            form={form}
                            layout='vertical'
                            requiredMark
                        >
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        name="name"
                                        label={<p className="text-slate-50">{`Nombre(s)`}</p>}
                                        rules={[{
                                            type: "string"
                                        }, {
                                            required: true,
                                            message: "Este dato es obligatorio"
                                        }]}
                                        required
                                    >
                                        <Input className='shadow shadow-white' placeholder='Escribe aquí tu(s) nombre(s)...' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row gutter={[12, 0]}>
                                <Col span={12}>
                                    <Form.Item
                                        name="subject"
                                        label={<p className="text-slate-50">Asunto</p>}
                                        rules={[{
                                            type: "string"
                                        }, {
                                            required: true,
                                            message: "Este dato es obligatorio"
                                        }]}
                                    >
                                        <Input className='shadow shadow-white' placeholder='Escribe aquí el asunto...' />
                                    </Form.Item>
                                </Col>
                                <Col span={12}>
                                    <Form.Item
                                        name="email"
                                        label={<p className="text-slate-50">Correo electrónico</p>}
                                        rules={[{
                                            type: "email",
                                            message: "El correo electrónico es inválido"
                                        }, {
                                            required: true,
                                            message: "Ingresa tu email para contactarte"
                                        }]}
                                    >
                                        <Input className='shadow shadow-white' placeholder='Escribe aquí tu correo electrónico...' />
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Row>
                                <Col span={24}>
                                    <Form.Item
                                        name="message"
                                        label={<p className="text-slate-50">Mensaje</p>}
                                        rules={[{
                                            type: "string",
                                            message: "El formato del mensaje es inválido"
                                        }, {
                                            required: true,
                                            message: "Escribe el mensaje"
                                        }]}
                                    >
                                        <Input.TextArea className='shadow shadow-white' placeholder='El mensaje no debe de pasar de 512 carácteres...' />
                                    </Form.Item>
                                </Col>
                            </Row>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <Col span={23} sm={19} md={15} lg={10} style={{ margin: "0px auto" }}>
                        <Row justify="end">
                            <Col>
                                <Button icon={<MdSend className="mr-1" />} type="primary" className='bg-blue-600' style={{ display: "flex", alignItems: "center" }}
                                    onClick={handleFinishForm} loading={loading}
                                >
                                    Enviar
                                </Button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Col>
        </Row>

    </LayoutMain>
}

const Main = MotionHoc(ContactPage)

export default Main;


export const Head: HeadFC = () => <title>Contacto | Moisés Fuentes</title>
