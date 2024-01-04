import { merybg } from '../assets'
import { styles } from "../styles";
import axios from 'axios';

const url = "https://qwgeelut09.execute-api.us-east-2.amazonaws.com/dev/download-file?key=Resume-Mery_VeraM.pdf"
const Hero = () => {

  const downloadFile = async() => {
    try {
      const response = await axios.get(url);
      const signedUrl = response.data;

      window.open(signedUrl, '_blank');
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  }

  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute z-10 inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div>
          <h1 className={`${styles.heroHeadText} text-white z-20`}>
            Hi, I'm <span className='text-[#370d92]'>Mery</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100 z-20`}>
            Fullstack developer, <br className='sm:block hidden' />
            data enthusiastic
          </p>
          <button className="z-20" onClick={downloadFile}>Get Resume</button>
        </div>
      </div>
      <figure>
        <img src={merybg} alt="profile" className="w-screen h-[80vh] object-cover object-right flip-horizontal"/> 
      </figure>
    </section>
  )
}

export default Hero