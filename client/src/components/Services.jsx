import React from 'react'
import { AiFillLinkedin } from 'react-icons/ai'
import { BsShieldFillCheck } from 'react-icons/bs'
import { GiBreakingChain, GiGraduateCap } from 'react-icons/gi'
import { CardBody, Card, CardTitle, CardSubtitle, CardText } from 'reactstrap'

const ServiceCard = ({ color, title, icon, subtitle }) => (
  <div className='flex flex-row justify-start items-center white-glassmorphism p-3 m-2 cursor-pointer hover:shadow-xl w-2/3'>
    <div className={`w-10 h-10 rounded-full flex justify-center items-center ${color}`} >
      {icon}
    </div>
    <div className='ml-5 flex flex-col flex-1'>
      <h1 className='mt-2 text-white text-lg'>{title}</h1>
      <p className='mt-2 text-white text-sm md:w-9/12'>{subtitle}</p>
    </div>
  </div >
)

const Services = () => {
  return (
    <div className='w-full h-full'>
      <div className='flex flex-row md:flex-col w-full py-3 justify-center items-center '>
        <div className='flex mf:flex-row  items-center justify-between md:p-20   '>
          <div className='flex-1 flex flex-col justify-start items-start'>
            <h1 className='text-white text-3xl sm:text-5xl py-2 pl-10 text-gradient text-start'>
              Think even bigger
              <br />
              you think
            </h1>
          </div>
        </div>
        <div className='flex-1 flex flex-col justify-center items-center'>
          <ServiceCard
            color="bg-[#0038C2]"
            title="Business Areas"
            icon={<GiBreakingChain
              fontSize={21} className="text-white" />}
            subtitle='Blockchain solutions on applications for corporations, governments and financial industries.'
          />
          <ServiceCard
            color="bg-[#0038C2]"
            title="Offers"
            icon={<GiGraduateCap fontSize={25} className="text-white" />}
            subtitle='With the unique BaaS experience, manage all your DApp components from a single platform, gain instant access to the global network.'
          />
          <ServiceCard
            color="bg-[#0038C2]"
            title="Security Guaranteed"
            icon={<BsShieldFillCheck fontSize={21} className="text-white" />}
            subtitle='Security is guaranteed. We always maintain privacy and mainting the quality of our products.'
          />
          <ServiceCard
            color="bg-[#0038C2]"
            title="Linkedin Address"
            icon={<AiFillLinkedin fontSize={21} className="text-white" />}
            subtitle={<a href='https://www.linkedin.com/company/chainerist/' className='hover:text-white'>https://www.linkedin.com/company/chainerist/</a>}
          />


        </div>

      </div>


      <div className='flex my-10 justify-center h-full w-full'>
        <Card className='mx-5'
          style={{
            width: '18rem'
          }}
        >
          <img
            alt="Sample"
            src="https://www.chainerist.com/wp-content/uploads/2016/09/business-newspaper-1024x576.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">
              Business Design
            </CardTitle>


            <CardText>
              By providing your company with unmatched BaaS experience on the BSN Network, we help you plan and organize your DApp applications and manage all components from one platform without the need to be a blockchain expert.
            </CardText>

          </CardBody>
        </Card>
        <Card className='mx-5'
          style={{
            width: '18rem'
          }}
        >
          <img
            alt="Sample"
            src="https://www.chainerist.com/wp-content/uploads/2017/01/sign-documents-1024x576.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">
              Strategy Planning
            </CardTitle>

            <CardText>
              The strategic planning service that we offer you will help you take you one step ahead with technology revolution Blockchain applications, expand your Mission and define your Vision.
            </CardText>

          </CardBody>
        </Card>
        <Card className='mx-5'
          style={{
            width: '18rem'
          }}
        >
          <img
            alt="Sample"
            src="https://www.chainerist.com/wp-content/uploads/2016/09/using-phone-1024x576.jpg"
          />
          <CardBody>
            <CardTitle tag="h5">
              Digital Solution
            </CardTitle>

            <CardText>
              The low-cost decentralized applications we develop with you provide trust, reliability, speed and a consistent experience accross your digital channels four your transactions, business processes and costumer experiences.
            </CardText>

          </CardBody>
        </Card>
      </div>
    </div >

  )
}

export default Services