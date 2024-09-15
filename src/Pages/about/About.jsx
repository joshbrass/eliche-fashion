import Header from '../../components/Header'
import HeaderImage from '../../images/header_bg_1.jpg'
import StoryImage from '../../images/about1.jpg'
import VisionImage from '../../images/about2.jpg'
import MissionImage from '../../images/about3.jpg'
import './about.css'





const About = () => {
  return (
    <>
    <Header title='About Us' image={HeaderImage}>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae aliquam ad minima officiis eaque, quo dolore
       autem accusamus aliquid exercitationem earum nihil sed quia. Voluptatum repellat eligendi repudiandae aut cum?
    </Header>

    <section className='about__story'>
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={StoryImage} alt="STORY IM" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quis quod magnam ipsam, eveniet iure, sint odit
             veniam explicabo fugiat enim. Voluptas recusandae et illo modi ipsa vitae, eos, tempore doloribus, laudantium 
             consequatur labore? Eligendi laboriosam adipisci quae, atque illum minus porro accusamus saepe deleniti, id
              voluptatem omnis voluptate facilis
              nam eveniet optio! Ipsa eum eius vero exercitationem temporibus quos repellat omnis mollitia similique maxime, ipsam, hic totam sint delectus eaque dolorem libero quod illo. Sequi laboriosam veritatis, culpa a aliquam corrupti facere. Nemo aut voluptates veniam possimus quo ipsum libero blanditiis in, error, 
            sint dolorum at explicabo, maxime officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius quos soluta
             minima unde qui voluptas odio quam commodi sed modi quibusdam, perferendis ab, hic facere aperiam
              doloremque cupiditate aspernatur culpa maxime nulla fuga. Officiis quam cupiditate mollitia, eum aliquid
               beatae natus voluptates doloribus tempora nobis voluptatibus facere modi 
            itaque harum delectus, quisquam esse eius pariatur fuga ea molestias. Dolorum!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officia aperiam, amet omnis enim 
             molestias recusandae placeat quam,
             molestiae odio optio deserunt reprehenderit consequatur. Ullam unde dolorem illum molestias.
          </p>
        </div>
      </div>
    </section>

    <section className='about__vision'>
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quis quod magnam ipsam, eveniet iure, sint odit
             veniam explicabo fugiat enim. Voluptas recusandae et illo modi ipsa vitae, eos, tempore doloribus, laudantium 
             consequatur labore? Eligendi laboriosam adipisci quae, atque illum minus porro accusamus saepe deleniti, id
              voluptatem omnis voluptate facilis
              nam eveniet optio! Ipsa eum eius vero exercitationem temporibus quos repellat omnis mollitia similique maxime, ipsam, hic totam sint delectus eaque dolorem libero quod illo. Sequi laboriosam veritatis, culpa a aliquam corrupti facere. Nemo aut voluptates veniam possimus quo ipsum libero blanditiis in, error, 
            sint dolorum at explicabo, maxime officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius quos soluta
             minima unde qui voluptas odio quam commodi sed modi quibusdam, perferendis ab, hic facere aperiam
              doloremque cupiditate aspernatur culpa maxime nulla fuga. Officiis quam cupiditate mollitia, eum aliquid
               beatae natus voluptates doloribus tempora nobis voluptatibus facere modi 
            itaque harum delectus, quisquam esse eius pariatur fuga ea molestias. Dolorum!
          </p>

          

        </div>
        <div className="about__section-image">
            <img  src={VisionImage} alt="vision IM" /> 
          </div>
      </div>
    </section>

    <section className='about__mission'>
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={MissionImage} alt="mission IM" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere quis quod magnam ipsam, eveniet iure, sint odit
             veniam explicabo fugiat enim. Voluptas recusandae et illo modi ipsa vitae, eos, tempore doloribus, laudantium 
             consequatur labore? Eligendi laboriosam adipisci quae, atque illum minus porro accusamus saepe deleniti, id
              voluptatem omnis voluptate facilis
              nam eveniet optio! Ipsa eum eius vero exercitationem temporibus quos repellat omnis mollitia similique maxime, ipsam, hic totam sint delectus eaque dolorem libero quod illo. Sequi laboriosam veritatis, culpa a aliquam corrupti facere. Nemo aut voluptates veniam possimus quo ipsum libero blanditiis in, error, 
            sint dolorum at explicabo, maxime officia.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem eius quos soluta
             minima unde qui voluptas odio quam commodi sed modi quibusdam, perferendis ab, hic facere aperiam
              doloremque cupiditate aspernatur culpa maxime nulla fuga. Officiis quam cupiditate mollitia, eum aliquid
               beatae natus voluptates doloribus tempora nobis voluptatibus facere modi 
            itaque harum delectus, quisquam esse eius pariatur fuga ea molestias. Dolorum!
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione officia aperiam, amet omnis enim 
             molestias recusandae placeat quam,
             molestiae odio optio deserunt reprehenderit consequatur. Ullam unde dolorem illum molestias.
          </p>
        </div>
      </div>
    </section>

   
   
    </>
   
  )
}

export default About