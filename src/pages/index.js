import React from "react"
import styled from "@emotion/styled"
import dimensions from "styles/dimensions"

import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { graphql, Link } from "gatsby"

import Layout from "components/Layout"
import ProjectGrid from "components/ProjectGrid"
import Header from "components/Header"

import ListGrid from "components/ListGrid"
import "styles/projectShowcase.scss"
import HorizontalCalc from "components/HorizontalCalc"

const MainContainer = styled("div")`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 2*${dimensions.paddingVerticalDesktop});
  width: 100vw;
  top: 0;
  `

const RenderBody = ({
  projects,
  meta,
  years,
  categories,
  filteredProjects,
}) => (
  <>
    <Helmet
      title={meta.title}
      titleTemplate={`%s | ${meta.title}`}
      meta={[
        {
          name: `description`,
          content:
            "Philip Renkert personal website.",
        },
        {
          property: `og:title`,
          content: meta.title,
        },
        {
          property: `og:description`,
          content: meta.description,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: meta.author,
        },
        {
          name: `twitter:title`,
          content: meta.title,
        },
        {
          name: `twitter:description`,
          content: meta.description,
        },
      ].concat(meta)}
    />
    <MainContainer>
      <Header />
      <ProjectGrid projects={filteredProjects} />
    </MainContainer>
  </>
)

export default ({ data }) => {
  //Required check for no data being returned
  const projects = [
    ...data.allMarkdownRemark.edges
  ]
  // console.log("test" + projectsTest)
  const meta = data.site.siteMetadata
  const filteredProjects = projects.filter(
    project => project.node.frontmatter.featured_project === true
  )

  let years = projects.map(project =>
    project.node.frontmatter.project_post_date
  )

  const yearsSet = new Set(years)
  const yearsUnique = [...yearsSet]
  console.log("years" + JSON.stringify(projects))
  if (!projects) return null

  return (
    <Layout>
      <RenderBody
        projects={projects}
        meta={meta}
        years={yearsUnique}
        filteredProjects={filteredProjects}
      />
    </Layout>
  )
}

RenderBody.propTypes = {
  projects: PropTypes.array.isRequired,
  meta: PropTypes.object.isRequired,
}

export const query = graphql`
  {
    allMarkdownRemark(
    filter: {fileAbsolutePath: {regex: "/projects/"}}
    sort: { order: DESC, fields: [frontmatter___project_post_date] }
    limit: 1000) {
      edges {
        node {
          frontmatter {
            path
            project_title
            featured_project
            completed
            project_post_date(formatString: "YYYY")
            project_category
            project_preview_thumbnail {
              childImageSharp {
                gatsbyImageData(
                  layout:CONSTRAINED
                  width:800
                )
              }
            }
          }
        }
      }
    }
    site {
      siteMetadata {
        title
        description
        author
      }
    }
  }
`
