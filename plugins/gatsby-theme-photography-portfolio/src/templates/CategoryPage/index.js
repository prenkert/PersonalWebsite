import React, { useContext } from "react"
import { graphql } from "gatsby"

import { Main, SidebarButtonWrapper } from "../../utils/styles"
import { HamburgerIcon, CloseIcon } from "../../components/ui/icons"
import LayoutContext from "../../context/LayoutContext"
import Sidebar from "../../components/Sidebar"
import Grid from "../../components/Grid"
import Seo from "../../components/seo"
import Layout from "../../layouts"

const CategoryPage = ({ data, pageContext }) => {
  const images = data.images.edges
  const { categories } = pageContext
  const { categoryName } = pageContext
  const { basePath } = pageContext
  const { sidebarVisible, toggleSidebar } = useContext(LayoutContext)
  console.log("CategoryPage")
  console.log(pageContext)
  console.log(categories)
  console.log(categories.edges)
  console.log(categoryName)
  console.log(basePath)
  return (
    <Layout>
      <Seo
        title={categoryName}
        thumbnail={
          images[0]?.node?.childImageSharp?.gatsbyImageData?.images?.fallback
            ?.src
        }
      />

      <SidebarButtonWrapper>
        {sidebarVisible ? (
          <CloseIcon onClick={toggleSidebar} />
        ) : (
          <HamburgerIcon onClick={toggleSidebar} />
        )}
      </SidebarButtonWrapper>
      <Sidebar categories={categories.edges} visible={sidebarVisible} basePath={basePath} />

      <Main sidebarVisible={sidebarVisible}>
        <Grid images={images} />
      </Main>
    </Layout>
  )
}

export default CategoryPage

export const query = graphql`
  query ($categoryName: String!) {
    images: allFile(filter: { relativeDirectory: { eq: $categoryName } }) {
      edges {
        node {
          name
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH)
          }
        }
      }
    }
  }
`
