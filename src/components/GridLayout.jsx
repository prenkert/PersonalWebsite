import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

const GridLayout = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 30vw));
  grid-auto-flow: column;
  grid-template-rows: repeat(auto-fit, minmax(300px, 1fr));
  padding-left: ${dimensions.homeAlignLeft};
  overflow: hidden;
  column-gap: 1.5rem;
  row-gap: 1.5rem;
`

export default class Grid extends React.Component {
  render() {
    return <GridLayout>{this.props.children}</GridLayout>
  }
}
