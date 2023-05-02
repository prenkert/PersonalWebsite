import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const StyledGrid = styled("div")`
  display: grid;
  grid-column-gap: ${dimensions.homeAlignLeft};
  grid-row-gap: ${dimensions.homeVerticalMargin};
  /* scroll-snap-type: x mandatory; */
  padding-top: ${dimensions.homeVerticalMargin};
  padding-bottom: ${dimensions.homeVerticalMargin};
  margin-left: ${dimensions.homeAlignLeft};
  margin-right: ${dimensions.homeAlignLeft};
  
  @media (max-aspect-ratio: 10/16) {
    grid-auto-flow: row;
    grid-template-columns: 95%;
    grid-auto-rows: calc(calc(100%/3) - calc(${dimensions.homeAlignLeft}*2/3));
    overflow-y: scroll;
  }

  @media (max-aspect-ratio: 3/4) {
    grid-auto-flow: row;
    grid-template-columns: 95%;
    grid-auto-rows: calc(calc(100%/2) - calc(${dimensions.homeAlignLeft}/2));
    overflow-y: scroll;
  }

  @media (min-aspect-ratio: 3/4) {
    grid-auto-flow: column;
    overflow-x: scroll;
    grid-auto-columns: calc(calc(100%/2) - calc(${dimensions.homeAlignLeft}/2));
    grid-template-rows: repeat(2, 1fr);
  }

  @media (min-aspect-ratio: 4/3) {
    grid-auto-columns: calc(calc(100%/3) - calc(${dimensions.homeAlignLeft}*2/3));
    grid-template-rows: repeat(2, 1fr);
  }

  @media (min-aspect-ratio: 16/10) {
    grid-auto-columns: calc(calc(100%/4) - calc(${dimensions.homeAlignLeft}*3/4));
    grid-template-rows: repeat(2, 1fr);
  }
`

export default class GridLayout extends React.Component {
  render() {
    return <StyledGrid>{this.props.children}</StyledGrid>
  }
}
