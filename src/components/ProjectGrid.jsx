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
  grid-auto-flow: column;
  grid-auto-columns: calc(calc(100%/3) - 30px);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
  grid-template-rows: repeat(2, 1fr);
  overflow-x: scroll;
  /* scroll-snap-type: x mandatory; */
  padding-left: ${dimensions.homeAlignLeft};
  padding-right: ${dimensions.homeAlignLeft};s
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
