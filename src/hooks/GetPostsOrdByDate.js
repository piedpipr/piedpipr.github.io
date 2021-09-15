import { graphql, useStaticQuery } from "gatsby";

export const GetPostsOrdByDate = () => {
  const { allMdx } = useStaticQuery(
    graphql`
      query SITE_INDEX_QUERY {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          filter: { frontmatter: { published: { eq: true } } }
        ) {
          nodes {
            id
            excerpt(pruneLength: 250)
            frontmatter {
              title
              date
            }
            fields {
              slug
            }
          }
        }
      }
    `
  );
  return allMdx.nodes;
};
