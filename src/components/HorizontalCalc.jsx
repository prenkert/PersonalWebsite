import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import HorizontalScroll from "react-scroll-horizontal"
import { BrowserView, MobileView } from "react-device-detect"

const HorizontalContainer = styled("div")`
  width: 100vw;
  flex-grow: 1;
  overflow: hidden;
  display: flex;
  align-items: center;
`

const WidthDetector = styled("div")` 
`

export default class HorizontalCalc extends React.Component {
  render() {
    return (
      <>
        <HorizontalContainer>
          <HorizontalScroll
            reverseScroll={true}
            config={{ stiffness: 375, dampness: 1 }}
            animValues ={this.props.anim}
          >
            <WidthDetector
              length={this.props.years.length}
              style={{
                width: `${100 + 26.5 * this.props.years.length}vw`,
              }}
            >
              {this.props.children}
            </WidthDetector>
          </HorizontalScroll>
        </HorizontalContainer>
      </>
    )
  }
}
