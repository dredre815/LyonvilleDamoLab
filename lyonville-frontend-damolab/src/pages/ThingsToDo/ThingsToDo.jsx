// import React from "react";
// import React, { useRef, useState } from "react";

// import { Link } from "react-router-dom";
import { Link } from "react-router-dom";
import "./thingstodo.css";

export const ThingsToDo = () => {

  
  return (
    <div className="things-to-do">
      <div className="div">
        {/* <footer className="footer">
          <div className="overlap">
            <img className="logo" alt="Logo" src="https://c.animaapp.com/v3JAvtAV/img/logo@2x.png" />
            <div className="community-pages">
              <div className="overlap-group">
                <div className="text-wrapper">Community Pages</div>
                <div className="text-wrapper-2">Community Newsletter</div>
                <div className="text-wrapper-3">Rail Updates</div>
                <div className="text-wrapper-4">Community Pages</div>
              </div>
              <div className="overlap-2">
                <div className="text-wrapper-5">Hepburn Shire</div>
                <div className="text-wrapper-6">Landcare</div>
                <div className="text-wrapper-7">Fireguard</div>
              </div>
            </div>
            <div className="calender-events">
              <div className="overlap-3">
                <div className="text-wrapper-8">Calender Events</div>
                <div className="text-wrapper-9">Open Garden Day</div>
                <div className="text-wrapper-10">Woodchop</div>
                <div className="text-wrapper-11">Bakeoff</div>
                <div className="text-wrapper-12">Café de Lyonville</div>
                <div className="text-wrapper-13">Radio Springs Hotel</div>
                <div className="text-wrapper-14">The Artful Meadows</div>
              </div>
            </div>
            <div className="lyonville">
              <div className="overlap-4">
                <div className="text-wrapper-15">Lyonville</div>
                <div className="text-wrapper-16">About Lyonville</div>
                <div className="text-wrapper-17">Getting there</div>
                <div className="text-wrapper-11">History</div>
                <div className="text-wrapper-18">Weather</div>
              </div>
            </div>
            <div className="social-icon">
              <img className="vector" alt="Vector" src="https://c.animaapp.com/v3JAvtAV/img/vector.svg" />
              <img className="instagram" alt="Instagram" src="https://c.animaapp.com/v3JAvtAV/img/instagram-1.svg" />
              <img className="facebook-f" alt="Facebook f" src="https://c.animaapp.com/v3JAvtAV/img/facebook-f-1.svg" />
            </div>
            <div className="contact">
              <div className="overlap-5">
                <div className="text-wrapper-19">Get in Contact</div>
                <div className="text-wrapper-20">Feedback and Ideas</div>
                <div className="text-wrapper-21">Facebook</div>
                <div className="text-wrapper-22">Instagram</div>
              </div>
            </div>
          </div>
        </footer> */}
        <div className="overlap-6">
          <div className="background">
            <div className="overlap-7">
              <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/v3JAvtAV/img/rectangle-50.svg" />
              <img className="image" alt="Image" src="https://c.animaapp.com/v3JAvtAV/img/image-71.png" />
              <img className="group" alt="Group" src="https://c.animaapp.com/v3JAvtAV/img/group.png" />
            </div>
          </div>

          
          <div className="calendar-of-events">
            <div className="overlap-8">
              {/* <div className="overlap-8"> */}
                <img className="img" alt="Rectangle" src="https://c.animaapp.com/v3JAvtAV/img/rectangle-78.svg" />
                <div className="overlap-9">
                  <div className="text-wrapper-23">Calendar of Events</div>
                  <div className="open-garden-day">
                    <div className="overlap-group-2">
                      <img className="group-2" alt="Group" src="https://c.animaapp.com/v3JAvtAV/img/group-107@2x.png" />
                      <img className="group-3" alt="Group" src="https://c.animaapp.com/v3JAvtAV/img/group-108@2x.png" />
                      <div className="rectangle-2" />
                      <div className="discover-more">Discover more -&gt;</div>
                      <img className="image-2" alt="Image" src="https://c.animaapp.com/v3JAvtAV/img/image-36@2x.png" />
                      <div className="text-wrapper-24">Open Garden Day</div>
                    </div>
                  </div>
                  <div className="woodchop">
                    <div className="overlap-10">
                      <img className="group-4" alt="Group" src="https://c.animaapp.com/v3JAvtAV/img/group-109@2x.png" />
                      <img className="group-5" alt="Group" src="https://c.animaapp.com/v3JAvtAV/img/group-110@2x.png" />
                      <div className="rectangle-2" />
                      <div className="discover-more">Discover more -&gt;</div>
                      <img className="image-3" alt="Image" src="https://c.animaapp.com/v3JAvtAV/img/image-37@2x.png" />
                      <div className="text-wrapper-25">Woodchop</div>
                    </div>
                  </div>
                </div>
              {/* </div> */}
              <div className="bakeoff">
                <div className="overlap-10">
                  <img className="group-4" alt="Group" src="https://c.animaapp.com/v3JAvtAV/img/group-111@2x.png" />
                  <img className="group-5" alt="Group" src="https://c.animaapp.com/v3JAvtAV/img/group-112@2x.png" />
                  <div className="rectangle-2" />
                  <div className="discover-more">Discover more -&gt;</div>
                  <img className="image-4" alt="Image" src="https://c.animaapp.com/v3JAvtAV/img/image-38@2x.png" />
                  <div className="text-wrapper-26">Bakeoff</div>
                </div>
              </div>

              {/* 添加新的板块以增加内容量，从而实现滚动效果 */}
            <div className="new-event-1">
                
                    <div className="overlap-10">
                    <img className="group-4" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-109@2x.png" />
                    <img className="group-5" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-110@2x.png" />
                    <div className="rectangle-2" />
                    <div className="discover-more">Discover more -&gt;</div>
                    <img className="image-4" alt="Image" />
                    <div className="text-wrapper-26">New Event 1</div>
                  </div>
             
            </div>

            <div className="new-event-2">
                
                    <div className="overlap-10">
                    <img className="group-4" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-109@2x.png" />
                    <img className="group-5" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-110@2x.png" />
                    <div className="rectangle-2" />
                    <div className="discover-more">Discover more -&gt;</div>
                    <img className="image-4" alt="Image" />
                    <div className="text-wrapper-26">New Event 2</div>
                  </div>
               
            </div>

            <div className="new-event-3">
             
                    <div className="overlap-10">
                    <img className="group-4" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-109@2x.png" />
                    <img className="group-5" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-110@2x.png" />
                    <div className="rectangle-2" />
                    <div className="discover-more">Discover more -&gt;</div>
                    <img className="image-4" alt="Image" />
                    <div className="text-wrapper-26">New Event 3</div>
                  </div>
              
            </div>


        


            </div>
            {/* <div className="scorll-bar">
              <div className="overlap-group-3">
                <div className="overlap-group-wrapper">
                  <div className="overlap-group-3">
                    <div className="ellipse" />
                    <div className="ellipse-2" />
                    <div className="rectangle-5" />
                  </div>
                </div>
                <div className="overlap-wrapper">
                  <div className="overlap-group-3">
                    <div className="rectangle-6" />
                    <div className="ellipse-3" />
                    <div className="ellipse-4" />
                  </div>
                </div>
              </div>
            </div> */}
          </div>
          <div className="historical-walk">
            <p className="explore-lyonville-s">
              Explore Lyonville&#39;s past through its landmarks like the hall, church, and hotel on this historical
              walk. Discover the town&#39;s rich heritage firsthand.
            </p>
            <div className="text-wrapper-27">Historical Walk</div>
            <div className="box">
              <div className="overlap-group-4">
                <div className="text-wrapper-28">Download Map</div>
                <div className="rectangle-7" />
              </div>
            </div>
            <div className="picture">
              <div className="overlap-11">
                <img
                  className="rectangle-8"
                  alt="Rectangle"
                  src="https://c.animaapp.com/v3JAvtAV/img/rectangle-66.svg"
                />
                <img className="image-5" alt="Image" src="https://c.animaapp.com/v3JAvtAV/img/image35.png" />
              </div>
            </div>
          </div>
          <div className="walk-ride-picnic">
            <div className="picture-2">
              <div className="left-group">
                <img
                  className="img-2"
                  alt="Boys walking in bush"
                  src="https://c.animaapp.com/v3JAvtAV/img/boys-walking-in-bush-domino-trail-1@2x.png"
                />
                <div className="text-wrapper-29">Domino Trail</div>
              </div>
              <div className="right-group">
                <div className="text-wrapper-29">Nolan’s Creek</div>
                <img
                  className="img-2"
                  alt="Img"
                  src="https://c.animaapp.com/v3JAvtAV/img/eyjidwnrzxqioijhc3nldhmuywxsdhjhawxzlmnvbsisimtlesi6invwbg9hzhmv@2x.png"
                />
              </div>
            </div>
            <div className="overlap-12">
              <p className="p">
                Surrounded by gorgeous woodland, Lyonville is the perfect place for one to explore nature.
              </p>
              <div className="text-wrapper-30">Walk, Ride, Picnic</div>
            </div>
            <div className="div-wrapper">
              <div className="overlap-group-4">
                <div className="text-wrapper-31">View Bushwalking Manual</div>
                <div className="rectangle-7" />
              </div>
            </div>
            <div className="map">
              <div className="overlap-13">
                <img
                  className="rectangle-9"
                  alt="Rectangle"
                  src="https://c.animaapp.com/v3JAvtAV/img/rectangle-77.svg"
                />
                <img className="image-6" alt="Image" src="https://c.animaapp.com/v3JAvtAV/img/image-34.png" />
              </div>
            </div>
          </div>
          <div className="title">
            <div className="overlap-14">
              <div className="rectangle-10" />
              <div className="text-wrapper-32">THINGS TO DO</div>
            </div>
          </div>
          {/* <header className="header">
            <div className="overlap-15">
              <div className="shadow-header" />
              <img className="BG-header" alt="Bg header" src="https://c.animaapp.com/v3JAvtAV/img/bgheader.svg" />
              <div className="icon">
                <div className="ellipse-5" />
                <div className="ellipse-6" />
                <div className="ellipse-7" />
              </div>
              <div className="context">
                <div className="title-2">
                  <Link className="text-wrapper-33" to="/things-to-do">
                    Things to Do
                  </Link>
                  <div className="overlap-group-5">
                    <div className="text-wrapper-34">History</div>
                    <div className="text-wrapper-35">Getting There</div>
                  </div>
                  <div className="about-lyonville"> About Lyonville</div>
                </div>
                <div className="text-wrapper-36">LYONVILLE</div>
              </div>
            </div>
          </header> */}
        </div>
      </div>
    </div>
  );
};
