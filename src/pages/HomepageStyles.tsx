import styled from 'styled-components';

export const HomepageContainer = styled.div`
  flex: 1 1 0%;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const Section = styled.section`
  margin: 0px;
  padding-bottom: 4.3rem;
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 1.25rem;
  padding: 0px 1rem;

  @media screen and (min-width: 48em) {
    margin-top: 2rem;
  }
`;

export const Content = styled.div`
  width: 80%;
  max-width: 1024px;
  padding-bottom: 0.69rem;
  margin-bottom: 1rem;
  border-radius: 0px 0px 0.75rem 0.75rem;
  padding: 2rem;
  background: rgb(255, 255, 255);
  border-radius: 0.75rem;
  box-shadow: 10px 10px 10px -4px rgba(0,0,0,0.15);
}`;
