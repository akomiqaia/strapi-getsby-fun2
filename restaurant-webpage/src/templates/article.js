import React from 'react'
import { Link, graphql} from 'gatsby'
import Img from 'gatsby-image'
import Layout from '../components/layout'

const ArticleTemplate = ({data}) => {
    <Layout>
        <h1>{data.strapiRestaurant.name}</h1>
        <p>by <Link to={`/authors/User_${data.strapiRestaurant.categories.id}`}>{data.strapiRestaurant.categories.name}</Link></p>
        <Img fixed={document.node.image.childImageSharp.fixed}/>
        <p>{data.strapiRestaurant.description}</p>
    </Layout>
}

export default ArticleTemplate

export const query = graphql`
    query ArticleTemplate($id: String!) {
        strapiRestaurant(id: {eq: $id}) {
            name
            description
            categories {
                id
                name
            }
            image {
                childImageSharp {
                    fixed(width: 200, height: 125) {
                        ...GatsbyImageSharpFixed
                    }
                }
            }
        }
    }
`