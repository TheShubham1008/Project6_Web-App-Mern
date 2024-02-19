import { useState } from "react";
import { useAuth } from "../store/auth";
import {toast } from 'react-toastify';

const defaultContactFormData = {
username:" ",
email:" ",
message:" ",
};

export const Contact = () => {
  const [contact, setContact] = useState(defaultContactFormData);

  const [userData,setUserData]=useState(true);

  const {user}=useAuth();

  if(userData && user){
    setContact({
      username:user.username,
      email:user.email,
      message:" ",
    });

    setUserData(false);
  }

  // lets tackle our handleInput
  const handleInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;

   // setContact({
  //    ...contact,
   //   [name]: value,
   // });
   setContact((prev) => ({ ...prev, [name]: value }));
  };

  // handle fomr getFormSubmissionInfo
  const handleSubmit = async(e) => {
    e.preventDefault();
    try {
      const response=await fetch("http://localhost:5000/api/form/contact",{
        method:"POST",
        headers:{
          "Content-Type":"application/json",
        },
        body:JSON.stringify(contact),
      });


      if(response.ok){
        setContact(defaultContactFormData);
        const data = await response.json();
        console.log(data);
        toast.success("Message Sent Successfully");
      }


    } catch (error) {
      toast.warning("Try Again");
      console.log(error);
    }
    console.log(contact);
  };



  return (
    <>
      <section className="section-contact">
        <div className="contact-content container">
          <h1 className="main-heading">contact us</h1>
        </div>
        {/* contact page main  */}
        <div className="container grid grid-two-cols">
          <div className="contact-img">
            <iframe src="/clock.html" frameborder="0"
            width="600"
            height="500"></iframe>
          </div>

          {/* contact form content actual  */}
          <section className="section-form">
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  autoComplete="off"
                  value={contact.username}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="email">email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  autoComplete="off"
                  value={contact.email}
                  onChange={handleInput}
                  required
                />
              </div>

              <div>
                <label htmlFor="message">message</label>
                <textarea
                  name="message"
                  id="message"
                  autoComplete="off"
                  value={contact.message}
                  onChange={handleInput}
                  required
                  cols="30"
                  rows="6"
                ></textarea>
              </div>

              <div>
                <button type="submit">submit</button>
              </div>
            </form>
          </section>
        </div>

        <section className="mb-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12568.6849248387!2d74.36274135611288!3d34.050634620517535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38e1af91308dd977%3A0x7a5cc65c8fb01df7!2sGulmarg%20193403!5e1!3m2!1sen!2sin!4v1706351530083!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </section>
    </>
  );
};
