/* eslint-disable react/prop-types */
import { Card, CardMedia, Grid, Typography, CardContent, Avatar } from '@material-ui/core';
import { NextPage, GetServerSideProps } from 'next';

import { Post } from '../model';

interface PostsListPageProps {
  postsList: Post[];
}

const PostsListPage: NextPage<PostsListPageProps> = ({ postsList }) => {
  return (
    <div>
      <Typography
        component="h1"
        variant="h3"
        color="textPrimary"
        align="center"
        gutterBottom
      >
        Listagem de posts
      </Typography>
      <Grid container spacing={4}>
        {postsList.map((item, key) => (
          <Grid item xs={12} sm={6} md={4} key={key}>
            <Card>
            <CardContent>
              <div style={{ display: 'flex', alignItems: 'center' }} >
              <Avatar alt={key.toString()} src={item.image_profile} />
              <Typography variant="h5" component="h2" >
                &nbsp; {item.name} postou
              </Typography>
              </div>
            </CardContent>
              <CardMedia
                style={{ paddingTop: '56%' }}
                image={item.image_url}
              >
              </CardMedia>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default PostsListPage;

export const getServerSideProps: GetServerSideProps = async() => {
  const res = await fetch('http://localhost:3000/api/posts');

  return {
    props: {
      postsList: await res.json(),
    },
  };
};
