import "./Hero.css";
import heroImg from "../../assets/images/hero.jpg";

const Hero = () => {
  return (
    <section className="hero-section container">

      <div className="hero-left">

        <h1>
          Join our
          <br />
          platform
        </h1>

        <p>
          Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Elementum
        </p>

        <button onClick={() => navigate("/signin")}>
  Register Now
</button>

      </div>

      <div className="hero-right">

        <img src={heroImg} alt="" />

        <div className="slider-buttons">

          <button>{"<"}</button>
          <button>{">"}</button>

        </div>

      </div>

      <div className="dots dots-left"></div>
      <div className="dots dots-right"></div>

    </section>
  );
};

export default Hero;