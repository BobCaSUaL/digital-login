import PropTypes from 'prop-types';
import logo from './logo.svg';

import { StyledHeader } from './styled';

export const Header = (props) => {
  const { children } = props;
  return (
  <StyledHeader>
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
  </StyledHeader>
  );
}

Header.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node,
  ]),
}
