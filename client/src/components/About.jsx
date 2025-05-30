import Image2 from '../assets/images/a12.jpg';
import Image3 from '../assets/images/a14.jpg';
import Image4 from '../assets/images/a11.jpg';
import Image5 from '../assets/images/a13.jpg';
import Image1 from '../assets/images/a18.jpg';
import Image6 from '../assets/images/a5.jpg';
import { HiOutlineLightBulb } from "react-icons/hi";
import { PiNotePencilBold } from "react-icons/pi";
import { TbSettingsStar } from "react-icons/tb";



const About = () => {
    return (
        <>
            <div className="container-fluid"
                style={{ backgroundImage: `url(${Image1})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "100vh" }}>
                <div className="container text-center main">
                    <h1 className="text-white heading">About Us
                    </h1>
                    <h5 className="text-white">"Empowering Academic Excellence Through Expert Guidance and Personalized Support"
                    </h5>
                    <br />
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#27d383" }}>
                <div className="container pt-5 pb-5">
                    <div className="row py-5">
                        <div className="col-12 col-md-6 text-black">
                            <h1 className="heading2">Welcome to Educare Consultancy!</h1>
                            <h5>At Educare Consultancy, we understand the challenges and pressures that come with writing a thesis or final year project. Our mission is to provide dedicated support and expert guidance to PhD and master's students, helping them navigate through this critical phase of their academic journey with confidence and success.</h5>
                        </div>
                        <div className="col-12 col-md-6">
                            <img src={Image2} alt="" className="w-100 rounded-5" />
                        </div>

                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundImage: `url(${Image3})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%" }}>
                <div className="container py-5">
                    <div className="row py-5 g-5">
                        <div className="col-12 col-md-4">
                            <img src={Image4} alt="" className="w-100 rounded-5" />
                        </div>
                        <div className="col-12 col-md-8">
                            <div className="row">
                                <div className="col-12 col-md-12 rounded-5 p-5 mb-3" style={{ backgroundColor: "white" }}>
                                    <h1>Who We Are
                                    </h1>
                                    <p>Founded by a team of experienced academicians and professionals, Educare Consultancy is committed to excellence in academic writing and research. Our consultants are experts in their respective fields, bringing years of experience and a wealth of knowledge to help you achieve your academic goals.
                                    </p>
                                </div>
                                <div className="col-12 col-md-12 rounded-5 p-5 mb-3" style={{ backgroundColor: "white" }}>
                                    <h1>Our Vision
                                    </h1>
                                    <p>We envision a world where every student has access to the resources and support they need to excel in their academic pursuits. We strive to empower students by providing high-quality, personalized consultancy services that make the thesis writing process smoother and more manageable.</p>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: "#2e481a" }}>
                <div className="container pt-5 pb-5">
                    <div className="row">
                        <div className="col-12 col-md-12 text-center">
                            <h1 className="heading1" style={{ color: '#9fe870' }}>Our Features
                            </h1>
                        </div>
                        <div className="col-12 col-md-4 mb-3 mb-3">
                            <div className="cards rounded-5 p-5" style={{ backgroundColor: "white" }}>
                                <HiOutlineLightBulb className="heading icon-circle" style={{ color: "black", background: "#9fe870" }} />
                                <br /><h1>Expert Academic Guidance
                                </h1>
                                <p>Our team of seasoned academicians offers personalized guidance tailored to your unique research needs. From topic selection to final submission, we provide comprehensive support to help you navigate the complexities of academic writing with confidence and clarity.
                                </p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3 mb-3">
                            <div className="cards rounded-5 p-5" style={{ backgroundColor: "white" }}>
                                <PiNotePencilBold className="heading icon-circle" style={{ color: "black", background: "#9fe870" }} />
                                <br /><h1>Comprehensive Editing and Proofreading
                                </h1>
                                <p>Ensure your thesis is polished to perfection with our meticulous editing and proofreading services. We focus on enhancing clarity, coherence, and academic rigor, ensuring that your work meets the highest standards of academic excellence and is free from errors.</p>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3 mb-3">
                            <div className="cards rounded-5 p-5" style={{ backgroundColor: "white" }}>
                                <TbSettingsStar className="heading icon-circle" style={{ color: "black", background: "#9fe870" }} />
                                <br /> <h1>Customized Research Workshops
                                </h1>
                                <p>Enhance your research skills through our tailored workshops and seminars. Designed to address the specific challenges faced by PhD and master's students, our educational sessions cover a range of topics, from research methodologies to effective academic writing techniques.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundImage: `url(${Image6})`, backgroundSize: "cover", backgroundPosition: "center", width: "100%", height: "100vh" }}>
                <div className="container py-5">
                    <div className="row g-0 rounded-5" style={{ backgroundColor: "white" }}>
                        <div className="col-12 col-md-8 p-5 order-2 order-md-1">
                            <h1 className="heading1">Begin your creative journey today</h1>
                            <h5>We specialize in guiding PhD and master students through their thesis and final year projects, ensuring success and excellence. We believe in transforming challenges into opportunities, helping students achieve academic excellence and success.
                            </h5>
                        </div>
                        <div className="col-12 col-md-4 order-1 order-md-2">
                            <img src={Image5} alt="" className="w-100 rounded-5 img-fluid" style={{ display: "block" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#27d383" }}>
                <div className="container py-5">
                    <div className="row g-4 text-center">
                        <div className=" col-12 col-md-12">
                            <h1 className="mb-5 heading1">Our Team
                            </h1>
                        </div>
                        <div className="col-12 col-md-6 px-3 mb-3">
                            <div className="p-5 cards1">
                                <h1>Jagriti Verma
                                </h1>
                                <h5>Director
                                </h5>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-3 mb-3">
                            <div className="p-5 cards1">
                                <h1>Avinash Sharma
                                </h1>
                                <h5>Assistant Professor
                                </h5>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-3 mb-3">
                            <div className="p-5 cards1">
                                <h1>Navdeep Shukla
                                </h1>
                                <h5>Associate Professor
                                </h5>
                            </div>
                        </div>
                        <div className="col-12 col-md-6 px-3 mb-3">
                            <div className="p-5 cards1">
                                <h1>Sonam Verma
                                </h1>
                                <h5>Assistant Professor
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#27d383" }}>
                <div className="row">
                    <div className=" col-12 col-md-12">
                        <h1 className="text-center">Our Step-By-Step Process To Provide You Best Services by Our Experts
                        </h1>
                    </div>
                    <div className="cards p-4 text-center">
                        <h6>Discuss your interests and goals with our experts to identify a suitable and researchable topic. We help
                            you refine your ideas and develop a clear, focused research question.
                        </h6>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About;





