import {
  Avatar,
  AvatarGroup,
  Box,
  Divider,
  ImageList,
  ImageListItem,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from '@mui/material';
import React from 'react';

const Rightbar = () => {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={200}>
          Online Friends
        </Typography>
        <AvatarGroup max={7}>
          <Avatar
            alt='Remy Sharp'
            src='data:image/jpeg;base64,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'
          />
          <Avatar alt='Black Man' src='' />
          <Avatar
            alt='Cindy Baker'
            src='https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWZyaWNhbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://images.unsplash.com/photo-1582876533492-51fd2f162272?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFmcmljYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://images.unsplash.com/photo-1613005341945-35e159e522f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGFmcmljYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
          />
          <Avatar
            alt='Bois Wakanda'
            src='https://images.unsplash.com/photo-1570158268183-d296b2892211?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fGFmcmljYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
          />
          <Avatar
            alt='Travis Howard'
            src='https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFmcmljYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
          />
          <Avatar
            alt='Cindy Baker'
            src='https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
          />
          <Avatar
            alt='Agnes Walker'
            src='https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFmcmljYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
          />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={200} mt={2} mb={2}>
          Latest Photos
        </Typography>
        <ImageList cols={3} rowHeight={100} gap={5}>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551963831-b3b1ca40c98e'
              alt='Breakfast'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1551782450-a2132b4ba21d'
              alt='Burger'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1558642452-9d2a7deb7f62'
              alt='Honey'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1516802273409-68526ee1bdd6'
              alt='Basketball'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1589118949245-7d38baf380d6'
              alt='Bike'
            />
          </ImageListItem>
          <ImageListItem>
            <img
              src='https://images.unsplash.com/photo-1522770179533-24471fcdba45'
              alt='Camera'
            />
          </ImageListItem>
        </ImageList>
        <Typography variant='h6' fontWeight={200} mt={2} mb={2}>
          Latest Conversations
        </Typography>
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
        >
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Remy Sharp'
                src='https://images.unsplash.com/photo-1560787313-5dff3307e257?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YWZyaWNhbiUyMGZhY2V8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=400&q=60'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Brunch this weekend?'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Ali Connors
                  </Typography>
                  {" — I'll be in your neighborhood doing errands this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Travis Howard'
                src='https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGFmcmljYW4lMjBmYWNlfGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Summer BBQ'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    to Scott, Alex, Jennifer
                  </Typography>
                  {" — Wish I could come, but I'm out of town this…"}
                </React.Fragment>
              }
            />
          </ListItem>
          <Divider variant='inset' component='li' />
          <ListItem alignItems='flex-start'>
            <ListItemAvatar>
              <Avatar
                alt='Cindy Baker'
                src='https://images.unsplash.com/photo-1542393881816-df51684879df?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80'
              />
            </ListItemAvatar>
            <ListItemText
              primary='Oui Oui'
              secondary={
                <React.Fragment>
                  <Typography
                    sx={{ display: 'inline' }}
                    component='span'
                    variant='body2'
                    color='text.primary'
                  >
                    Sandra Adams
                  </Typography>
                  {' — Do you have Paris recommendations? Have you ever…'}
                </React.Fragment>
              }
            />
          </ListItem>
        </List>
      </Box>
    </Box>
  );
};

export default Rightbar;
