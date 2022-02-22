import React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";
import LayoutIndex from "../components/LayoutIndex";
import { UseSiteMetadata } from "../hooks/UseSiteMetadata";
const StyledH1 = styled.h1`
  color: rebeccapurple;
`;

export default function index({ data }) {
  const { title, description } = UseSiteMetadata();
  return (
    <div>
      <LayoutIndex>
        {/* <section>
          <div>
            <h1>Hello World</h1>
            <StyledH1>{title}</StyledH1>
            <p>{description}</p>
          </div>
          <div>
            {data.allMdx.nodes.map(({ excerpt, frontmatter }) => (
              <>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </>
            ))}
          </div>
        </section> */}
      </LayoutIndex>
    </div>
  );
}

// export const query = graphql`
//   query SITE_INDEX_QUERY {
//     allMdx(
//       sort: { fields: [frontmatter___date], order: DESC }
//       filter: { frontmatter: { published: { eq: true } } }
//     ) {
//       nodes {
//         id
//         excerpt(pruneLength: 250)
//         frontmatter {
//           title
//           date
//         }
//       }
//     }
//   }
// `;
