import { Heading } from "../../components/shared/Heading";
import { Subtitle } from "../../components/shared/Subtitle";
import { Paragraph } from "../../components/shared/Paragraph";
import { Button, LargeButton } from "../../components/shared/Buttons";
import { FramedImage } from '../../components/gardens/FramedImage';
import { PageHeader } from '../../components/shared/PageHeader';
import { PageSubheader } from "../../components/shared/PageSubheader";
import { PageParagraph } from '../../components/shared/PageParagraph';
import MediaQuery from 'react-responsive';
import "./thingstodo.css";

export const ThingsToDo = () => {

  
  return (
    <div className="things-to-do-body">
    <div className="things-to-do">
      <div className="background">
            <div className="overlap-group">
              <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/TgoBG9zD/img/rectangle-50.svg" />
              <img className="image" alt="Image" src="https://c.animaapp.com/TgoBG9zD/img/image-71.png" />
              <img className="group" alt="Group" src="https://c.animaapp.com/TgoBG9zD/img/group.png" />
            </div>
          </div>
      <div className="overlap-wrapper">
        
        <div className="overlap">
          <div className="shadow-header" />
          <div className="title">
            <div className="overlap-8">
              
              <MediaQuery maxWidth={764}>
                <PageHeader title={"THINGS TO DO"} isMobile={true}/>
              </MediaQuery>
              <MediaQuery minWidth={765}>
                {/* <Heading className="text-wrapper-10">THINGS TO DO</Heading> */}
                <PageHeader title={"THINGS TO DO"} isMobile={false}/>
              </MediaQuery>
              
            </div>
          </div>
          
          <div className="walk-ride-picnic">
            <div className="picture-2">
              <div className="left-group">
                <FramedImage src={"https://c.animaapp.com/TgoBG9zD/img/nature08-2@2x.png"} className="nature" />
                {/* <img className="nature" alt="Nature" src="https://c.animaapp.com/TgoBG9zD/img/nature08-2@2x.png" /> */}
                <div className="text-wrapper-7">Domino Trail</div>
              </div>
              <div className="right-group">
                <FramedImage src={"https://c.animaapp.com/TgoBG9zD/img/nature04-1@2x.png"} className="nature-2" />
                {/* <img className="nature-2" alt="Nature" src="https://c.animaapp.com/TgoBG9zD/img/nature04-1@2x.png" /> */}
                <div className="text-wrapper-7">Nolan’s Creek</div>
              </div>
            </div>
            <div className="overlap-6">
              <MediaQuery maxWidth={764}>
                
                <PageParagraph title={"Surrounded by gorgeous woodland, Lyonville is the perfect place for one to explore nature."} isMobile={true} className="p" />
              </MediaQuery>
              <MediaQuery minWidth={765}>
                <Paragraph size="lg" className="p">
                  Surrounded by gorgeous woodland, Lyonville is the perfect place for one to explore nature.
                </Paragraph>
              </MediaQuery>

              
              
              
              <MediaQuery maxWidth={764}>
                <PageSubheader title={"Walk, Ride, Picnic"} isMobile={true} className="text-wrapper-8"/>
              </MediaQuery>
              <MediaQuery minWidth={765}>
                <Subtitle size="lg" className="text-wrapper-8">Walk, Ride, Picnic</Subtitle>
              </MediaQuery>
  
            </div>
            
            <a href="https://bushwalkingmanual.org.au/" target="_blank" rel="noopener noreferrer">
                {/* <button className="overlap-group-wrapper">
                    <span className="text-wrapper-9">View Bushwalking Manual</span>
                </button> */}
                <Button title="View Bushwalking Manual" href="/somepath" isMobile={false} className="overlap-group-wrapper" >
                
                </Button>
            </a>


            <div className="map">
              <div className="overlap-7">
                <img
                  className="rectangle-7"
                  alt="Rectangle"
                  src="https://c.animaapp.com/TgoBG9zD/img/rectangle-77.svg"
                />
                <img className="image-5" alt="Image" src="https://c.animaapp.com/TgoBG9zD/img/image-34.png" />
              </div>
            </div>
          </div>

          <div className="historical-walk">

            <MediaQuery maxWidth={764}>
                
              <PageParagraph title={"Explore Lyonville's past through its landmarks like the hall, church, and hotel on this historical walk. Discover the town's rich heritage firsthand."} isMobile={true} className="explore-lyonville-s" />
              </MediaQuery>
            <MediaQuery minWidth={765}>
              <Paragraph size="lg" className="explore-lyonville-s">
              Explore Lyonville&#39;s past through its landmarks like the hall, church, and hotel on this historical
              walk. Discover the town&#39;s rich heritage firsthand.
              </Paragraph>
            </MediaQuery>
            
            
            <MediaQuery maxWidth={764}>
              <PageSubheader title={"Historical Walk"} isMobile={true} className="text-wrapper-5"/>
            </MediaQuery>
            <MediaQuery minWidth={765}>
              <Subtitle size="lg" className="text-wrapper-5">Historical Walk</Subtitle>
            </MediaQuery>
            <a href="https://bushwalkingvictoria.org.au/bwv_walk_directory/trentham-domino-rail-trail/" target="_blank" rel="noopener noreferrer">
              {/* <button className="box">
                <span className="text-wrapper-6">Download Map</span>
              </button> */}
              <Button title="Download Map" href="/somepath" isMobile={false} className="box" >
                
              </Button>
            </a>

            
            <FramedImage src={"https://c.animaapp.com/TgoBG9zD/img/image-79.png"} className="image-4" />
          </div>
          
          <MediaQuery maxWidth={764}>
            <PageSubheader title={"Calendar of Events"} isMobile={true} className="text-wrapper"/>
          </MediaQuery>
          <MediaQuery minWidth={765}>
            <Subtitle size="lg" className="text-wrapper">Calendar of Events</Subtitle>
          </MediaQuery>
          
          <img className="img" alt="Rectangle" src="https://c.animaapp.com/TgoBG9zD/img/rectangle-78.svg" />
          <div className="calendar-of-events">
            <div className="div">
              {/* <div className="overlap-2">
                
                <div className="overlap-3"> */}
                  
                  <div className="open-garden-day">
                    <div className="overlap-group-2">
                      <img className="group-2" alt="Group" src="https://c.animaapp.com/TgoBG9zD/img/group-107@2x.png" />
                      <img className="group-3" alt="Group" src="https://c.animaapp.com/TgoBG9zD/img/group-108@2x.png" />
                      <a href="https://events.humanitix.com/the-real-gardens-of-lyonville" target="_blank" rel="noopener noreferrer">
                        {/* <button className="rectangle-2">
                          <span className="discover-more">Discover More -&gt;</span>
                        </button> */}
                        <LargeButton title="Discover More -&gt;" href="/somepath" isMobile={false} className="rectangle-4" >
                
                        </LargeButton>
                      </a>

                      <img className="image-2" alt="Image" src="https://c.animaapp.com/TgoBG9zD/img/image-36@2x.png" />
                      <div className="text-wrapper-2">Open Garden Day</div>
                    </div>
                  </div>
                  <div className="woodchop">
                    <div className="overlap-4">
                      <img className="group-4" alt="Group" src="https://c.animaapp.com/TgoBG9zD/img/group-109@2x.png" />
                      <img className="group-5" alt="Group" src="https://c.animaapp.com/TgoBG9zD/img/group-110@2x.png" />
                      <a href="https://visithepburnshire.com.au/event/lyonville-woodchop-family-fun-day/" target="_blank" rel="noopener noreferrer">
                        {/* <button className="rectangle-3">
                          <span className="discover-more-2">Discover More -&gt;</span>
                        </button> */}
                        <LargeButton title="Discover More -&gt;" href="/somepath" isMobile={false} className="rectangle-4" >
                
                        </LargeButton>
                      </a>
                      <img className="image-3" alt="Image" src="https://c.animaapp.com/TgoBG9zD/img/image-37@2x.png" />
                      <div className="text-wrapper-3">Woodchop</div>
                    </div>
                  </div>
                {/* </div>
              </div> */}

              <div className="bakeoff">
                <div className="overlap-4">
                  <img className="group-4" alt="Group" src="https://c.animaapp.com/TgoBG9zD/img/group-111@2x.png" />
                  <img className="group-5" alt="Group" src="https://c.animaapp.com/TgoBG9zD/img/group-112@2x.png" />
                  <a href="https://tlnews.com.au/the-lyonville-bake-off-is-back/#:~:text=August%209th%2C%202023The%20Lyonville,from%2010.30am%20%E2%80%93%203.30pm.COMI" target="_blank" rel="noopener noreferrer">
                    {/* <button className="rectangle-4">
                      <span className="discover-more-3">Discover More -&gt;</span>
                    </button> */}
                    <LargeButton title="Discover More -&gt;" href="/somepath" isMobile={false} className="rectangle-4" >
                
                    </LargeButton>
                  </a>
                  <img className="event" alt="Event" src="https://c.animaapp.com/TgoBG9zD/img/event01-1@2x.png" />
                  <div className="text-wrapper-4">Bakeoff</div>
                </div>
              </div>

              {/* <div className="new-event-1">
                <div className="overlap-4">
                  <img className="group-4" alt="Group" src="https://c.animaapp.com/TgoBG9zD/img/group-111@2x.png" />
                  <img className="group-5" alt="Group" src="https://c.animaapp.com/TgoBG9zD/img/group-112@2x.png" />
                  
                  <LargeButton title="Discover More -&gt;" href="/somepath" isMobile={false} className="rectangle-4" >
                
                  </LargeButton>
                  <div className="text-wrapper-4">New Event</div>
                </div>
              </div> */}


            </div>
          </div>
          
          
          
        </div>
      </div>
    </div>
    </div>
  );
};
