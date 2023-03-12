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

export default class HorizontalCalc extends React.Component {
  render() {
    return (
      <>
        <HorizontalContainer>
            {this.props.children}
        </HorizontalContainer>
      </>
    )
  }
}
