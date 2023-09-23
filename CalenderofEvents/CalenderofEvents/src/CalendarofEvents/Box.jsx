import React, { useRef, useState } from "react";
import "./style.css";

export const Box = () => {

  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    if (!containerRef.current) return;

    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = x - startX; // how far the mouse has been moved
    containerRef.current.scrollLeft = scrollLeft - walk;
  };





  return (
    <div className="box">
      <div className="calendar-of-events">
        <div className="overlap">
          {/* <div className="overlap"> */}
            <img className="rectangle" alt="Rectangle" src="https://c.animaapp.com/uql2BcTx/img/rectangle-78.svg" />
            {/* <div className="overlap-group"> */}
              <div className="text-wrapper">Calendar of Events</div>

              
              <div className="open-garden-day">
                <div className="div">
                  <img className="group" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-107@2x.png" />
                  <img className="img" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-108@2x.png" />
                  <div className="rectangle-2" />
                  <div className="discover-more">Discover more -&gt;</div>
                  <img className="image" alt="Image" src="https://c.animaapp.com/uql2BcTx/img/image-36@2x.png" />
                  <div className="text-wrapper-2">Open Garden Day</div>
                </div>
              </div>
              <div className="woodchop">
                <div className="overlap-2">
                  <img className="group-2" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-109@2x.png" />
                  <img className="group-3" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-110@2x.png" />
                  <div className="rectangle-3" />
                  <div className="discover-more-2">Discover more -&gt;</div>
                  <img className="image-2" alt="Image" src="https://c.animaapp.com/uql2BcTx/img/image-37@2x.png" />
                  <div className="text-wrapper-3">Woodchop</div>
                </div>
              </div>
            {/* </div> */}
          {/* </div> */}
            <div className="bakeoff">
              <div className="overlap-2">
                <img className="group-2" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-111@2x.png" />
                <img className="group-3" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-112@2x.png" />
                <div className="rectangle-4" />
                <div className="discover-more-3">Discover more -&gt;</div>
                <img className="image-3" alt="Image" src="https://c.animaapp.com/uql2BcTx/img/image-38@2x.png" />
                <div className="text-wrapper-4">Bakeoff</div>
              </div>
            </div>

          {/* 添加新的板块以增加内容量，从而实现滚动效果 */}
          <div className="new-event-1">
              <div className="div">
                  <div className="overlap-2">
                  <img className="group-2" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-109@2x.png" />
                  <img className="group-3" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-110@2x.png" />
                  <div className="rectangle-3" />
                  <div className="discover-more-2">Discover more -&gt;</div>
                  <img className="image-2" alt="Image" />
                  <div className="text-wrapper-3">New Event 1</div>
                </div>
              </div>
          </div>

          <div className="new-event-2">
              <div className="div">
                  <div className="overlap-2">
                  <img className="group-2" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-109@2x.png" />
                  <img className="group-3" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-110@2x.png" />
                  <div className="rectangle-3" />
                  <div className="discover-more-2">Discover more -&gt;</div>
                  <img className="image-2" alt="Image" />
                  <div className="text-wrapper-3">New Event 2</div>
                </div>
              </div>
          </div>

          <div className="new-event-3">
              <div className="div">
                  <div className="overlap-2">
                  <img className="group-2" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-109@2x.png" />
                  <img className="group-3" alt="Group" src="https://c.animaapp.com/uql2BcTx/img/group-110@2x.png" />
                  <div className="rectangle-3" />
                  <div className="discover-more-2">Discover more -&gt;</div>
                  <img className="image-2" alt="Image" />
                  <div className="text-wrapper-3">New Event 3</div>
                </div>
              </div>
          </div>
      

          
        </div>
        <div className="scorll-bar"
          onMouseDown={handleMouseDown}
          onMouseLeave={() => setIsDragging(false)}
          onMouseUp={() => setIsDragging(false)}
          onMouseMove={handleMouseMove}
        >


          {/* <div className="overlap-group-2">
            <div className="overlap-group-wrapper">
              <div className="overlap-group-2">
                <div className="ellipse" />
                <div className="ellipse-2" />
                <div className="rectangle-5" />
              </div>
            </div>
            <div className="overlap-wrapper">
              <div className="overlap-group-2">
                <div className="rectangle-6" />
                <div className="ellipse-3" />
                <div className="ellipse-4" />
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};
