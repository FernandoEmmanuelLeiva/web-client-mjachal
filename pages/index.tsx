import LandingTemplate from '../src/modules/shared/layout/containers'
import NewsSectionContainer from '../src/modules/news/containers/index';
import { NextPage, GetServerSideProps } from 'next';

// Helper function to detect a mobile device based on the User-Agent
const isMobile = (userAgent: any) => {
  return /iPhone|iPad|iPod|Android/i.test(userAgent);
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const userAgent = context.req.headers['user-agent'] || '';
  const mobile = isMobile(userAgent);

  return {
    props: {
      isMobile: mobile,
    },
  };
};


const Home: NextPage<{ isMobile: boolean }> = ({ isMobile }) => {
  return (
    <LandingTemplate>
      <NewsSectionContainer isMobile={ isMobile }/>
    </LandingTemplate>
  )
}

export default Home
