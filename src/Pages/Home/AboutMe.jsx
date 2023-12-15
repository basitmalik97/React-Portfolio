import myimg from '../Home/Homescreen/asset/mePhoto.png'
export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src={myimg} alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
          Hello there! I'm Basit Malik, a passionate Full Stack Developer and Web Designer on a mission to turn digital ideas into captivating realities. With a keen eye for design and a knack for seamless functionality, I bring innovation and creativity to every project.

My journey in the world of technology started with a curiosity that evolved into a deep love for coding and design. Over the years, I've honed my skills in crafting elegant and responsive web solutions that not only meet but exceed expectations. From conceptualization to execution, I thrive on bringing visions to life through clean, efficient code and visually stunning designs.

My commitment to staying on the cutting edge of technology ensures that I am well-versed in the latest trends and tools in the ever-evolving digital landscape. Whether it's developing robust backend systems or creating intuitive user interfaces, I approach each challenge with enthusiasm and dedication.


          </p>
          <p className="hero--section-description">
          I believe that great web development is a harmonious blend of form and function. It's about creating an immersive user experience that goes beyond aesthetics, leaving a lasting impression. If you're looking for a collaborator who brings technical expertise, creative flair, and a commitment to excellence, you're in the right place.

Let's embark on a journey of innovation together. Welcome to my digital realm, where ideas come to life, and user experiences are elevated to new heights. I look forward to connecting with you and bringing your digital vision to reality.
          </p>
        </div>
      </div>
    </section>
  );
}
