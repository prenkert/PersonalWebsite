import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import ProjectCard from "components/ProjectCard"

const HorizontalContainer = styled("div")`
  width: 100vw;
  overflow: hidden; /* This is a hacky fix, should be able to resolve it with Sharp instead */
  display: flex;
  flex-grow: 1;
`

const GridLayout = styled("div")`
  display: grid;
  grid-column-gap: ${dimensions.homeAlignLeft};
  grid-row-gap: ${dimensions.homeAlignLeft};
  /* scroll-snap-type: x mandatory; */
  padding-left: ${dimensions.homeAlignLeft};
  padding-right: ${dimensions.homeAlignLeft};
  
  @media (max-aspect-ratio: 10/16) {
    grid-auto-flow: row;
    grid-template-columns: 100%;
    grid-auto-rows: calc(calc(100%/3) - calc(${dimensions.homeAlignLeft}*2/3));
    overflow-y: scroll;
  }

  @media (min-aspect-ratio: 10/16) {
    grid-auto-flow: row;
    grid-template-columns: 100%;
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

export default class ProjectGrid extends React.Component {
  render() {
    return (
      <HorizontalContainer>
        <GridLayout>
          {this.props.projects.map((project, i) => (
            <ProjectCard
              key={i}
              category={project.node.frontmatter.project_category}
              title={project.node.frontmatter.project_title}
              thumbnail={project.node.frontmatter.project_preview_thumbnail}
              date={project.node.frontmatter.project_post_date}
              categoryOnClick={this.handleFilterSelect}
              path={project.node.frontmatter.path}
            />
          ))}
        </GridLayout>
      </HorizontalContainer>
    )
  }
}
