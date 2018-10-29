import React, { Component } from 'react';
import { Query } from 'react-apollo';
import styled from 'styled-components';
import { POST_QUERY } from '../queries/Queries';

import { StyledLink, ButtonLong } from '../UI-Library/UI-Library';

class BlogPosts extends Component {
  render() {
    return (
      <Query query={POST_QUERY}>
        {({ loading, data }) => {
          if (!loading) {
            return (
              <BlogPostsWrapper>
                <StyledLink to="/new">
                  <ButtonLong>+ CREATE NEW</ButtonLong>
                </StyledLink>
                {data.posts.map(post => (
                  <StyledLink to={`post/${post.id}`} key={post.id}>
                    <Blog>{post.title}</Blog>
                  </StyledLink>
                ))}
              </BlogPostsWrapper>
            );
          }
          return <p>Loading ........</p>;
        }}
      </Query>
    );
  }
}

export default BlogPosts;

const BlogPostsWrapper = styled.div`
  width: 550px;
  margin: 0 auto;
  display: grid;
  grid-gap: 5px;
`;

const Blog = styled.div`
  background: #b39ddb;
  color: white;
  font-size: 1.5em;
  padding: 15px;
  border-radius: 3px;
`;
