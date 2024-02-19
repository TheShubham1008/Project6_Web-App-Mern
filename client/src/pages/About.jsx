import { NavLink } from "react-router-dom";
import { Analytics } from "../components/Analytics";
import { useAuth } from "../store/auth";

export const About = () => {
  const { user } = useAuth();
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}
              <p>Hey {user.username},</p>
              <h1>Why Choose Us? </h1>
              <p>
                🌐Where Expertise Meets Enthusiasm: Our squad of seasoned IT
                maestros thrives on the pulse of industry trends, turning
                passion into precision for your tech needs!
              </p>
              <p>
                🎨 Crafting Your Success Story: Embrace the unique rhythm of
                your business with tailored solutions designed to hit all the
                right notes for your specific needs and goals!
              </p>
              <p>
                🤝 Satisfaction Elevated, Worries Eliminated: Our
                customer-centric approach isn't just a promise; it's a passion.
                Experience top-notch support tailored to soothe your IT
                concerns, where your satisfaction is our ultimate destination!
              </p>
              <p>
                💲Smart Solutions, Savvy Savings: Unleash the power of
                affordability without sacrificing service quality. Elevate your
                experience with competitive pricing that's as impressive as our
                services!
              </p>
              <p>
                ⏰ Reliability Redefined: We're the dependable heartbeat of your
                IT world, 24/7. Count on us—where commitment meets constant
                availability, ensuring your tech journey is rock-solid!
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <iframe src="/star.html" frameborder="0"
              width="400"
              height="550"></iframe>
            </div>
          </div>
        </section>
      </main>

      <Analytics />
    </>
  );
};
