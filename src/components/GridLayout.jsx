import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const GridLayout = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, 28.3vw);
  grid-auto-flow: column;
  grid-template-rows: repeat(2, 47.5vw);
  column-gap: 5vw;
  row-gap: 5vw;
`

export default class Grid extends React.Component {
  render() {
    return <GridLayout>{this.props.children}</GridLayout>
  }
}
