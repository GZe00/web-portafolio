import Head from 'next/head';
import { Button, Form, Input, Modal, Typography } from 'antd';
import { pastJobs } from '@/utils/works';
import CardProject from '@/components/CardProject';
import { TbPuzzle } from "react-icons/tb";
import { BsCode } from "react-icons/bs";
import { DiGitMerge } from "react-icons/di";
import { MdOutlineDesignServices } from "react-icons/md";
import emailjs from '@emailjs/browser';
import { publicKey, serviceId, templateId } from '@/config';
import { useRef, useState } from 'react';


const { Text, Title } = Typography;

export default function Home() {
  const [form] = Form.useForm();
  const formRef = useRef(null);
  const [loading, setLoading] = useState<boolean>(false);


  const handleSendForm = () => {
    form.validateFields().then((values) => {
      setLoading(true);
      emailjs.send(serviceId, templateId, {
        from_name: values.user_name,
        reply_to: values.user_email,
        message: values.message
      }, publicKey).then(() => {

        return Modal.success({
          title: "Mensaje envíado",
          content: <>
            Gracias por tu interés, pronto me pondré en contacto contigo!
          </>
        })
      }).catch(() => {
        return Modal.error({
          title: "Conflicto al enviar el mensaje",
          content: <div className='flex flex-col'>
            <p>
              Lamento que tu mensaje no se haya podido envíar, pudo haber sido un error mío o del servicio externo que utilizo.
            </p>
            <p>
              Te proporciono mi correo de contacto, este inconveniente no impedirá el contacto conmigo!
            </p>
            <p className='text-blue-500'>
              dev.gze.moises@gmail.com
            </p>
          </div>
        })
      }).finally(() => {
        setLoading(false);
        form.resetFields();
      });
    }).catch(() => { });
  }

  return (
    <>
      <Head>
        <title>Portafolio de Moisés</title>
        <meta name="description" content="Gracias por visitar mi portafolio." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/icon.png" />
      </Head>

      {/* Presentación */}

      <div className='w-full h-auto md:h-screen  bg-blue-100'>

        {/* Navbar */}
        {/* <nav className="w-full bg-slate-800 text-white" style={{ height: "5%" }}> 
          Esto es el navbar
        </nav>*/}

        <div className='hidden md:flex w-full h-full text-white relative'>

          <div className='absolute w-full h-full top-[25%] left-[0%]'>
            <img className='w-5/12 h-1/2 object-cover rounded-tr-2xl rounded-br-2xl'
              src="/static/images/profile.jpeg" alt="Moisés Fuentes perfil" />
          </div>

          <div className='absolute h-full top-[35%] left-[50%]'>
            <div className='w-full mx-auto h-1/5 my-auto px-12 flex flex-col gap-8'>
              <div className='flex flex-col'>
                <div>
                  <Title level={1} style={{ color: "#FFFFFF", margin: "0px" }}>
                    Soy Moisés fuentes.
                  </Title>
                </div>
                <div>
                  <Title level={1} style={{ color: "#FFFFFF", margin: "0px" }}>
                    Desarrollador FullStack M.E.R.N.
                  </Title>
                </div>
                <div>
                  <Title level={1} style={{ color: "#FFFFFF", margin: "0px" }}>
                    en México.
                  </Title>
                </div>
              </div>

              <div className='text-justify'>
                <Text className='text-white' strong><span className='text-4xl'>H</span>ola, soy un desarrollador Fullstack MERN con experiencia en el desarrollo de aplicaciones web, componentes, servicios API y desarrollo de diseño web, orientado a la eficiencia y escalabilidad de los resultados.</Text>
              </div>

            </div>
          </div>

          <div className='w-1/3 h-full bg-black ' />

          <div className='w-2/3 h-full bg-zinc-900 flex justify-center' />


        </div>

        <div className='flex flex-col md:hidden w-full h-full text-white '>

          <div className='w-full h-auto bg-black '>

            <img className='w-full h-auto object-cover'
              src="/static/images/profile.jpeg" alt="Moisés Fuentes perfil" />
          </div>

          <div className='w-full h-full bg-zinc-900 py-12 flex justify-center'>
            <div className='w-full mx-auto h-full flex flex-col gap-8 justify-center items-center px-12'>
              <div className='flex flex-col'>
                <div>
                  <Title level={1} style={{ color: "#FFFFFF", margin: "0px" }}>
                    Soy Moisés fuentes.
                  </Title>
                </div>
                <div>
                  <Title level={1} style={{ color: "#FFFFFF", margin: "0px" }}>
                    Desarrollador FullStack M.E.R.N.
                  </Title>
                </div>
                <div>
                  <Title level={1} style={{ color: "#FFFFFF", margin: "0px" }}>
                    en México.
                  </Title>
                </div>
              </div>

              <div className='text-justify'>
                <Text className='text-white' strong><span className='text-4xl'>H</span>ola, soy un desarrollador Fullstack MERN con experiencia en el desarrollo de aplicaciones web, componentes, servicios API y desarrollo de diseño web, orientado a la eficiencia y escalabilidad de los resultados.</Text>
              </div>

            </div>
          </div>


        </div>

      </div>

      {/* Donde he trabajado */}

      <div className='w-full h-auto py-16 px-8 bg-black '
      >

        <div>
          <Text className='text-slate-400' strong >EXPERIENCIAS DE TRABAJO</Text>
        </div>

        <div>
          <Title style={{ color: "rgb(255, 255, 255)" }} level={2}>Empresas y Startup donde he trabajado en el pasado.</Title>
        </div>

        <div className='flex flex-wrap gap-8 md:gap-0'>

          {
            pastJobs.map((job, index: number) => {
              return <div className="w-full md:w-4/12" key={index}>
                <div className='w-10/12 mx-auto'>
                  <div>
                    <p className='text-8xl text-slate-400 font-medium'>{index + 1}</p>
                  </div>
                  <div>
                    <div className='text-2xl font-medium'>
                      <p className={`${job.color} inline`}>{job.name}</p>
                      <p className='inline text-white'>, {job.position}</p>
                    </div>
                  </div>
                  <div className='w-11/12 mx-auto'>
                    <p className='text-slate-400 text-lg text-justify'>
                      {job.description}
                    </p>
                  </div>
                </div>
              </div>
            })
          }
        </div>

      </div>

      {/* Frase personal */}

      <div className='w-full h-auto md:h-80/vh bg-orange-100'>
        <div className='w-full h-full flex flex-col md:flex-row'>
          <div className='w-full md:w-1/2 py-12 h-full'>
            <div className='w-10/12 h-full mx-auto flex flex-col justify-center'>
              <Title>Filosofía y valores</Title>
              <div className='flex flex-col gap-3'>
                <Text type="secondary" strong className='text-justify'>
                  <span className='text-3xl'>S</span>oy una persona que se guía por una filosofía basada en la <span className='underline'>integridad</span>, la <span className='underline'>autenticidad</span> y la <span className='underline'>empatía</span>. Creo que es importante ser fiel a uno mismo y vivir de acuerdo con los valores y principios personales, incluso cuando es difícil.
                </Text>

                <Text type="secondary" strong className='text-justify'>
                  La honestidad y la transparencia son fundamentales en todas mis relaciones, y valoro la sinceridad tanto en mí mismo como en los demás.
                </Text>

                <Text type="secondary" strong className='text-justify'>
                  Además, creo que es esencial tener empatía y compasión por los demás. Trato de ponerme en el lugar de las personas y entender sus perspectivas y necesidades, incluso si no estoy de acuerdo con ellas. Creo que esto ayuda a construir relaciones saludables y significativas.
                </Text>

                <Text type="secondary" strong className='text-justify'>
                  También valoro el <span className='underline'>aprendizaje continuo</span> y la exploración intelectual. Me gusta cuestionar las cosas y buscar respuestas a través de la investigación y la reflexión. Creo que esto me ayuda a tener una mente abierta y a crecer como persona.
                </Text>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/2 h-full'>
            <img className='w-full h-full object-cover' src="https://images.pexels.com/photos/1181376/pexels-photo-1181376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Imagen representativa, colaboración" />
          </div>
        </div>
      </div>

      {/* Habilidades */}

      <div className='w-full h-auto py-12 flex flex-col gap-4 bg-black'>

        <div className='w-full h-auto md:h-80/vh flex flex-col gap-8 md:flex-row text-white'>
          <div className='w-11/12 mx-auto h-auto md:w-1/3 md:h-3/5 my-auto items-start flex flex-col px-6'>
            <div >
              <Title style={{ color: "#FFFFFF" }} level={1}>Habilidades</Title>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='w-full h-auto px-3 py-1 text-justify'>
                <Text className='text-white'>
                  Tengo una amplia experiencia en el desarrollo de software utilizando React.js, Node.js y MongoDB. Poseo sólidas habilidades de programación y un enfoque orientado a los resultados que me permite entregar proyectos de alta calidad de manera eficiente.
                </Text>
              </div>
            </div>
          </div>

          <div className='w-full h-auto overflow-y-auto md:w-2/3 flex flex-col'>

            <div className='w-full h-full flex flex-col md:flex-row items-center'>

              <div className='w-full md:w-1/2 flex flex-col items-center md:items-start'>
                <div className='w-56 h-56'>
                  <div className='flex flex-col items-center'>
                    <TbPuzzle className='text-5xl text-blue-700' />
                    <Title level={2} style={{ color: "#FFFFFF" }}>Frameworks</Title>
                  </div>

                  <div className='flex flex-col'>
                    <Text className='text-gray-400'>React.js</Text>
                    <Text className='text-gray-400'>Gatsby.js</Text>
                    <Text className='text-gray-400'>Next.js</Text>
                    <Text className='text-gray-400'>Express.js</Text>
                    <Text className='text-gray-400'>TailwindCSS</Text>
                  </div>
                </div>
              </div>

              <div className='w-full md:w-1/2 flex flex-col items-center md:items-start'>
                <div className='w-56 h-56'>
                  <div className='flex flex-col items-center'>
                    <BsCode className='text-5xl text-blue-700' />
                    <Title level={2} style={{ color: "#FFFFFF" }}>Lenguajes de programación</Title>
                  </div>

                  <div className='flex flex-col '>
                    <Text className='text-gray-400'>JavaScript</Text>
                    <Text className='text-gray-400'>Python</Text>
                    <Text className='text-gray-400'>C#</Text>
                    <Text className='text-gray-400'>Java</Text>
                  </div>
                </div>
              </div>


            </div>

            <div className='w-full h-full flex flex-col md:flex-row items-center'>

              <div className='w-full md:w-1/2 flex flex-col items-center md:items-start'>
                <div className='w-56 h-56'>
                  <div className='flex flex-col items-center'>
                    <DiGitMerge className='text-5xl text-blue-700' />
                    <Title level={2} style={{ color: "#FFFFFF" }}>Control de versionamiento</Title>
                  </div>

                  <div className='flex flex-col '>
                    <Text className='text-gray-400'>Git</Text>
                    <Text className='text-gray-400'>GitHub</Text>
                    <Text className='text-gray-400'>GitLab</Text>
                    <Text className='text-gray-400'>BitBucket</Text>
                    <Text className='text-gray-400'>Azure devops</Text>
                  </div>
                </div>
              </div>


              <div className='w-full md:w-1/2 flex flex-col items-center md:items-start'>
                <div className='w-56 h-56'>
                  <div className='flex flex-col items-center'>
                    <MdOutlineDesignServices className='text-5xl text-blue-700' />
                    <Title level={2} style={{ color: "#FFFFFF" }}>UX/UI</Title>
                  </div>

                  <div className='flex flex-col '>
                    <Text className='text-gray-400'>Figma</Text>
                    <Text className='text-gray-400'>Adobe XD</Text>
                    <Text className='text-gray-400'>Dribbble</Text>
                  </div>
                </div>
              </div>




            </div>

          </div>
        </div>


        <div className='w-full h-auto flex flex-wrap justify-around gap-4 px-4'>

          <div className='w-96 h-auto px-6 py-3 bg-blue-700 opacity-25 hover:opacity-100 ease-out duration-200 cursor-help rounded text-justify relative'>
            <Text className='text-white' >
              En cuanto a React.js, tengo experiencia en la creación de aplicaciones web escalables y receptivas utilizando esta tecnología. Puedo desarrollar componentes personalizados y manejar la integración con bibliotecas externas y APIs. Además, estoy familiarizado con las prácticas recomendadas de React.js, como el enrutamiento, la gestión del estado y la optimización del rendimiento.
            </Text>
          </div>

          <div className='w-96 h-auto px-6 py-3 bg-blue-700 opacity-25 hover:opacity-100 ease-out duration-200 cursor-help rounded text-justify relative'>
            <Text className='text-white' >
              Por otro lado, con Express.js tengo habilidades avanzadas en la creación de aplicaciones de servidor escalables y de alta disponibilidad utilizando este framework. Puedo diseñar y construir API REST, también tengo experiencia en la integración de Node.js con otras tecnologías, como bases de datos y sistemas de gestión de contenido.
            </Text>
          </div>


          <div className='w-96 h-auto px-6 py-3 bg-blue-700 opacity-25 hover:opacity-100 ease-out duration-200 cursor-help rounded text-justify'>
            <Text className='text-white'>
              Con MongoDB, tengo habilidades avanzadas en la creación y administración de bases de datos NoSQL utilizando esta tecnología. Puedo diseñar e implementar esquemas de base de datos eficientes y escalables, y también tengo experiencia en la configuración y administración de clústeres de MongoDB.
            </Text>
          </div>
        </div>



      </div>

      {/* Proyectos */}

      <div className='w-full h-auto bg-black text-white flex flex-col md:flex-row gap-8'>

        <div className='w-11/12 mx-auto md:w-1/2'>
          <div className='flex flex-col gap-1 px-6'>
            <div>
              <Text className='text-slate-400' strong >MIS PROYECTOS</Text>
            </div>
            <div>
              <Title level={1} style={{ color: "#FFFFFF" }}>Mi experiencia de estos 2 últimos años plasmada en mis proyectos.</Title>
            </div>
          </div>
          {/* Cards */}
          <div className='w-full flex flex-col gap-8'>

            <CardProject
              image={{
                url: "simulapro.png",
                alt: "Imagen de prueba proyecto 1"
              }}
              title="Simulapro App"
              description="Aplicación web donde los usuarios pueden crear, responder y compartir con otros usuarios dentro de la plataforma cuestionarios, para estudiar un tema específico o poner a prueba su conocimiento de un tema. Este proyecto es un MVP. NOTA: Utilizo un servicio gratuito, por lo que el sitio donde se aloja mi proyecto, al entrar en inactividad, tarda en responder la primera vez, por lo que pido paciencia o un par de minutos para que el servicio esté activo y pueda utilizar la aplicación."
              devTools={["gatsby", "tailwindcss", "antd", "typescript", "expressjs", "mongodb"]}
              site='https://simulapro.netlify.app/'
            />

            <CardProject
              image={{
                url: "ticketplus.png",
                alt: "Imagen de prueba proyecto 1"
              }}
              title="Mi primer sitio web"
              description="Al inicio de mi aprendizaje en el mundo del desarrollo de software, me puse como objetivo prácticar y crear un sitio web responsivo empleado con lo más básico de las herramientas técnicas para el desarrollo, y, dando como resultado, en sitio web para la compra de boletos de artistas de talla internacional."
              devTools={["html", "css"]}
              site="https://ticket-plus-moises.netlify.app/"
            />

            <CardProject
              image={{
                url: "fakeig.png",
                alt: "Imagen de prueba proyecto 1"
              }}
              title="Fake Instagram"
              description="Para continuar poniendo en práctica mis habilidades en el diseño, me puse como objetivo intentar clonar el diseño del sitio web de Instagram, sin consumir alguna API externa o pidiendo información adicional al usuario."
              devTools={["html", "css"]}
              site="https://fake-instagram-by-moises.netlify.app/"
            />

          </div>


        </div>

        <div className='w-11/12 mx-auto md:w-1/2 flex flex-col gap-8'>

          <CardProject
            image={{
              url: "tecoshops.png",
              alt: "Imagen de prueba proyecto 1"
            }}
            title="Tecoshops (Demo)"
            description="Marketplace web para la compra, venta y publicación de productos, dando la opción de servicio a domicilio para los usuarios. Se manejan diferentes roles y se espera que sea una aplicación de alto impacto para el mundo real al momento de lanzamiento. Actualmente es un proyecto en desarrollo (40%) y se publicará como un MVP. NOTA: Utilizo un servicio gratuito, por lo que el sitio donde se aloja mi proyecto, al entrar en inactividad, tarda en responder la primera vez, por lo que pido paciencia o un par de minutos para que el servicio esté activo y pueda utilizar la aplicación."
            devTools={["gatsby", "tailwindcss", "antd", "typescript", "expressjs", "mongodb"]}
            site="https://tecoshops.netlify.app/"
          />


          <CardProject
            image={{
              url: "eccomerce.png",
              alt: "Imagen de prueba proyecto 1"
            }}
            title="ECommerce (Demo)"
            description="Aplicación web donde se realiza una simulación de proceso de compra de un producto en línea, pidiendo datos de domicilio del usuario, responsividad del sitio e información de cada producto. Se consume una API externa mediante una API Key."
            devTools={["reactjs", "antd", "tailwindcss"]}
            site="https://eccomerce-mfuentes.netlify.app/"
          />

          <CardProject
            image={{
              url: "vidrios.png",
              alt: "Imagen de prueba proyecto 1"
            }}
            title="Diseño página web"
            description="Esta S.P.A. se desarrolló en poco menos de 3 horas, tuvo como próposito mostrar a un cliente la capacidad de mi trabajo y el cómo su negocio podría verse en línea, manteniendo un trabajo rápido y sin tanta inversión de tiempo para no comprometer en nada al cliente y solo mostrarle superficialmente mis capacidades."
            devTools={["reactjs", "css", "antd", "tailwindcss"]}
            site="https://vidriosyaluminiosheredia.netlify.app/"
          />
        </div>
      </div>

      {/* Contacto */}

      <div className='w-full h-auto bg-black py-12 text-white flex flex-col md:flex-row gap-8 px-8'>
        <div className='w-11/12 md:w-1/2 flex flex-col gap-4'>
          <Title level={1} style={{ color: "#FFFFFF" }}>¡Envíame un correo!</Title>
          <Text className='text-slate-400' strong >Ahora que has conocido un poco de mi y de mis trabajo, quizás estés interesado trabajar conmigo.</Text>
        </div>
        <div className='w-11/12 md:w-1/2 mx-auto'>
          <Form
            ref={formRef}
            form={form}
            layout='vertical'
            requiredMark
          >

            <div className='flex flex-col'>
              <div className=''>
                <Form.Item
                  label={<Text className='text-white'>Nombre</Text>}
                  name="user_name"
                  rules={[{
                    required: true,
                    message: "Porfavor completa este campo..."
                  }]}
                  required
                >
                  <Input placeholder='Escribe aquí tu nombre...' />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  label={<Text className='text-white'>Correo electrónico</Text>}
                  name="user_email"
                  rules={[{
                    required: true,
                    message: "Porfavor completa este campo..."
                  }, {
                    type: "email",
                    message: "Formate de correo electrónico inválido."
                  }]}
                  required
                >
                  <Input placeholder='Ingresa aquí tu correo electrónico...' />
                </Form.Item>
              </div>
              <div>
                <Form.Item
                  label={<Text className='text-white'>Mensaje</Text>}
                  name="message"
                  rules={[{
                    required: true,
                    message: "Porfavor completa este campo..."
                  }, {
                    max: 512,
                    message: "Hasta 512 carácteres por mensaje..."
                  }]}
                  required
                >
                  <Input.TextArea placeholder='Deja tu mensaje en este espacio en blanco...' />
                </Form.Item>
              </div>


              <Button type="primary" onClick={handleSendForm} loading={loading}>
                Enviar
              </Button>

            </div>

          </Form>
        </div >
      </div >

      {/* Footer */}
      < div className='w-full h-auto py-4 bg-slate-900 text-white' >
        <div className='flex flex-col'>
          <div className='flex'>
            <div className='w-11/12 mx-auto'>
              <Text className='text-4xl' style={{ color: "rgb(255,255,255)" }}>Moisés Fuentes</Text>
            </div>
          </div>
          <div className='flex justify-center'>
            <p>2023 Portafolio Moisés™ Todos los derechos reservados</p>
          </div>
        </div>
      </div >
    </>
  )
}
