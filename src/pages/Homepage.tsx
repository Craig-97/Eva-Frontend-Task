import { Banner, UserForm } from '../components';
import { Content, HomepageContainer, ContentContainer } from './HomepageStyles';

export const Homepage = () => {
  return (
    <HomepageContainer>
      <Banner />
      <ContentContainer>
        <Content>
          <UserForm />
        </Content>
      </ContentContainer>
    </HomepageContainer>
  );
};
