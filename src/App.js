import './style.css';
import { FaEnvelope, FaInstagram, FaFacebookF, FaTwitter, FaVimeoSquare, FaDribbble, FaSkype, FaPhoneAlt, FaCaretRight, FaAmbulance, FaStethoscope, FaHospitalAlt, FaHeartbeat, FaEye, FaBrain, FaQuoteRight, FaPenSquare } from "react-icons/fa";
import { TbDental } from "react-icons/tb";
import { BsPeopleFill } from "react-icons/bs";
import { BiLocationPlus, BiErrorCircle } from "react-icons/bi"
import { GiHeartOrgan, GiMicroscope } from "react-icons/gi";

function App() {
  return (

    // info header start

    <div>
      <div class="info-header">
        <div class="container">
          <div class="flex">
            <div class="com-info flex">
              <div class="com-mail">
                <a>
                  <span><FaEnvelope></FaEnvelope></span>
                  company@gmail.com
                </a>
              </div>
              <div class="com-contact">
                <a>
                  <span><FaPhoneAlt></FaPhoneAlt></span>
                  (732)830-830-380
                </a>
              </div>
            </div>
            <div class="com-social">
              <a><FaInstagram></FaInstagram></a>
              <a><FaFacebookF></FaFacebookF></a>
              <a><FaTwitter></FaTwitter></a>
              <a><FaVimeoSquare></FaVimeoSquare></a>
              <a><FaDribbble></FaDribbble></a>
              <a><FaSkype></FaSkype></a>
            </div>
          </div>
        </div>
      </div>
      <hr></hr>

      {/* info header over */}

      {/* main header start */}

      <div class="main-header">
        <div class="container">
          <div class="flex">
            <div class="logo">
              <img src={require('./images/logo.png')}></img>
            </div>
            <nav>
              <ul class="main-menu">
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Services</a></li>
                <li><a>Appointment</a></li>
                <li><a>Doctors</a></li>
                <li><a>Department</a></li>
                <li><a>Blog</a></li>
                <li><a>Contact</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      {/* main header over */}

      {/* slider start */}

      <div class="slider-img">
        <p>Welcome To The Hospital</p>
      </div>

      {/* slider over */}

      {/* about us section start */}

      <div class="container">
        <div class="spacer">
          <div class="flex">
            <div class="about-img">
              <img src={require('./images/img2.jpg')}></img>
            </div>
            <div class="about-des">
              <h3>ABOUT US</h3>
              <h5>What we are and our history</h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
              </p>
              <button class="about-btn">
                READ MORE
              </button>
              <hr class="about-line"></hr>
              <h3>
                VISION & MISSION
              </h3>
              <h5>
                our goal and thoughts
              </h5>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into electronic typesetting,
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* about us section over */}

      {/* box section start */}

      <div class="container">
        <div class="flex">
          <div class="box">
            <div class="inner-box">
              <h1>Our Service List</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              </p>
              <button class="box-btn"><a>View All Services</a></button>
            </div>
          </div>
          <div class="box" id="box2">
            <div class="inner-box">
              <h3>
                Our Benefits
              </h3>
              <p>It is a long established fact that a reader will </p>
              <ul>
                <li><span><FaCaretRight></FaCaretRight></span>Qualified Staff of Doctors</li>
                <li><span><FaCaretRight></FaCaretRight></span>Employee Occupational Health & Wellness</li>
                <li><span><FaCaretRight></FaCaretRight></span>Save Your Money and Time with us</li>
                <li><span><FaCaretRight></FaCaretRight></span>24x7 Emergency service</li>
                <li><span><FaCaretRight></FaCaretRight></span>Feel Like you are at Home Services</li>
              </ul>
            </div>
          </div>
          <div class="box" id="box3">
            <div class="inner-box">
              <h3>Our Working Hours</h3>
              <p>It is a long established fact that a reader will.</p>
              <span class="flex">
                <h5>Monday-wednesday</h5>
                <h5 class="right">08.00 - 18.00</h5>
              </span>
              <hr></hr>
              <span class="flex">
                <h5>Thursday-Friday</h5>
                <h5 class="right">08.00 - 18.00</h5>
              </span>
              <hr></hr>
              <span class="flex">
                <h5>Saturday</h5>
                <h5 class="right">08.00 - 18.00</h5>
              </span>
              <hr></hr>
              <span class="flex">
                <h5>Sunday</h5>
                <h5 class="right">closed</h5>
              </span>
              <hr></hr>
            </div>
          </div>
        </div>
      </div>

      {/* box section over */}

      {/* offered services section start */}

      <div class="container">
        <div class="spacer">
          <div class="service-ttl">
            <h3>Services We Offer</h3>
            <span>Our department & special service</span>
          </div>
          <div class="row">
            <div class="flex">
              <div class="service-1">
                <div class="flex">
                  <span><FaAmbulance></FaAmbulance></span>
                  <div class="peta-ttl">
                    <h4>Emergency Care</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever</p>
                  </div>
                </div>
              </div>
              <div class="service-1" id="s-2">
                <div class="flex">
                  <span><FaStethoscope></FaStethoscope></span>
                  <div class="peta-ttl">
                    <h4>Call Center 24/7</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever</p>
                  </div>
                </div>
              </div>
              <div class="service-1" id="s-3">
                <div class="flex">
                  <span><FaPhoneAlt></FaPhoneAlt></span>
                  <div class="peta-ttl">
                    <h4>Call Center 24/7</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="flex">
              <div class="service-1" id="s-4">
                <div class="flex">
                  <span><FaHospitalAlt></FaHospitalAlt></span>
                  <div class="peta-ttl">
                    <h4>Blood Test</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever</p>
                  </div>
                </div>
              </div>
              <div class="service-1" id="s-5">
                <div class="flex">
                  <span><FaHeartbeat></FaHeartbeat></span>
                  <div class="peta-ttl">
                    <h4>Cardic Surgery</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever</p>
                  </div>
                </div>
              </div>
              <div class="service-1" id="s-6">
                <div class="flex">
                  <span><TbDental></TbDental></span>
                  <div class="peta-ttl">
                    <h4>Dental Care</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="flex">
              <div class="service-1" id="s-7">
                <div class="flex">
                  <span><FaStethoscope></FaStethoscope></span>
                  <div class="peta-ttl">
                    <h4>Outdoor Checkup</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever</p>
                  </div>
                </div>
              </div>
              <div class="service-1" id="s-8">
                <div class="flex">
                  <span><FaEye></FaEye></span>
                  <div class="peta-ttl">
                    <h4>Ophthalmology</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever</p>
                  </div>
                </div>
              </div>
              <div class="service-1" id="s-9">
                <div class="flex">
                  <span><GiHeartOrgan></GiHeartOrgan></span>
                  <div class="peta-ttl">
                    <h4>Heart disease</h4>
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                      Lorem Ipsum has been the industry's standard dummy text ever</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* offered services section over */}

      {/* why choose us section start */}

      <div class="choose-we">
        <div class="container">
          <div class="spacer">
            <div class="choose-us">
              <div class="choose-us-ttl">
                <h3>Why Choose Us</h3>
                <p>Our department & special service</p>
              </div>
            </div>
            <div class="flex">
              <div class="choose-box">
                <div class="form-area">
                  <form class="">
                    <div class="form-padding">
                      <h4>Appointment Form</h4>
                      <div class="form-group">
                        <label>NAME AND SURNAME</label>
                        <input type="text" class="form-control" id="name" name="name" placeholder="Name"></input>
                      </div>
                      <div class="form-group">
                        <label>EMAIL</label>
                        <input type="text" class="form-control" id="email" name="name" placeholder="Email"></input>
                      </div>
                      <div class="form-group">
                        <label>PATIANT NUMBER</label>
                        <input type="text" class="form-control" id="number" name="name" placeholder="Mobile Number"></input>
                      </div>
                      <div class="form-group flex">
                        <div class="form-from">
                          <label>DATE FROM</label>
                          <input type="text" class="form-control" id="number" name="name" placeholder="From"></input>
                        </div>
                        <div class="form-to">
                          <label>DATE TO</label>
                          <input type="text" class="form-control" id="number" name="name" placeholder="To"></input>
                        </div>
                      </div>
                      <div class="form-group">
                        <label>HOURLY PREFERENCE</label>
                        <div>
                          <button id="btn1">MORNING</button>
                          <button>LUNCH</button>
                          <button>EVENING</button>
                        </div>
                      </div>
                      <hr color='#ddd'></hr>
                      <div class="form-footer flex">
                        <div>
                          <input type="checkbox" class="checkbox"></input>
                          <label>send me copy of message</label>
                        </div>
                        <div class="form-submit">
                          <button>SUBMIT</button>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              <div class="choose-box">
                <div class="doctor-img">
                  <img src={require('./images/asset 7.png')}></img>
                </div>
              </div>
              <div class="choose-box">
                <div class="choose-info">
                  <div class="flex">
                    <div class="choose-icon">
                      <FaPhoneAlt></FaPhoneAlt>
                    </div>
                    <div class="choose-content">
                      <h4>Health Information</h4>
                      <hr></hr>
                      <p>
                        Contrary to popular belief,
                        Lorem Ipsum is not simply random text. It has roots in a piece of classical
                        Latin literature from 45 BC.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="choose-info">
                  <div class="flex">
                    <div class="choose-icon" id="icon2">
                      <GiMicroscope></GiMicroscope>
                    </div>
                    <div class="choose-content">
                      <h4>Medical Education</h4>
                      <hr></hr>
                      <p>
                        Contrary to popular belief,
                        Lorem Ipsum is not simply random text. It has roots in a piece of classical
                        Latin literature from 45 BC.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="choose-info">
                  <div class="flex">
                    <div class="choose-icon" id="icon3">
                      <FaHospitalAlt></FaHospitalAlt>
                    </div>
                    <div class="choose-content">
                      <h4>Sympton Check</h4>
                      <hr></hr>
                      <p>
                        Contrary to popular belief,
                        Lorem Ipsum is not simply random text. It has roots in a piece of classical
                        Latin literature from 45 BC.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="choose-info">
                  <div class="flex">
                    <div class="choose-icon" id="icon4">
                      <BsPeopleFill></BsPeopleFill>
                    </div>
                    <div class="choose-content">
                      <h4>Qualified Doctors</h4>
                      <hr></hr>
                      <p>
                        Contrary to popular belief,
                        Lorem Ipsum is not simply random text. It has roots in a piece of classical
                        Latin literature from 45 BC.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* why choose us section over */}

      {/* our doctors section start */}

      <div class="d-section">
        <div class="container">
          <div class="spacer">
            <div class="choose-us">
              <div class="choose-us-ttl">
                <h3>
                  OUR DOCTORS
                </h3>
                <p>Out Department And Services</p>
              </div>
            </div>
            <div class="flex">
              <div class="doctor">
                <div class="doctor-img">
                  <img src={require('./images/asset 8.png')}></img>
                </div>
                <div class="doctor-name">
                  <h4>Dr.David Moniky</h4>
                  <h5>Huntington's</h5>
                </div>
              </div>
              <div class="doctor">
                <div class="doctor-img">
                  <img src={require('./images/asset 9.png')}></img>
                </div>
                <div class="doctor-name">
                  <h4>Dr.David Moniky</h4>
                  <h5>Huntington's</h5>
                </div>
              </div>
              <div class="doctor">
                <div class="doctor-img">
                  <img src={require('./images/doctorimg.png')}></img>
                </div>
                <div class="doctor-name">
                  <h4>Dr.David Moniky</h4>
                  <h5>Huntington's</h5>
                </div>
              </div>
              <div class="doctor">
                <div class="doctor-img">
                  <img src={require('./images/asset 11.png')}></img>
                </div>
                <div class="doctor-name">
                  <h4>Dr.David Moniky</h4>
                  <h5>Huntington's</h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* our doctors section over */}

      {/* department section start */}

      <div class="container">
        <div class="spacer">
          <div class="choose-us">
            <div class="choose-us-ttl">
              <h3>Department</h3>
              <p>our department and service</p>
            </div>
          </div>
          <div class="flex">
            <div class="dep" id="dep-1">
              <div class="dep-menu flex">
                <div class="menu-box">
                  <GiHeartOrgan></GiHeartOrgan>
                  <h4>Heart disease</h4>
                </div>
                <div class="menu-box">
                  <GiHeartOrgan></GiHeartOrgan>
                  <h4>Hepatology</h4>
                </div>
              </div>
              <div class="dep-menu flex">
                <div class="menu-box">
                  <FaBrain></FaBrain>
                  <h4>Huntington's</h4>
                </div>
                <div class="menu-box">
                  <TbDental></TbDental>
                  <h4>Dental</h4>
                </div>
              </div>
              <div class="dep-menu flex">
                <div class="menu-box">
                  <FaEye></FaEye>
                  <h4>Ophthalmology</h4>
                </div>
                <div class="menu-box">
                  <FaEye></FaEye>
                  <h4>Otology</h4>
                </div>
              </div>
            </div>
            <div class="dep" id="dep-2">
              <div class="dep-icon icon-sec">
                <GiHeartOrgan></GiHeartOrgan>
              </div>
            </div>
            <div class="dep" id="dep-3">
              <div class="dep-detail">
                <h2>Heart disease</h2>
                <p>
                  There are many variations of passages of Lorem Ipsum available,
                  but the majority have suffered alteration in some form, by injected humour,
                  or randomised words which don't look even slightly believable. If you are going
                  to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing
                  hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to
                  repeat predefined chunks as necessary, making this the first true generator on the Internet.
                </p>
              </div>
              <div class="dep-btn">
                <div class="flex">
                  <button class="btn1">MAKE APPOINTMENT</button>
                  <button class="btn2">ALL DEPARTMENT</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* department section over */}

      {/* comments section start */}

      <div class="comment">
        <div class="container flex">
          <div class="custom-img">
            <img src={require('./images/asset 12.png')}></img>
          </div>
          <div class="custom-comment">
            <div class="comment-ttl">
              <h1>CUSTOMER COMMENTS</h1>
              <div class="flex">
                <span><FaQuoteRight></FaQuoteRight></span>
                <p>
                  All the lorem ipsum generators on the internet tend to repeat predefined chunks as necessary,
                  making this the first true on the Internet. uses a dictionary of over.
                </p>
              </div>
              <div class="customer">
                - Mozammel Hoque,
                <span>Advisor</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* comment section over */}

      {/* footer start */}

      <footer>
        <div class="container">
          <div class="appointment-link">
            <div class="ap-inner flex">
              <div class="ap-icon">
                <FaPenSquare></FaPenSquare>
              </div>
              <div class="ap-text">
                <h3>
                  Need a Doctor for Check-up?
                </h3>
                <h2>
                  JUST MAKE AN APPOINTMENT & YOU'RE DONE !
                </h2>
              </div>
              <div class="ap-btn">
                <button>GET AN APPOINTMENT</button>
              </div>
            </div>
          </div>
          <div class="flex">
            <div class="foot-box">
              <div class="add-inner">
                <img src={require('./images/logo.png')}></img>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the.
                </p>
                <div class="address flex">
                  <span><BiLocationPlus></BiLocationPlus></span>
                  <p>PO Box 16122 Collins Street <br></br> West Victoria 8007 Australia</p>
                </div>
                <div class="address flex">
                  <span><FaPhoneAlt></FaPhoneAlt></span>
                  <p>+880153625892</p>
                </div>
                <div class="address flex">
                  <span><FaEnvelope></FaEnvelope></span>
                  <p>bdtask@gmail.com</p>
                </div>
              </div>
            </div>
            <div class="foot-box">
              <div class="add-inner">
                <h4 class="foot-ttl">Latest News</h4>
                <div class="post">
                  <ul>
                    <li>
                      <img src={require('./images/asset 16.jpeg')}></img>
                      <a>Healthy Lifestyle Tips</a><br></br>
                      <span>Oct 6, 2016</span>
                    </li>
                    <li>
                      <img src={require('./images/asset 17.jpeg')}></img>
                      <a>Child Care</a><br></br>
                      <span>Oct 6, 2016</span>
                    </li>
                    <li>
                      <img src={require('./images/asset 18.jpeg')}></img>
                      <a>Daily Experiance Is Essential</a><br></br>
                      <span>Oct 6, 2016</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="foot-box">
              <div class="add-inner">
                <h4 class="foot-ttl">Latest Tweet</h4>
                <div class="tweet">
                  <span><FaTwitter></FaTwitter></span>
                  <p>
                    Lorem Ipsum is @simply dummy text of the printing and typesetting industry.
                  </p>
                  <label><i>7 minutes ago</i></label>
                </div>
                <div class="tweet">
                  <span><FaTwitter></FaTwitter></span>
                  <p>
                    Lorem Ipsum is @simply dummy text of the printing and typesetting industry.
                  </p>
                  <label><i>1 hour ago ago</i></label>
                </div>
              </div>
            </div>
            <div class="foot-box">
              <div class="add-inner">
                <h4 class="foot-ttl">Map</h4>
                <div class="map-box">
                  <span><BiErrorCircle></BiErrorCircle></span>
                  <h3>Oops! Something went wrong</h3>
                  <p>This page didn't load Google Maps correctly. See the JavaScript
                    console for technical details.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* footer over */}

      {/* sub footer start */}

      <div class="sub-footer">
        <div class="container">
          <div class="text">
            <p>Copyright © 2016. All rights reserved</p>
          </div>
        </div>
      </div>

      {/* sub footer over */}
    </div>


  );
}

export default App;
