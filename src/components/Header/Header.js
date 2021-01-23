import PropTypes from 'prop-types';
import logo from './logo.svg';
import './style.css';

export const Header = (props) => {
  const { children } = props;
  return (
  <header className="header">
    <img src={logo} className="logo" alt="logo" />
    {children}
    <a
      className="link"
      href="https://reactjs.org"
      target="_blank"
      rel="noopener noreferrer"
    >
      Learn React
    </a>
  </header>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
  ]),
}
