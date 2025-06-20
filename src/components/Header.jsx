import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import colors from "styles/colors"
import dimensions from "styles/dimensions"
import "@fontsource/lobster"

const HeaderContainer = styled("div")`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-flow: row;
  flex-wrap: wrap;
  padding-left: ${dimensions.homeAlignLeft};
  }
`

const LogoStyle = styled("h1")`
  font-family:"Lobster";
  font-size: 3em;
  align-self: start;
  white-space: nowrap;
  margin-right: ${dimensions.headerMargin};
`

const HeaderLinks = styled("div")`
  display: inline-grid;
  grid-template-columns: repeat(4, auto);
  margin-right: ${dimensions.headerMargin};
  grid-gap: ${dimensions.headerMargin};
  a {
    color: ${colors.grey600};
    text-decoration: none;
    border-bottom: 2px solid transparent;
    height: 100%;

    display: block;
    position: relative;

    transition: 100ms ease-in-out color;

    &:hover {
      color: ${colors.text};
    }

    &.Link--is-active {
      color: ${colors.text};
    }
  }
`

export default class Header extends React.Component {
  render() {
    return (
      <HeaderContainer>
        <LogoStyle>
            Phil Renkert
        </LogoStyle>
        <h2 style={{   justifySelf: "left",  alignSelf: "end", fontSize: "1.5em", padding: 0, margin: 0 }}>
          <HeaderLinks>
            <Link activeClassName="Link--is-active" to="/">
              Projects
            </Link>
            <Link activeClassName="Link--is-active" to="/information">
              Information
            </Link>
            <Link activeClassName="Link--is-active" to="https://portfolio.philrenkert.com/">
              Photography
            </Link>
            <a target="_blank" href="mailto:prenkert@live.com">
              Contact
            </a>
          </HeaderLinks>
        </h2>
        {/* <Filter categories={this.props.categories}></Filter> */}
      </HeaderContainer>
    )
  }
}
