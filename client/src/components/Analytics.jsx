import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Helmet } from "react-helmet";

export const Analytics = () => {
  const [counters, setCounters] = useState([]);

  useEffect(() => {
    const updateCount = (counter) => {
      const target = +counter.getAttribute("data-target");
      let count = +counter.innerText;

      const increment = target / speed;

      if (count < target) {
        count = Math.ceil(count + increment);
        counter.innerText = count;
        requestAnimationFrame(() => updateCount(counter));
      } else {
        counter.innerText = target;
      }
    };

    const handleScroll = () => {
      counters.forEach((counter) => {
        const sectionPosition = counter.getBoundingClientRect().top;
        const screenPosition = window.innerHeight;

        if (sectionPosition < screenPosition) {
          updateCount(counter);
        }
      });
    };

    if (counters.length === 0) {
      setCounters(document.querySelectorAll(".counter"));
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [counters]); 


    return (
        <Wrapper>
            <section className="section-analytics" id="analytics-section">
                <div className="container grid grid-four-cols">
                    <Helmet>
                        <script type="text/javascript">
                            {`
          
           const counters = document.querySelectorAll('.counter');
           const speed = 200; // Adjust the speed of counting
           
           counters.forEach(counter => {
               const updateCount = () => {
                   const target = +counter.getAttribute('data-target');
                   const count = +counter.innerText;
           
               
                   const increment = target / speed;
           
                  
                   if (count < target) {
                       counter.innerText = Math.ceil(count + increment);
                       setTimeout(updateCount, 1);
                   } else {
                       counter.innerText = target;
                   }
               };
           
              
               const section = document.getElementById('analytics-section');
               window.addEventListener('scroll', () => {
                   const sectionPosition = section.getBoundingClientRect().top;
                   const screenPosition = window.innerHeight;
           
                   if (sectionPosition < screenPosition) {
                       updateCount();
                   }
               });
           });
           
          `}
                        </script>
                    </Helmet>
                    <div className="div1">
                        <h2 className="counter" data-target="50">
                            0 
                        </h2>
                        <p>registered companies</p>
                    </div>
                    <div className="div1">
                        <h2 className="counter" data-target="100000">
                            0 
                        </h2>
                        <p>Happy Clients</p>
                    </div>
                    <div className="div1">
                        <h2 className="counter" data-target="500">
                            0 
                        </h2>
                        <p>well-known developers</p>
                    </div>
                    <div className="div1">
                        <h2 className="counter" data-target="24">
                            0 
                        </h2>
                        <p>services</p>
                    </div>
                </div>
            </section>
        </Wrapper>
    );
};

const Wrapper = styled.section`
  .section-analytics {
    margin: 9.6rem 0;

    .container {
      background-color: var(--bg-color);
      border-radius: 1rem;
    }

    .grid {
      color: var(--dark-color);

      .div1 {
        text-align: center;
        border-right: 0.2rem solid var(--dark-color);

        &:last-child {
          border: none;
        }

        h2 {
          font-size: 4.8rem;
        }

        p {
          text-transform: capitalize;
        }
      }
    }
  }
`;
