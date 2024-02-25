import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Spanish from '../../lang/es.json';
import English from '../../lang/en.json';
import './CustomHeader.scss';

const CustomHeader = ({ setMessages }) => {
  return (
    <div className='header'>
      <h2>
        <FormattedMessage id='header.logo' />
      </h2>

      <div className='header__nav'>
        <Link to='/' className='header__nav--link'>
          <FormattedMessage id='header.home' />
        </Link>
        <Link to='/users' className='header__nav--link'>
          <FormattedMessage id='header.users' />
        </Link>
        <Link to='/create-user' className='header__nav--link'>
          <FormattedMessage id='header.createUser' />
        </Link>
      </div>
      <div className='header__lang'>
        <button onClick={() => setMessages(Spanish)}>
          <FormattedMessage id='header.spanish' />
        </button>
        <button onClick={() => setMessages(English)}>
          <FormattedMessage id='header.english' />
        </button>
      </div>
    </div>
  );
};

export default CustomHeader;
