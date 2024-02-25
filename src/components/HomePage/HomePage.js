import { FormattedMessage } from 'react-intl'
import './HomePage.scss';

const HomePage = () => {
  return <div className='page'>
    <h1><FormattedMessage id='home:welcome' /></h1>
    <p><FormattedMessage id='home:userManagement' /></p>
    <p><FormattedMessage id='home:apiDisclaimer' /></p>
  </div>;
};

export default HomePage;
