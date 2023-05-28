import {
  BannerContainer,
  BannerContent,
  BannerImage,
  BannerImageContainer,
  BannerTextContainer,
  BannerSubtitle,
  BannerTitle
} from './BannerStyles';

export const Banner = () => (
  <BannerContainer>
    <BannerContent>
      <BannerImageContainer>
        <a href="https://evahealth.co.uk">
          <BannerImage src="https://i.imgur.com/y2TiG8D.png" alt="Eva Health Technologies logo" />
        </a>
      </BannerImageContainer>
      <BannerTextContainer>
        <BannerTitle>Eva Health Technologies</BannerTitle>
        <BannerSubtitle>Smarter health and wellbeing records</BannerSubtitle>
      </BannerTextContainer>
    </BannerContent>
  </BannerContainer>
);
