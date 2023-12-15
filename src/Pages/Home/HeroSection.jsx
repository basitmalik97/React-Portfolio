import myimg from '../Home/Homescreen/asset/mePhoto.png'
export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Basit Malik</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          Hello there! I'm Basit Malik, a passionate Full Stack Developer and Web Designer on a mission to turn digital ideas into captivating realities.<br/> With a keen eye for design and a knack for seamless functionality, I bring innovation and creativity to every project.
          </p>
        </div>
        <button className="btn btn-primary">Get In Touch</button>
      </div>
      <div className="hero--section--img">
        <img src={myimg} alt="Hero Section" />
      </div>
    </section>
  );
}
