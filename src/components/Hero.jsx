import { merybg } from '../assets'
import { styles } from "../styles";
import axios from 'axios';
import { url } from '../services/s3bucket'

const Hero = () => {
  const downloadFile = async() => {
    try {
      const res = await axios.get(url, {
        responseType: 'blob',
      });
      const url2 = window.URL.createObjectURL(new Blob([res.data]));
      const link = document.createElement('a');
      link.href = url2;
      link.setAttribute('download', 'mery vera-resume.pdf');
      document.body.appendChild(link);
      link.click();
      link.parentNode.removeChild(link);
    } catch (error) {
      console.error('Error al descargar el archivo:', error);
    }
  }
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div> */}

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className='text-[#370d92]'>Mery</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            Fullstack developer, <br className='sm:block hidden' />
            data enthusiastic
          </p>
          <button onClick={downloadFile}>download resume</button>
        </div>
      </div>
      <figure>
        <img src={merybg} alt="profile" className="w-screen h-[80vh] object-cover object-top"/> 
      </figure>
    </section>
  )
}

export default Hero