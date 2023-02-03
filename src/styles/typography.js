import {css} from "@emotion/react"
import dimensions from "styles/dimensions"

const typeStyles = css`
  h1 {
    font-size: 2rem;
    line-height: 1;
    font-weight: 400;
    margin: 0 0 0 0;
    @media (max-width: ${dimensions.maxwidthTablet}px) {
      font-size: 2.25em;
    }

    @media (max-width: ${dimensions.maxwidthMobile}px) {
      font-size: 2em;
    }
  }

  h2 {
    font-size: 1.25rem;
    font-weight: 400;
    line-height: 1.1;
  }

  h3 {
    line-height: 1;
    font-size: 1rem;
    font-weight: 400;
  }

  h4 {
  }

  h5 {
    margin-bottom: 1.45em;
    font-weight: 400;
    line-height: 20px;
    font-size: 0.95em;
  }

  h6 {
    font-size: 0.9em;
    font-weight: 400;
    margin: 0;
  }

  small {
    text-transform: uppercase;
  }

  p {
    line-height: 1.5;
    font-weight: 300;
    margin: 0;
  }

  a {
    &:hover {
      cursor: pointer;
    }
  }
`

export default typeStyles
