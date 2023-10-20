
import "./realestate.css";
import heroImg from '../../assets/realestate/realestate-hero.svg';
import heroImgMobile from '../../assets/realestate/realestate-hero-mobile.png';
import MediaQuery from 'react-responsive';
import { PageHeader } from "../../components/shared/PageHeader";
import { PageSubheader } from "../../components/shared/PageSubheader";
import { PageParagraph } from "../../components/shared/PageParagraph";
import { LargeButton } from "../../components/shared/Buttons";
import { Image } from "../../components/shared/Images";
import { title, headers, paragraphs, buttons, buttonHref } from './RealEstateConstants';


export const RealEstate = () => {
  return (
    <div className="bg">
      <div className="mx-auto">

        {/* Header for desktop */}
        <MediaQuery minWidth={826}>
          <div className="flex items-stretch">
            <div className='flex-1'>
              <div className='h-full'>
                <PageHeader title={title} className="font-light text-green flex-wrap" />
              </div>
            </div>
            <div className='flex-1'>
              <div className='h-full'>
                <Image
                  src="https://c.animaapp.com/zvsJKM8N/img/rectangle-77.svg"
                  width={"80%"}
                  className="ml-auto mt-28 flex-wrap"
                />
              </div>
            </div>
          </div>
        </MediaQuery>

        {/* Header for mobile */}
        <MediaQuery maxWidth={825}>
          <PageHeader title={title} isMobile={true} className="font-light" />
        </MediaQuery>

      </div>

      {/* Subheader and paragraph for desktop */}
      <MediaQuery minWidth={826}>
        <PageSubheader title={headers[0]} className="text-green-900 font-semibold" />
        <PageParagraph title={paragraphs[0]} />
      </MediaQuery>

      {/* Subheader and paragraph for mobile */}
      <MediaQuery maxWidth={825}>
        <PageSubheader
          title={headers[0]} isMobile={true}
          className="text-green-900 font-semibold"
        />
        <PageParagraph title={paragraphs[0]} isMobile={true} />
      </MediaQuery>


      {/* Real Estate images for desktop */}
      <MediaQuery minWidth={826}>
        <div className="ImgPadding">
          <Image width="100%"
            className="
              bg-opacity-50 bg-[#25773c] hover:bg-opacity-60 transition-all duration-1000 p-[2.5%]"
            src={heroImg}
          />
          <a href={buttonHref[0]} className="absolute mt-[40%]">
            <LargeButton title={buttons[0]} className="h-24 w-240 px-5 m-2 rounded-full" />
          </a>
        </div>
      </MediaQuery>

      {/* eal Estate images for mobile */}
      <MediaQuery maxWidth={825}>
        <div className="ImgPadding">
          <Image width="auto"
            className="
              bg-opacity-50 bg-[#25773c] hover:bg-opacity-60 transition-all duration-1000 p-[2.5%]"
            src={heroImgMobile}
          />
          <a href={buttonHref[0]} className="absolute mt-[85%]">
            <LargeButton title={buttons[0]} isMobile={false} className="bg-[#000000] bg-opacity-30" />
          </a>
        </div>
      </MediaQuery>

    </div>
  );
};
