import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";
import { GetPostsOrdByDate } from "../../hooks/GetPostsOrdByDate";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

export default function Posts() {
  const posts = GetPostsOrdByDate();

  return (
    <div className="blogSection" id="recentPosts">
      <div>
        <h1>Recent Posts</h1>
        <IndexWrapper>
          {posts.map(({ id, excerpt, frontmatter, fields }) => (
            <PostWrapper key={id}>
              <Link to={"blog" + fields.slug}>
                <h1>{frontmatter.title}</h1>
                <p>{frontmatter.date}</p>
                <p>{excerpt}</p>
              </Link>
            </PostWrapper>
          ))}
        </IndexWrapper>
      </div>
    </div>
  );
}
