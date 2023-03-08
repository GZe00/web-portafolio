import React, { FC } from 'react';
import { Button, Tooltip, Typography } from 'antd';
import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';



const { Text, Title } = Typography;

interface ComponentProps {
    image: {
        url: string,
        alt: string
    },
    title: string
    description: string
    devTools: ("gatsby" |
        "typescript" |
        "mongodb" |
        "antd" |
        "tailwindcss" |
        "expressjs" |
        "html" |
        "css" |
        "reactjs")[],
    site: string
}

const tools = [
    {
        key: "gatsby",
        name: "Gatsby JS",
        icon: "https://www.fermicoding.com/sites/default/files/styles/blog_page_desktop_x_1/public/2021-08/G%20js.webp?itok=naknnzR1",
        siteUrl: "https://www.gatsbyjs.com/"
    },
    {
        key: "typescript",
        name: "Typescript",
        icon: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Typescript_logo_2020.svg",
        siteUrl: "https://www.typescriptlang.org/"
    },
    {
        key: "mongodb",
        name: "MongoDB",
        icon: "https://infinapps.com/wp-content/uploads/2018/10/mongodb-logo.png",
        siteUrl: "https://www.mongodb.com/home"
    },
    {
        key: "antd",
        name: "Ant Design",
        icon: "https://avatars.githubusercontent.com/u/12101536?s=200&v=4",
        siteUrl: "https://ant.design/"
    },
    {
        key: "tailwindcss",
        name: "Tailwind CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
        siteUrl: "https://tailwindcss.com/"
    },
    {
        key: "expressjs",
        name: "Express JS",
        icon: "https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234-p-500.png",
        siteUrl: "https://expressjs.com/"
    },
    {
        key: "html",
        name: "HTML",
        icon: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
        siteUrl: "https://developer.mozilla.org/es/docs/Web/HTML"
    },
    {
        key: "css",
        name: "CSS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
        siteUrl: "https://developer.mozilla.org/es/docs/Web/CSS"
    },
    {
        key: "reactjs",
        name: "React JS",
        icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/640px-React.svg.png",
        siteUrl: "https://es.reactjs.org/"
    }
];


const CardProject: FC<ComponentProps> = ({ image,
    title,
    description,
    devTools,
    site }) => {
    return (
        <div className='w-9/12 mx-auto h-auto flex flex-col'>

            <img
                className='object-contain w-full h-full'
                src={`/static/images/${image.url}`}
                alt={image.alt} />

            <div className='w-full h-auto bg-zinc-900 flex flex-col gap-1 py-4'>
                <div className='px-8 py-2'>
                    <Title level={2} style={{ color: "#FFFFFF" }}>{title}</Title>
                    <div className='text-justify'>
                        <Text className='text-white'>
                            {description}
                        </Text>
                    </div>
                </div>
                <div className='w-full justify-center flex gap-4 flex-wrap'>
                    {
                        devTools && devTools.length > 0 ?
                            devTools.map((value, index: number) => {
                                let tool = tools.find(x => x.key === value)
                                if (tool) {
                                    return <Tooltip placement='bottom' title={tool.name} key={index}>
                                        <Link href={tool.siteUrl} passHref target='_blank' rel="noopener noreferrer">
                                            <img className='w-8 h-8 object-cover' src={tool.icon} alt={`Imagen icono ${index}`} />
                                        </Link>
                                    </Tooltip>
                                }
                            }) : null
                    }
                </div>
                <div className='flex justify-end'>
                    <Link href={site} passHref target='_blank' rel="noopener noreferrer">
                        <Button type="link" icon={<HiOutlineExternalLink />} style={{ display: "flex", alignItems: "center", gap: "4px" }}>Ir al sitio</Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardProject;