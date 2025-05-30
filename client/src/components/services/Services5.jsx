import { GoPerson } from "react-icons/go";
import Image1 from '../../assets/images/va.jpeg';
import Image2 from '../../assets/images/a14.jpg';
import Image3 from '../../assets/images/a18.jpg';
import Image4 from '../../assets/images/a26.jpg';



const Services5 = () => {
    return (
        <>
            <div className="container-fluid"
                style={{ backgroundImage: `url(${Image1})`, backgroundSize: "cover", backgroundPosition: "center", height: "100vh" }}>
                <div className="container text-center main">
                    <h1 className="text-white heading">PhD Research Data Collection Service
                    </h1>
                </div>
            </div>
            <div className="container-fluid" style={{ backgroundColor: "#27d383" }}>
                <div className="container">
                    <div className="row py-5">
                        <div className="col-12 col-md-12 text-black">
                            <h1 className="heading1">Specialized PhD Research Data Collection Service</h1>
                            <p>EduCare Counselling offers specialized PhD research data collection service for researchers in acquiring primary data. Our services include data collection help for researchers who need assistance in the collection of reliable and valid data. Depending on the type of study, objectives, and hypotheses, we provide both quantitative and qualitative data collection services to our clients. Our approach includes undertaking a pilot study before the actual process of data gathering begins. This helps to identify and remove any discrepancies in the data collection process and ensures that the data gathered is accurate and reliable.</p>
                            <p>We guide researchers on the choice of the right data collection methods and tools through our statistics-based analyses. Our team helps in determining the types of tools that will be able to give the most useful results for the research, and we also explain the study design and the reasons for choosing certain data acquisition techniques. We further offer assistance in constructing data collection tools, ensuring that the data collection task proceeds smoothly and efficiently. We are well-equipped to handle data of various sizes, from small samples to large populations, and we charge based on the size and complexity of the data required. With our timely guidance and support, you can rest assured that your data collection process will be completed efficiently and effectively.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid"
                style={{ backgroundImage: `url(${Image2})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                <div className="container">
                    <div className="row g-4">
                        <div className=" col-12 col-md-6 mt-5">
                            <h1 className="text-white z-index-1 heading2">Statistically Relevant Data for Your PhD Thesis</h1>
                            <br /> <h5 className="text-white fs-5">Primary data collection is a crucial step in conducting a successful research, without which the research outcome would not be credible or worthy. EduCare Counselling provides specialized primary data collection service to help researchers navigate this complex task, ensuring that the data collected is accurate and reliable and that the final analysis is flawless and worthy.
                                Developing the appropriate data collection tools, sample size, and questionnaires to gather data effectively
                            </h5>
                        </div>
                        <div className="col-12 col-md-6 mb-3 p-5 mt-5 text-center">
                            <img src={Image4} alt="" className="w-100 rounded-5" />
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid" style={{ backgroundColor: "#27d383" }}>
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-12 mb-5 py-4">
                            <h1 className="heading2">Primary Data for PhD Research
                            </h1>
                            <br />
                            <h5>Our PhD Research Data Collection Service ensures that researchers receive expert assistance in navigating the intricacies of primary data collection, guaranteeing the integrity and excellence of their research endeavors. The primary research data is collected directly by a researcher and is essential for determining the credibility and worthiness of a study's outcome. It is considered original research and speaks to the researcher's efforts. Collecting primary data requires expertise and proficiency, as multiple tasks and decisions must be made. Many scholars seek professional help at this stage of their research work to ensure that the final analysis is flawless and worthy and we have the best resources to help you.</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid"
                style={{ backgroundImage: `url(${Image3})`, backgroundSize: "cover", backgroundPosition: "center" }}>
                    <div className="row">
                        <div className="col-12 col-md-2"></div>
                        <div className=" col-12 col-md-8 mt-5 mb-5">
                            <h1 className="text-center z-index-1">Primary Data Collection Methods We Employ</h1>
                            <br /><h5 className="text-center">We are well versed in varied methodologies for collecting data. We also carry out a pilot survey effectively so as to ensure that the actual survey is fruitful.</h5>
                        </div>
                        <div className="col-12 col-md-2"></div>
                        <div className="col-12 col-md-4 mb-3 px-3">
                            <div className="cards p-5">
                                <h2>Interview Method</h2>
                                <h6>This is a common method of data collection that involves conducting personal or phone interviews with individuals. Interviews can be conducted one-on-one or in groups and can be used to gather a wide range of data, including demographics, attitudes, and experiences.</h6>
                            </div>
                        </div>

                        <div className="col-12 col-md-4 mb-3 px-3">
                            <div className="cards p-5">
                                <h2>Delphi Technique</h2>
                                <h6>Involves gathering data through a series of anonymous questionnaires sent to experts in the field. The technique aims to reach a consensus among experts on a specific topic.</h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3 px-3">
                            <div className="cards p-5">
                                <h2>Projective Techniques</h2>
                                <h6>Involves using ambiguous stimuli to infer unconscious thoughts and feelings from participants. These techniques are typically used to gather data on sensitive or personal topics, such as attitudes, emotions, and experiences.</h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3 px-3">
                            <div className="cards p-5">
                                <h2>Role Playing</h2>
                                <h6>Participants act out scenarios to gather data on their behavior and attitudes. Role-playing can be used to gather data on a wide range of topics, including social interactions, problem-solving, and decision-making.</h6>
                            </div>
                        </div>
                        <div className="col-12 col-md-4 mb-3 px-3">
                            <div className="cards p-5">
                                <h2>Cartoon Completion</h2>
                                <h6>Involves giving participants a cartoon with missing elements and asking them to complete it to gather data on their attitudes and perceptions.</h6>
                            </div>
                        </div>
                    </div>
            </div>
        </>
    )
}

export default Services5
