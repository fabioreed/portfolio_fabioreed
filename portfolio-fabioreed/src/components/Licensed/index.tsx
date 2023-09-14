import { CertificateCard, CertificateContainerList, ContainerLicensed, TitleContainer } from './style'
import front from '../../assets/front.jpg'
import back from '../../assets/back.jpg'
import fullstack from '../../assets/fullstack.jpg'

const Licensed = () => {

  const certificate = [
    {
      'name': 'Front End Certificate - 1.000 hours',
      'description': 'Has satisfactorily completed 1.000 hours required course of study.',
      'img': front,
      'tech': ['React', 'Typescript', 'Javascript', 'CSS3']
    },
    {
      'name': 'Back End Certificate - 333 hours',
      'description': 'Has successfully completed a 333-hour course in Advanced Backend Development with a focus on Python and Django REST Framework, earning a certificate.',
      'img': back,
      'tech': ['Python', 'Django Rest Framework']
    },
    {
      'name': 'Fullstack Certificate - 2000 hours',
      'description': 'Certificate of completion for 2000 class/hours in Full Stack Programming.',
      'img': fullstack,
      'tech': ['html', 'css', 'react.js', 'typescript', 'node.js', 'express.js', 'postgresSQL', 'ORM', 'python', 'django rest framework']
    }
  ]

  return (
    <ContainerLicensed>
      <TitleContainer>
        <h3>Certifications and Achievements</h3>
      </TitleContainer>
      <CertificateContainerList>
        {certificate.map((item => (
          <CertificateCard>
            <figure>
              <img src={item.img} />
            </figure>
            <div>
              <h4>{item.name}</h4>
              <p>{item.description}</p>
            </div>
          </CertificateCard>
        )))}
      </CertificateContainerList>
    </ContainerLicensed>
  )
}

export default Licensed