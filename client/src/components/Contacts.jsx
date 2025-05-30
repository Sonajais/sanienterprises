import { useState } from 'react';
import { GoPerson } from "react-icons/go";
import Image2 from '../assets/images/a15.jpg';
import Image3 from '../assets/images/a19.jpg';
import Image4 from '../assets/images/a4.jpg';
import Image5 from '../assets/images/a7.jpg';
import Image6 from '../assets/images/a2.jpg';
import Image7 from '../assets/images/a3.jpg';
import Image8 from '../assets/images/vm.jpeg';
import Image9 from '../assets/images/a8.jpg';
import Image10 from '../assets/images/a10.jpg';
import Image1 from '../assets/images/a6.jpg';


const Contacts = () => {
    const [formData, setFormData] = useState({
    email: '',
    name: '',
    phone: '',
    message: '',
  });

  // ✅ Handle input changes
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle form submission
  const handleSubmit = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      alert(data.message || 'Message sent!');
    } catch (err) {
      alert('Something went wrong');
    }
  };
    return (
        <>
            <div className="container-fluid"
                style={{ backgroundImage: `url(${Image2})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
                <div className="container text-center main">
                    <h1 className="text-white heading">Contact Us
                    </h1>
                    <h5 className="text-white">"Reach Out to Us: Comprehensive Support and Personalized Guidance for Every Step of Your Academic Journey—We're Here to Help You Succeed"
                    </h5>
                    <br />
                </div>
            </div>
            <div className="container-fluid p-5"
                style={{ backgroundImage: `url(${Image9})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="row g-4 mb-5">

                        <div className="col-12 col-md-6 px-3 mb-3">
                            <div className="p-5 cards">
                                <h1>Phone
                                </h1>
                                <h6>+91 8765610078 </h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-3 mb-3">
                            <div className="p-5 cards">
                                <h1>Email
                                </h1>
                                <h6>info@sanienterprises.com </h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-3 mb-3">
                            <div className="p-5 cards">
                                <h1>Address
                                </h1>
                                <h6>Baribanduari Khajni Gorakhpur 273212 </h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-3 mb-3">
                            <div className="p-5 cards">
                                <h1>Working Hours
                                </h1>
                                <h6>Mon-Sat: 9am-5pm </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#27d383" }}>
                <div className="row p-5 g-4">
                    <div className="col-12 col-md-6 mb-3">
                        <img src={Image3} alt="" className="rounded-5" />
                    </div>
                    <div className="col-12 col-md-6 mb-3">
                        <h1 className="heading1">Write us Something
                        </h1>
                        <div className="row">
                            <div className="col-12 col-md-6 mb-3">
                                <input name="email" value={formData.email} onChange={handleChange} type="text" className="form-control p-3 rounded-5 fs-5" placeholder="E-mail" />
                            </div>
                            <div className="col-12 col-md-6 mb-3">
                                <input name="name" value={formData.name} onChange={handleChange} type="text" className="form-control p-3 rounded-5 fs-5" placeholder="Name" />
                            </div>
                            <div className="col-12 col-md-12 mb-3">
                                <input name="phone" value={formData.phone} onChange={handleChange} type="text" className="form-control p-3 rounded-5 fs-5" placeholder="Phone" />
                            </div>
                            <div className="col-12 col-md-12 mb-3">
                                <textarea name="message" value={formData.message} onChange={handleChange} id="" className="form-control p-3 rounded-5 fs-5" placeholder="Message">Message</textarea>
                            </div>
                            <div className="col-12 text-center">
                                <button onClick={handleSubmit} className="bttn2">Send Message</button>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </>
    )
}

export default Contacts
