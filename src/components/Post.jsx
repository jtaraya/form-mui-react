import {
  Favorite,
  FavoriteBorder,
  Label,
  MoreVert,
  Share,
} from '@mui/icons-material';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';

const Post = () => {
  return (
    <Card sx={{margin:5}}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
            R
          </Avatar>
        }
        action={
          <IconButton aria-label='settings'>
            <MoreVert />
          </IconButton>
        }
        title='Maasai Culture'
        subheader='September 25, 2023'
      />
      <CardMedia
        component='img'
        height='20%'
        image='https://www.relocationafrica.com/wp-content/uploads/2017/04/kenya-masai-tribe.jpg'
        alt='Paella dish'
      />
      <CardContent>
        <Typography variant='body2' color='text.secondary'>
          The Maasai community are internationally known for their distinctive
          culture, rituals, 'high jumping dance', custom dress and being
          courageous warriors.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label='add to favorites'>
          <Checkbox
            {...Label}
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite sx={{ color: 'red' }} />}
          />
        </IconButton>
        <IconButton aria-label='share'>
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
