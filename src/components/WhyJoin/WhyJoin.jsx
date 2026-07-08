import "./WhyJoin.css";
import whyImg from "../../assets/images/whyjoin.jpg";

/* ============================
   ICON 1
============================ */

const CareServiceIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 54 54"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clipPath="url(#clip0)">
      <path
        d="M41.3191 24.705C44.8336 28.2173 44.8336 33.9165 41.3191 37.431L28.5908 50.1593C27.7133 51.0368 26.2868 51.0368 25.4093 50.1593L12.681 37.431C9.16654 33.9165 9.16654 28.2173 12.681 24.7028C16.1955 21.1883 21.8948 21.1883 25.4093 24.7028L26.9978 26.2935L28.5908 24.7028C32.1053 21.1883 37.8046 21.1883 41.3191 24.7028V24.705ZM15.8625 27.882C14.1075 29.6393 14.1075 32.49 15.8625 34.2473L27 45.3848L38.1376 34.2473C39.8926 32.49 39.8926 29.6393 38.1376 27.882C36.3803 26.127 33.5296 26.127 31.7701 27.8865L26.9956 32.652L22.2255 27.882C20.4705 26.127 17.6198 26.127 15.8625 27.882ZM27 2.25C31.9726 2.25 36.0001 6.2775 36.0001 11.25C36.0001 16.2225 31.9726 20.25 27 20.25C22.0275 20.25 18 16.2225 18 11.25C18 6.2775 22.0275 2.25 27 2.25ZM27 6.75C24.5138 6.75 22.5 8.76375 22.5 11.25C22.5 13.7363 24.5138 15.75 27 15.75C29.4863 15.75 31.5001 13.7363 31.5001 11.25C31.5001 8.76375 29.4863 6.75 27 6.75Z"
        fill="#874185"
      />
    </g>

    <defs>
      <clipPath id="clip0">
        <rect width="54" height="54" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

/* ============================
   ICON 2
============================ */

const PulseIcon = () => (
  <svg
    width="30"
    height="30"
    viewBox="0 0 44 39"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M16 10.156L28 38.156L35.318 21.078H44V17.078H32.682L28 28L16 0L8.682 17.078H0V21.078H11.318L16 10.156Z"
      fill="#874185"
    />
  </svg>
);

const WhyJoin = () => {
  return (
    <section className="why-section container">
      <h2 className="why-title">Why join us?</h2>

      <div className="why-wrapper">
        {/* LEFT IMAGE */}
        <div className="why-image">
          <img src={whyImg} alt="Why Join" />
        </div>

        {/* RIGHT CARDS */}
        <div className="why-cards">
          <div className="card">
            <div className="card-icon">
              <CareServiceIcon />
            </div>

            <h3>Select a Care Service</h3>

            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <PulseIcon />
            </div>

            <h3>Create your care package</h3>

            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <PulseIcon />
            </div>

            <h3>Your PA will manage</h3>

            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>

          <div className="card">
            <div className="card-icon">
              <CareServiceIcon />
            </div>

            <h3>Put your foot up</h3>

            <p>
              Lorem ipsum dolor sit amet,
              <br />
              consectetur adipiscing elit.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyJoin;