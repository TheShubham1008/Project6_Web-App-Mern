import { Analytics } from "../components/Analytics";

export const Home = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              <p>
                Elevating global standards, Yati Tech.com stands as the epitome
                of unparalleled IT mastery and innovation
              </p>
              <h1 className="beta">Welcome to Yati Tech</h1>
              <p>
                Unlock the Power of Progress! Elevate your business to new
                heights with Yati Tech.com - Your Gateway to Next-Level IT
                Solutions! Experience the Future of Innovation as we craft
                personalized and cutting-edge IT services to seamlessly align
                with your distinctive needs. Don't just keep up; surge ahead
                with Yati Tech.com, where possibilities meet progress!
              </p>
              <div className="btn btn-group">
                <a href="/contact">
                  <button className="btn">connect now</button>
                </a>
                <a href="/services">
                  <button className="btn secondary-btn">learn more</button>
                </a>
              </div>
            </div>

            {/* hero images */}
            <div className="hero-image">
              <img
                src="/images/lion.png"
                alt="coding together"
                width="400"
                height="500"
              />
              {/* <div  /> */}
              {/* <IframeComponent {...iframeProps} />  */}
            </div>
          </div>
        </section>
      </main>

      {/* 2nd section  */}
      <Analytics />

      {/* 3rd section  width=500 height=400*/}
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <iframe
              src="/bogo.html"
              frameborder="0"
              width="100%"
              height="300"
            ></iframe>
          </div>

          <div className="hero-content">
            <p>We are here to help you</p>
            <h1>Get Started Today</h1>
            <p>
              Supercharge Your Success! Dive into a future of efficiency and
              security with Yati.com. Ready to revolutionize your IT
              infrastructure? Take the leap today! 🚀 Claim your FREE
              consultation and let's sculpt a thriving digital future for your
              business. It's not just IT; it's innovation, tailored just for
              you!
            </p>
            <div className="btn btn-group">
              <a href="/contact">
                <button className="btn">connect now</button>
              </a>
              <a href="/services">
                <button className="btn secondary-btn">learn more</button>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section-hero">
        <iframe
          src="/solar.html"
          frameborder="0"
          width="100%"
          height="730"
        ></iframe>
      </section>

      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="hero-image">
            <iframe
              src="/flower.html"
              frameborder="0"
              width="100%"
              height="600"
            ></iframe>
          </div>

          <div className="hero-content">
            
            <h1>Our Moto</h1>
            <p>
              🌐 "Empowering Your Digital World: Where Tech Excellence Meets
              Seamless Service!" 🔧 "Innovate, Elevate, and Thrive with Our
              Cutting-Edge Tech Solutions for Your Business." 🚀"Crafting
              Tomorrow's Solutions Today: Your Trusted Partner in Tech
              Evolution." 🔓 "Unlocking Possibilities, One Code at a Time - Your
              Gateway to Tech Brilliance!" 🔄 "Transforming Challenges into
              Solutions: Because Your Success is Our Business." 🌟 "Where
              Technology Meets Tailored Excellence - Elevate Your Business with
              Us!" 🗺️ "Navigating the Digital Landscape with Precision: Your
              Journey to Tech Success Starts Here." 🌌 "Beyond Boundaries,
              Beyond Limits - We Make Your Tech Dreams a Reality." 💡 "Tech
              Prowess, Customer Care: Elevate Your Business Experience with Our
              Expertise." 🎉 "In a World of Bits and Bytes, We Speak the
              Language of Innovation: Your Trusted Tech Ally."
            </p>
          </div>
        </div>
      </section>

      <section className="section-hero">
        <iframe
          src="/rain.html"
          frameborder="0"
          width="100%"
          height="730"
        ></iframe>
      </section>
    </>
  );
};
