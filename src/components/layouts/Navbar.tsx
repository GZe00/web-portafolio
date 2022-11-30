import React from 'react';
import { Button, Col, Row, Select, Switch } from "antd";
import { MdBook, MdDarkMode, MdEmail, MdHome, MdOutlineLightMode } from "react-icons/md/index"
import LabelLenguaje from '../lenguaje/Label';
// import useConfig from '../hooks/useConfig';
import { navigate } from "gatsby";


const { Option } = Select;

interface PropComponent {
    location: string
}


const Navbar = ({ location }: PropComponent) => {


    // const { preferences, setPreferences }: any = useConfig();

    const redirectToHome = () => {
        navigate("/");
    }

    const redirectToContact = () => {
        navigate("/contacto");
    }

    const redirectToProjects = () => {
        navigate("/proyectos");
    }

    return <div className="w-10/12 mx-auto h-auto py-4 text-slate-50">
        <Row gutter={[0, 14]}>
            {/* <Col span={24}>
                <Row align="middle" gutter={[12, 8]} className="flex items-center justify-center md:justify-end">
                    <Col>
                        <Row align="middle">
                            <Col>
                                <Switch className='bg-black my-auto' checkedChildren={<div className="flex items-center">
                                    <MdOutlineLightMode className="w-4" />
                                    <p className="m-0">
                                        Claro
                                    </p>
                                </div>}
                                    unCheckedChildren={<div className="flex items-center">
                                        <MdDarkMode className="w-4" />
                                        <p className="m-0">
                                            Oscuro
                                        </p>
                                    </div>} defaultChecked />
                            </Col>
                        </Row>
                    </Col>
                    <Col>
                        <Select defaultValue={"es"} style={{ width: "100%" }}>
                            <Option key="es">
                                <LabelLenguaje languaje="es" />
                            </Option>
                            <Option key="en">
                                <LabelLenguaje languaje="en" />
                            </Option>
                            <Option key="de">
                                <LabelLenguaje languaje="de" />
                            </Option>
                        </Select>
                    </Col>
                </Row>
            </Col> */}
            {
                location && location !== "home" ?
                    <Col span={24}>
                        <div className="block md:hidden w-full">
                            <Row gutter={[0, 8]} justify="space-around">
                                <Col>
                                    <Button type="link" style={{ display: "flex", alignItems: "center" }} className="bg-slate-800" icon={<MdHome className='mr-1' />}
                                        onClick={redirectToHome}>
                                        Inicio
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type="link" style={{ display: "flex", alignItems: "center" }} className="bg-slate-800" icon={<MdBook className='mr-1' />}
                                        onClick={redirectToProjects}>
                                        Proyectos
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type="link" style={{ display: "flex", alignItems: "center" }} className="bg-slate-800" icon={<MdEmail className='mr-1' />}
                                        onClick={redirectToContact}>
                                        Contacto
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                        <div className="hidden md:block">
                            <Row gutter={[12, 0]} justify="start">
                                <Col>
                                    <Button type="link" style={{ display: "flex", alignItems: "center" }} className="bg-slate-800" icon={<MdHome className='mr-1' />}
                                        onClick={redirectToHome}>
                                        Inicio
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type="link" style={{ display: "flex", alignItems: "center" }} className="bg-slate-800" icon={<MdBook className='mr-1' />}
                                        onClick={redirectToProjects}>
                                        Proyectos
                                    </Button>
                                </Col>
                                <Col>
                                    <Button type="link" style={{ display: "flex", alignItems: "center" }} className="bg-slate-800" icon={<MdEmail className='mr-1' />}
                                        onClick={redirectToContact}>
                                        Contacto
                                    </Button>
                                </Col>
                            </Row>
                        </div>
                    </Col> : null
            }
        </Row>
    </div>
}

export default Navbar