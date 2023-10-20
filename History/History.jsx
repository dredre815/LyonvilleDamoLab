import './history.css';
import avenue from '../../assets/history/avenue-honor.png';
import settle from '../../assets/history/settlement.png';
import railway from '../../assets/history/railway.png';
import forest from '../../assets/history/wombat-forest.png';
import walk from '../../assets/history/historical-walk.png';
import MediaQuery from 'react-responsive';

import { PageParagraph } from '../../components/shared/PageParagraph';
import { PageHeader } from '../../components/shared/PageHeader';
import { PageSubheader } from '../../components/shared/PageSubheader';
import { Button } from '../../components/shared/Buttons';
import { Image } from '../../components/shared/Images';
import { FramedImage } from '../../components/gardens/FramedImage';

import { getImageAttributions } from "../../components/shared/attribution/GetAttribution";
import {
  title, subheaders, subparagraphs, cardHeaders, cardParagraphs, hrefs, attrImages, 
  attrImageLinks, attrAuthors, attrAuthorLinks, attrKeys,
} from './HistoryConstants';


export const History = () => {
  return (
    <div className="hist-bg">
      {/* 
      ==============================================
      Website design for header
      ==============================================
      */}

      <MediaQuery minWidth={1024}>
        <div className="history-shadow"></div>
        <PageHeader title={title} />
        <PageSubheader title={subheaders[0]} />
        <PageParagraph title={subparagraphs[0]} />
        <a href={hrefs[0]} className="flex justify-between">
          <Button title="Discover more" className="ml-auto mr-40 self-center items-center" />
        </a>

        <div className="history-about">
          <FramedImage src={settle} className="ml-0 mr-0 w-[200%]" />

          <div className="history-right">
            <PageSubheader title={subheaders[1]}isLeft={false} className="mr-[-5%]" />
            <PageParagraph title={subparagraphs[1]} className="mr-[0%]" />
          </div>
        </div>
      </MediaQuery>


    {/* 
    ==============================================
    Website design for 4x4 card
    ==============================================
    */}

    <MediaQuery minWidth={1441}>
      <div className="list">
        <div className="item hover:scale-[101%] hover:shadow-lg duration-300">
          <PageSubheader title={cardHeaders[0]} className="ml-[0%] h1" />
          <div className="item-content">
            <PageParagraph title={cardParagraphs[0]} className="ml-auto mr-auto" />
            <div>
              <Image src={railway} />
            </div>
          </div>
        </div>

        <div className="item hover:scale-[101%] hover:shadow-lg duration-300">
          <PageSubheader title={cardHeaders[1]} className="ml-[0%] h1" />
          <div className="item-content">
            <div className="item-left">
              <PageParagraph title={cardParagraphs[1]} className="ml-auto mr-auto" />
              <a href={hrefs[1]} className="flex justify-between">
                <Button title="Discover more" className="ml-auto mr-40" />
              </a>
            </div>
            <div>
              <Image src={forest} />
            </div>
          </div>
        </div>

        <div className="item hover:scale-[101%] hover:shadow-lg duration-300">
          <PageSubheader title={cardHeaders[2]} className="ml-[0%] h1" />
          <>
            <div style={{display: 'flex'}} className="flex-column">
              <PageParagraph title={cardParagraphs[2]} className="ml-auto mr-auto" />
              <Image src={avenue} />
            </div>
            <a href={hrefs[2]} className="flex justify-between">
              <Button
                title="Discover more"
                className="ml-[5%] mt-5 text-[#414730] outline-[#414730] hover:outline-[#FFFFFF]"
              />
            </a>
          </>
        </div>

        <div className="item hover:scale-[101%] hover:shadow-lg duration-300">
          <PageSubheader title={cardHeaders[3]} className="ml-[0%] h1" />
          <div className="item-content">
            <div className="item-left">
              <PageParagraph title={cardParagraphs[3]} className="ml-auto mr-auto" />
              <a href={hrefs[3]} className="flex justify-between">
                <Button title="Discover more" className="ml-auto mr-40" />
              </a>
            </div>
            <div>
              <Image src={walk} />
            </div>
          </div>
        </div>

      </div>
    </MediaQuery>


    {/* 
    ==============================================
    Mobile design for header
    ==============================================
    */}
    <MediaQuery maxWidth={1023}>
      <PageHeader title={title} isMobile={true} />
      <PageSubheader title={subheaders[0]} isMobile={true} />
      <PageParagraph title={subparagraphs[0]} isMobile={true} />
      <a href={hrefs[0]} className="ml-auto mx-auto flex justify-between">
        <Button title="Discover more" className="ml-auto mx-auto" />
      </a>

      <Image src={settle} className="shadow-[-16px_16px_#8A946E] ml-auto mx-auto w-[90%]" />
      <PageSubheader
        title={subheaders[1]} isMobile={true}
        className="mt-12 mr-4"
      />
      <PageParagraph title={subparagraphs[1]} isMobile={true} />
    </MediaQuery>


    {/* 
    ==============================================
    Website design to transoform 2x2 card to 1x4
    ==============================================
    */}
    <MediaQuery minWidth={1024} maxWidth={1440}>
      <div className="list">
        <div className="item hover:scale-[101%] hover:shadow-lg duration-300">
          <PageSubheader title={cardHeaders[0]} className="ml-[0%] h1" />
          <>
            <div style={{display: 'flex'}} className="flex-column">
              <PageParagraph title={cardParagraphs[0]} className="ml-auto mr-auto" />
              <Image src={railway} />
            </div>
          </>
        </div>
        
        <div className="item hover:scale-[101%] hover:shadow-lg duration-300">
          <PageSubheader title={cardHeaders[1]} className="ml-[0%] h1" />
          <>
            <div style={{display: 'flex'}} className="flex-column">
              <PageParagraph title={cardParagraphs[1]} className="ml-auto mr-auto" />
              <Image src={forest} />
            </div>
            <a href={hrefs[1]} className="flex justify-between">
              <Button title="Discover more" className="ml-[5%] mt-5" />
            </a>
          </>
        </div>
        
        <div className="item hover:scale-[101%] hover:shadow-lg duration-300">
          <PageSubheader title={cardHeaders[2]} className="ml-[0%] h1" />
          <>
            <div style={{display: 'flex'}} className="flex-column">
              <PageParagraph title={cardParagraphs[2]} className="ml-auto mr-auto" />
              <Image src={avenue} />
            </div>
            <a href={hrefs[2]} className="flex justify-between">
              <Button
                title="Discover more"
                className="ml-[5%] mt-5 text-[#414730] outline-[#414730] hover:outline-[#FFFFFF]"
              />
            </a>
          </>
        </div>
      
        <div className="item hover:scale-[101%] hover:shadow-lg duration-300">
          <PageSubheader title={cardHeaders[3]} className="ml-[0%] h1" />
          <>
            <div style={{display: 'flex'}} className="flex-column">
              <PageParagraph title={cardParagraphs[3]} className="ml-auto mr-auto" />
              <Image src={walk} />
            </div>
            <a href={hrefs[3]} className="flex justify-between">
              <Button title="Discover more" className="ml-[5%] mt-5" />
            </a>
          </>
        </div>
      </div>
    </MediaQuery>


    {/* 
    ==============================================
    Mobile design for the cards
    ==============================================
    */}
    <MediaQuery maxWidth={1023}>
      <div className="list">
        <div className="item">
          <PageSubheader title={cardHeaders[0]} className="ml-[0%] h1" isMobile={true} />
          <div className="item-content">
            <div className="item-left">
              <PageParagraph title={cardParagraphs[0]} isMobile={true} />
              <div>
                <Image src={railway} />
              </div>
            </div>
          </div>
        </div>

        <div className="item">
          <PageSubheader title={cardHeaders[1]} className="ml-[0%] h1" isMobile={true} />
          <div className="item-content">
            <div className="item-left">
              <PageParagraph title={cardParagraphs[1]} isMobile={true} />
              <a href={hrefs[1]} className="ml-auto mx-auto flex justify-between">
                <Button title="Discover more" className="ml-auto mx-auto mt-5 mb-0" />
              </a>
            </div>
            <Image src={forest} />
          </div>
        </div>

        <div className="item">
          <PageSubheader
            title={cardHeaders[2]} className="ml-[0%] h1 text-[#414730]"
            isMobile={true}
          />
          <div className="item-content">
            <div className="item-left">
              <PageParagraph title={cardParagraphs[2]} isMobile={true} className="ml-[5%]" />
              <a href={hrefs[2]} className="ml-auto mx-auto flex justify-between">
              <Button
                title="Discover more"
                className="
                  ml-auto mx-auto mt-5 mb-0 text-[#414730] outline-[#414730] hover:outline-[#FFFFFF]
                "
              />
              </a>
            </div>
            <Image src={avenue} />
          </div>
        </div>

        <div className="item">
          <PageSubheader title={cardHeaders[3]} className="ml-[0%] h1" isMobile={true} />
          <div className="item-content">
            <div className="item-left">
              <PageParagraph title={cardParagraphs[3]} isMobile={true} />
              <a href={hrefs[3]} className="ml-auto mx-auto flex justify-between">
                <Button title="Discover more" className="ml-auto mx-auto mt-5 mb-0" />
              </a>
            </div>
            <div>
              <Image src={walk} />
            </div>
          </div>
        </div>
      </div>
    </MediaQuery>

    {getImageAttributions(attrImages, attrImageLinks, attrAuthors, attrAuthorLinks, attrKeys)}
  </div>
  );
};