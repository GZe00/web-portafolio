import React from 'react';
import { Card, Col, Divider, Row, Tooltip, Typography } from "antd";
import type { HeadFC } from "gatsby";
import LayoutMain from '../../components/layouts/Main';
import MotionHoc from '../../components/animation/MotionHC';
import jsonData from "../../data/projects.json";

import cheemsapp from "../../images/projects/cheems.png";
import ticketplus from "../../images/projects/concierto.png";
import eccomerce from "../../images/projects/eccomercedemo.png";
import simulapro from "../../images/projects/simulapro.png";
import { CaretRightOutlined } from '@ant-design/icons';

const { Text, Title } = Typography;


const ProjectsPage = () => {

    const imageProject = (key: string) => {
        switch (key) {
            case "simulapro":
                return simulapro;
            case "ticketplus":
                return ticketplus;
            case "eccomerce":
                return eccomerce;
            case "cheemsapp":
                return cheemsapp;
            default:
                return simulapro;
        }
    }

    return <LayoutMain location="projects">

        <Row gutter={[0, 14]}>
            <Col span={24}>
                <Row justify="center">
                    <Col>
                        <Title level={1} className="futura-font text-slate-50" style={{ color: "rgb(248, 250, 252)" }}>Proyectos realizados</Title>
                    </Col>
                </Row>
            </Col>
            <Col span={22} style={{ margin: "0px auto" }}>
                <Row justify="center">
                    {
                        jsonData && jsonData.projects && jsonData.projects.length > 0 ?
                            <>
                                {
                                    jsonData.projects.map((item: any) => {
                                        return <Col span={22} sm={8} lg={6} style={{ margin: "4px" }}>
                                            <Card
                                                title={<div className="flex items-center">
                                                    <img className="w-8 h-8 mr-2 object-cover" src={imageProject(item.key)} alt="icono" />
                                                    <p className='m-0'>{item.title}</p>
                                                </div>}
                                            >
                                                <a href={item.siteUrl} target="_blank" rel='noopener noreferrer' className="text-blue-700">
                                                    <CaretRightOutlined /> Ir a {item.title}
                                                </a>
                                                <Divider style={{ margin: "6px 0" }} dashed />
                                                <div className='text-justify'>
                                                    <Text >{item.description}</Text>
                                                </div>
                                                <Divider style={{ margin: "6px 0" }} dashed />
                                                <Title level={5}>Herramientras utilizadas</Title>
                                                <Row justify="space-around" gutter={[4, 4]}>
                                                    {
                                                        item.technologies.map((framework: any) => {
                                                            return <Col>
                                                                <a href={framework.siteUrl} target="_blank" rel='noopener noreferrer'>
                                                                    <Tooltip title={framework.name}>
                                                                        <img className="hover:scale-125 ease-out duration-200 cursor-pointer w-8 h-8" src={framework.icon} alt={`icono del framework ${framework.name} utilizado `} />
                                                                    </Tooltip>
                                                                </a>
                                                            </Col>
                                                        })
                                                    }
                                                </Row>
                                            </Card>
                                        </Col>
                                    })
                                }
                            </> : null
                    }
                </Row>
            </Col>
        </Row>

    </LayoutMain>
}


const Main = MotionHoc(ProjectsPage)

export default Main;

export const Head: HeadFC = () => <title>Proyectos | Moisés Fuentes</title>