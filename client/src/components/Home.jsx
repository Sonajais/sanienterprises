import { GoPerson } from "react-icons/go";
import Image2 from '../assets/images/a1.jpg';
import Image3 from '../assets/images/a3.jpg';
import Image4 from '../assets/images/a4.jpg';
import Image5 from '../assets/images/a7.jpg';
import Image6 from '../assets/images/a2.jpg';
import Image7 from '../assets/images/a3.jpg';
import Image8 from '../assets/images/vm.jpeg';
import Image9 from '../assets/images/a8.jpg';
import Image10 from '../assets/images/a10.jpg';
import Image1 from '../assets/images/a6.jpg';


const Home = () => {
  return (
   <>
   <div className="container-fluid"
            style={{backgroundImage: `url(${Image1})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh"}}>
            <div className="container text-center main">
                <h1 className="text-white heading">Sani Enterprises
                </h1>
                <h5 className="text-white">We offer professional and reliable PhD thesis writing services to help you achieve academic
                    success. Let our team of experienced writers assist you in crafting a high-quality thesis that meets all
                    academic standards.

                </h5>
                <br />
                <button className="bttn">Explore Now</button>
            </div>
        </div>
  <div className="container-fluid" style={{backgroundColor: "#27d383"}}>
    <div className="container pt-5 pb-5">
      <div className="row">
        <div className="col-12 col-md-6 text-black">
          <h1 className="heading1">Our Mission
          </h1>
          <p>At Sani Enterprises, we understand the challenges and pressures that come with writing a thesis or final
            year project. Our mission is to provide dedicated support and expert guidance to PhD and master's students,
            helping them navigate through this critical phase of their academic journey with confidence and success.
          </p>
          <p>Our services are tailored to empower students in their academic journey, providing expert support and
            guidance every step of the way.
          </p>
          <p>We believe in transforming challenges into opportunities, helping students achieve academic excellence and
            success.
          </p>
        </div>
        <div className="col-12 col-md-6">
          <img src={Image2} alt="" className="w-100 rounded-5"/>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid" style={{backgroundImage: `url(${Image10})`, backgroundSize: "cover", backgroundPosition: "center"}}>
  <div className="container text-center py-5">
    <div className="row py-5">
      <div className="col-12 col-md-4 mb-1">
        <h2>Expert Guidance
        </h2>
        <p>Personalized support from experienced professionals to help you excel in your thesis or final year project.
        </p>
      </div>
      <div className="col-12 col-md-4 mb-1">
        <h2>Comprehensive Services
        </h2>
        <p>Offering consultation, editing, data analysis, and more to meet all your academic writing needs.
        </p>
      </div>
      <div className="col-12 col-md-4 mb-1">
        <h2>Achieve Excellence
        </h2>
        <p>Empowering PhD and master's students to achieve their academic goals with confidence and success.
        </p>
      </div>
    </div>
  </div>
  </div>

  <div className="container-fluid" style={{backgroundColor: "#27d383"}}>
    <div className="container pt-5 pb-5">
      <div className="row  text-center">
        <div className="col-12 col-md-3"></div>
        <div className="col-12 col-md-7">
          <h1 className="heading1">Insightful Academic Writing Resources
          </h1>
        </div>
        <div className="col-12 col-md-2"></div>
        <div className="col-12 col-md-3 mb-1">
          <img src={Image3} alt="" className="w-100 rounded-5"/>
          <h5>Effective Research Strategies
          </h5>
        </div>
        <div className="col-12 col-md-3 mb-1">
          <img src={Image4} alt="" className="w-100 rounded-5"/>
          <h5>Mastering Thesis Writing
          </h5>
        </div>
        <div className="col-12 col-md-3 mb-1">
          <img src={Image5} alt="" className="w-100 rounded-5"/>
          <h5>Crafting Compelling Arguments
          </h5>
        </div>
        <div className="col-12 col-md-3 mb-1">
          <img src={Image6} alt="" className="w-100 rounded-5"/>
          <h5>Navigating Peer Reviews
          </h5>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid">
    <div className="row">
      <div className="col-12">
    <img src={Image8} alt="" className="" width="100%"/>
      </div>
    </div>
  </div>
  <div className="container-fluid" style={{backgroundColor: "#27d383"}}>
    <div className="container pt-5 pb-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mb-5">WHAT OUR CUSTOMERS SAY
          </h1>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <h5>ThesisGenius is a game-changer! Their support elevated my thesis to new heights.
          </h5>
          <h6><GoPerson className="heading" />
            <br/>Rakesh Gautam
          </h6>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <h5>I couldn't have completed my project without ThesisGenius. Exceptional service and expertise!
          </h5>
          <h6><GoPerson className="heading" />
            <br/>Richa Sharma
          </h6>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <h5>Outstanding consultancy service! ThesisGenius made my academic journey smooth and successful.
          </h5>
          <h6><GoPerson className="heading" />
            <br/>Shubham Rathor
          </h6>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <h5>ThesisGenius exceeded all my expectations. Their dedication and knowledge are unmatched!
          </h5>
          <h6><GoPerson className="heading" />
            <br/>Abhishek Rajoriya
          </h6>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <h5>Incredible support from ThesisGenius! They truly care about their clients' success.
          </h5>
          <h6><GoPerson className="heading" />
            <br/>Shivam Lodhi
          </h6>
        </div>
        <div className="col-12 col-md-4 mb-3">
          <h5>ThesisGenius is the best decision I made for my academic career. Highly recommended!
          </h5>
          <h6><GoPerson className="heading" />
            <br/>Anjali Rajput
          </h6>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid" style={{backgroundColor: "black"}}>
    <div className="container p-5">
      <div className="row text-center">
        <div className="col-12 col-md-1"></div>
        <div className="col-12 col-md-10 rounded-5 p-5" style={{backgroundColor: "#27d383"}}>
          <h1 className="heading1 text-white pt-5">Unlock Your Academic Potential Today
          </h1>
          <h5 className="text-white">Ready to take your thesis to the next level? Explore our services and let us guide you
            towards success!
          </h5>
          <br/>
          <button className="bttn1 mt-3 mb-3">Our First Service</button>
        </div>
        <div className="col-12 col-md-1"></div>
      </div>
    </div>
  </div>

  <div className="container-fluid" style={{backgroundColor: "#27d383"}}>
    <div className="container pt-5 pb-5">
      <div className="row text-center">
        <div className="col-12">
          <h1 className="mb-5 heading2">Curious Minds Want to Know
          </h1>
        </div>
        <div className="row mb-3">
          <div className="col-12 col-md-1"></div>
          <div className="col-12 col-md-10">
            <div className="accordion accordion-flush" id="accordionFlushExample">

              <div className="accordion-item rounded-5 overflow-hidden border mb-2">
                <h2 className="accordion-header" id="flush-headingOne">
                  <button className="accordion-button collapsed rounded-0 no-hover-bg" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false"
                    aria-controls="flush-collapseOne">
                    <h2>How can you help me?</h2>
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne"
                  data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body" style={{textAlign: "left"}}>
                    We specialize in guiding PhD and master students through their thesis and final year projects,
                    ensuring success and excellence.
                  </div>
                </div>
              </div>

              <div className="accordion-item rounded-5 overflow-hidden border mb-2">
                <h2 className="accordion-header" id="flush-headingTwo">
                  <button className="accordion-button collapsed rounded-0 no-hover-bg" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false"
                    aria-controls="flush-collapseTwo">
                    <h2>Why choose your consultancy?</h2>
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo"
                  data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body" style={{textAlign: "left"}}>
                    Our proven track record of satisfied clients and expert mentors make us the top choice for academic
                    support.
                  </div>
                </div>
              </div>

              <div className="accordion-item rounded-5 overflow-hidden border mb-2">
                <h2 className="accordion-header" id="flush-headingThree">
                  <button className="accordion-button collapsed rounded-0 no-hover-bg" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false"
                    aria-controls="flush-collapseThree">
                    <h2>What sets you apart?</h2>
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree"
                  data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body" style={{textAlign: "left"}}>
                    Our personalized approach, attention to detail, and dedication to student success set us apart in
                    the consultancy field.
                  </div>
                </div>
              </div>

              <div className="accordion-item rounded-5 overflow-hidden border mb-2">
                <h2 className="accordion-header" id="flush-headingFour">
                  <button className="accordion-button collapsed rounded-0 no-hover-bg" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false"
                    aria-controls="flush-collapseFour">
                    <h2>How do I get started?</h2>
                  </button>
                </h2>
                <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour"
                  data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body" style={{textAlign: "left"}}>
                    Getting started is easy! Simply reach out to us via our contact page, and we'll take it from there.
                  </div>
                </div>
              </div>

              <div className="accordion-item rounded-5 overflow-hidden border mb-2">
                <h2 className="accordion-header" id="flush-headingFive">
                  <button className="accordion-button collapsed rounded-0 no-hover-bg" type="button"
                    data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false"
                    aria-controls="flush-collapseFive">
                    <h2>Can I trust your team?</h2>
                  </button>
                </h2>
                <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive"
                  data-bs-parent="#accordionFlushExample">
                  <div className="accordion-body" style={{textAlign: "left"}}>
                    Absolutely! Our team of experienced consultants and mentors are dedicated to your academic success.
                  </div>
                </div>
              </div>

            </div>
          </div>
          <div className="col-12 col-md-1"></div>
        </div>
      </div>
    </div>
  </div>

  <div className="container-fluid"
    style={{backgroundImage: `url(${Image7})`, backgroundSize: "cover", backgroundPosition: "center"}}>
    <div className="row p-5 g-4">
      <div className="col-12 col-md-2"></div>
      <div className=" col-12 col-md-8 mt-5">
        <h1 className="text-center text-white z-index-1">Our Step-By-Step Process To Provide You Best Services
        </h1>
      </div>
      <div className="col-12 col-md-2"></div>
      <div className="col-12 col-md-4 mb-3 px-3">
        <div className="cards p-4">
          <h2>1- Initial Consultation and Topic Selection</h2>
          <h6>Discuss your interests and goals with our experts to identify a suitable and researchable topic. We help
            you refine your ideas and develop a clear, focused research question.

          </h6>
        </div>
      </div>

      <div className="col-12 col-md-4 mb-3 px-3">
        <div className="cards p-4">
          <h2>2- Comprehensive Research Planning
          </h2>
          <h6>Create a detailed research plan outlining the methodology, sources, and timeline. This step ensures a
            structured approach to gathering and analyzing data, setting a strong foundation for your thesis.
          </h6>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-3 px-3">
        <div className="cards p-4">
          <h2>3- Literature Review and Data Collection
          </h2>
          <h6>Conduct a thorough literature review to understand existing research and identify gaps. Gather and
            organize
            relevant data using reliable sources and effective research techniques.
          </h6>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-3 px-3">
        <div className="cards p-4">
          <h2>4- Data Analysis and Interpretation
          </h2>
          <h6>Analyze the collected data using appropriate statistical and qualitative methods. Our experts assist you
            in
            interpreting the results and drawing meaningful conclusions that support your research objectives.
          </h6>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-3 px-3">
        <div className="cards p-4">
          <h2>5- Writing and Drafting
          </h2>
          <h6>Develop a well-structured draft with clear arguments and coherent sections, including introduction,
            methodology, results, discussion, and conclusion. Receive guidance on academic writing standards and best
            practices.
          </h6>
        </div>
      </div>
      <div className="col-12 col-md-4 mb-3 px-3">
        <div className="cards p-4">
          <h2>6- Revision, Proofreading, and Finalization
          </h2>
          <h6>Refine your thesis through multiple revisions, focusing on clarity, coherence, and academic rigor. Our
            team
            provides meticulous proofreading and formatting services to ensure your thesis meets all required guidelines
            and is polished for submission.
          </h6>
        </div>
      </div>
    </div>
    <div className="row p-5 text-center text-white" style={{backgroundColor: "#27d383"}}>
      <div className="col-12 col-md-4">
        <h1 className="heading1">1000+</h1>
        <h5>Happy Clients
        </h5>
      </div>
      <div className="col-12 col-md-4">
        <h1 className="heading1">95%</h1>
        <h5>Success Rate
        </h5>
      </div>
      <div className="col-12 col-md-4">
        <h1 className="heading1">24/7</h1>
        <h5>Support Availability
        </h5>
      </div>
    </div>
  </div>
  <div className="container-fluid p-5"
    style={{backgroundImage: `url(${Image9})`, backgroundSize: "cover", backgroundPosition: "center"}}>
    <div className="container">
      <div className="row g-4 mb-5">
        <div className="col-12">
          <h1 style={{color:"#27d383"}} className="heading2  text-center">Contact Us</h1>
        </div>
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
   </>
  )
}

export default Home
