import React from "react"
import { graphql } from "gatsby"

export const query = graphql`
  query($articleId: String!) {
    nodeArticle(id: { eq: $articleId }) {
      body {
        processed
      }
      title
      relationships {
        field_media_image {
          field_media_image {
            alt
          }
          relationships {
            field_media_image {
              localFile {
                childImageSharp {
                  fluid {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`

const Article = props => <pre>{JSON.stringify(props, null, 2)}</pre>

export default Article
