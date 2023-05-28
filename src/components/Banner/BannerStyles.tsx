import styled from 'styled-components';

export const BannerContainer = styled.div`
  background-color: rgb(225, 225, 219);
  padding: 0px 1.44rem;
  margin: 0px;
`;

export const BannerContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 1024px;
  padding: 1.25rem 0px;
  margin: 0px auto;

  @media screen and (min-width: 48em) {
    justify-content: flex-start;
    flex-direction: row;
    padding: 2rem 0px;
  }
`;

export const BannerImageContainer = styled.div`
  @media screen and (min-width: 48em) {
    margin-right: 2rem;
  }
`;

export const BannerImage = styled.img`
  height: 8.92rem;
  width: 8.92rem;
  object-fit: contain;
  margin: 1rem auto 0;
  padding: 1rem;
  background-color: rgb(255, 255, 255);
  border-radius: 0.75rem;
  box-shadow: 10px 10px 10px -4px rgba(0, 0, 0, 0.15);

  @media screen and (min-width: 48em) {
    height: 12rem;
    width: 12rem;
  }
`;

export const BannerTextContainer = styled.div`
  margin-top: 1.5rem;
`;

export const BannerTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;

  @media screen and (min-width: 48em) {
    font-size: 3.25rem;
    text-align: left;
  }
`;

export const BannerSubtitle = styled.h2`
  font-size: 1rem;
  text-align: center;
  font-weight: 400;

  @media screen and (min-width: 48em) {
    font-size: 1.2rem;
    text-align: left;
  }
`;
