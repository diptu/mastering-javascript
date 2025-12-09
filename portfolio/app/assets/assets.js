import user_image from './user.jpg'
import logo from './logo.jpg'
import web_icon from './web_dev.jpg'
import ai_icon from './ai_icon.png'
import vscode from './vs_code.jpeg'
import node from './node.png'
import next from './nextjs.png'
import bg_image from './grad.jpg'
import hire from './hire_me.jpg'




export const assets = {
    user_image,
    logo,
    web_icon,
    ai_icon,
    vscode,
    node,
    next,
    bg_image,
    hire
}

export const workData = [
    {
        title: 'Full-Stack Software Engineering',
        description: 'End-to-end development of scalable web applications, specializing in architectural design, API integration, and performance optimization for robust digital solutions.',
        bgImage: './web_dev.jpg'
    },
    {
        title: 'Advanced Data Engineering & ML Ops',
        description: 'Designing, building, and maintaining high-throughput data pipelines (ETL/ELT), ensuring data quality, and implementing robust MLOps strategies for production-ready systems.',
        bgImage: './bg_data.jpg'
    }
];


export const serviceData = [
    {
        icon: assets.web_icon,
        title: 'Full-Stack Development (MERN/PERN)',
        description: "Leveraging the MERN/PERN stack to engineer high-performance, responsive single-page applications, focusing on robust back-end APIs and intuitive front-end user experiences.",
    },
    {
        icon: assets.ai_icon,
        title: 'Applied Machine Learning & AI Solutions',
        description: "Developing, training, and deploying advanced machine learning models (Deep Learning, NLP, Computer Vision) and implementing data science solutions for predictive analytics and intelligent automation.",
    }
];

export const toolsData =
    [
        assets.vscode, assets.node, assets.next
    ]