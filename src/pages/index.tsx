import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { MdWorkOutline } from "react-icons/md/index";
import { AiOutlineMail } from "react-icons/ai/index";
import { navigate } from "gatsby";
import MotionHoc from "../components/animation/MotionHC";
import LayoutMain from "../components/layouts/Main";



const IndexPage: React.FC<PageProps> = () => {


  const handleRedirectToProjects = () => {
    navigate("/proyectos");
  }

  const handleRedirectToContact = () => {
    navigate("/contacto");
  }
  return <LayoutMain location={"home"}>
    <div className="flex justify-start items-center w-10/12 h-full mx-auto overflow-y-auto py-10">
      <div className="flex flex-col lg:flex-row w-full h-auto">
        <div className="flex justify-center flex-col w-full md:pt-0 sm:w-9/12 mr-16">
          <p className="futura-font text-6xl sm:text-8xl">
            Bienvenido
          </p>
          <div style={{ lineHeight: "1.35" }}>
            <p className="text-sm sm:text-base text-justify list-disc">
              Mi nombre es Moisés Fuentes, desarrollador Fullstack Jr, viviendo actualmente en México, tengo experiencia en el uso del framework GatsbyJs para el desarrollo de aplicaciones web, en conjunto con Express y MongoDB para el manejo de datos del lado del servidor.
            </p>
            <p className="mt-1 text-sm sm:text-base text-justify list-disc">
              Me agradan las interfaces simples y elegantes, combinando funcionalidades complejas pero manejo intuitivo.
            </p>
          </div>
        </div>

        <div className="w-full flex items-center sm:w-5/12 mt-8 lg:mt-0">
          <div>
            <div className="flex items-center">
              <MdWorkOutline className="mr-2 text-lg sm:text-xl text-slate-50" />
              <div className="cursor-pointer border-slate-50 pb-1 border-b-2 duration-300 ease-linear w-4 hover:w-24">
                <p className="futura-font text-xl sm:text-3xl min-w-max" onClick={handleRedirectToProjects}>
                  Proyectos
                </p>
              </div>
            </div>
            <div className="flex items-center mt-6 lg:mt-4">
              <AiOutlineMail className="mr-2 text-lg sm:text-xl text-slate-50" />
              <div className="cursor-pointer border-slate-50 pb-1 border-b-2 duration-300 ease-linear w-4 hover:w-24">
                <p className="futura-font text-xl sm:text-3xl min-w-max" onClick={handleRedirectToContact}>
                  Contacto
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </LayoutMain>

}

const Main = MotionHoc(IndexPage);

export default Main;


export const Head: HeadFC = () => <title>dev Moisés Fuentes</title>
