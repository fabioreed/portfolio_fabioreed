import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
}

export const Carousel = () => {
  return (
    <Slider {...settings}>
      <div>
        <img src="caminho_para_a_imagem1.jpg" alt="Imagem 1" />
      </div>
      <div>
        <img src="caminho_para_a_imagem2.jpg" alt="Imagem 2" />
      </div>
      <div>
        <img src="caminho_para_a_imagem3.jpg" alt="Imagem 3" />
      </div>
      {/* Adicione mais slides de fotos conforme necessário */}
    </Slider>
  )
}