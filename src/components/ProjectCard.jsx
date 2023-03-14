import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"
import PropTypes from "prop-types"
import Cursor from "./Cursor"
import CircleDate from "./CircleDate"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

const ProjectCardContainer = styled("div")`
  scroll-snap-align: start;
  overflow: hidden
`

const LinkTo = styled(Link)`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-decoration: none;
  color: currentColor;
  &:hover .projectCardTitle {
    text-decoration: underline;
  }
`

const ImageWrapper = styled("div")`
  display: flex;
  overflow: hidden;
  flex: 1 1 auto;
`

const ProjectCardCategory = styled("h3")`
  line-height: 1.5;
`

const ProjectCardTitle = styled("h2")`
  margin-bottom: 0.5em;
  margin-top: 0em;
  padding-right: 1rem;
  white-space: nowrap
`

class ProjectCard extends React.Component {
  constructor(props) {
    super(props)
    this.state = { active: false }
    this.onHover = this.onHover.bind(this)
    this.onOut = this.onOut.bind(this)
  }
  onHover() {
    this.setState({ active: true })
  }
  onOut() {
    this.setState({ active: false })
  }
  render() {
    return (
      <React.Fragment>
        <ProjectCardContainer
          onMouseEnter={() => this.onHover()}
          onMouseLeave={() => this.onOut()}
        >
          <LinkTo to={`${this.props.path}`}>
            <ProjectCardTitle className="projectCardTitle">
              {this.props.title}
            </ProjectCardTitle>
            <ImageWrapper>
              <GatsbyImage
                image={getImage(this.props.thumbnail)}
                objectPosition="50% 50%"
                style = {{
                }}
                imgStyle = {{
                }}
              />
            </ImageWrapper>
            <ProjectCardCategory onClick={this.categoryFilter}>
              <CircleDate category={this.props.category} date={this.props.date.substring(0,4)} filter={"none"}/>
            </ProjectCardCategory>{" "}
          </LinkTo>
        </ProjectCardContainer>
      </React.Fragment>
    )
  }
}

ProjectCard.propTypes = {
  category: PropTypes.array.isRequired,
  thumbnail: PropTypes.object.isRequired,
  title: PropTypes.array.isRequired,
  description: PropTypes.array.isRequired,
  uid: PropTypes.string.isRequired,
}

export default ProjectCard
