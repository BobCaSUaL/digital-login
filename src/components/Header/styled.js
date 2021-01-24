import styled from '@emotion/styled'

export const StyledHeader = styled.form`
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
  width: 100%;

  & > .logo {
    height: 40vmin;
    pointer-events: none;
  }

  @media (prefers-reduced-motion: no-preference) {
    & > .logo {
      animation: header-logo-spin infinite 20s linear;
    }
  }

  & > .link {
    color: #61dafb;
  }

  @keyframes header-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
