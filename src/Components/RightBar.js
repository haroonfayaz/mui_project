import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const RightBar = () => {
  return (
    <Box flex={2} p={2} sx={{display: {xs:'none', sm:'block'}}}>
     <Box position="fixed" p={2}>
      <Typography variant='h5'> online friends</Typography>
          <AvatarGroup max={7}>
            <Avatar alt="Remy Sharp" src="https://picsum.photos/536/354" />
            <Avatar alt="Travis Howard" src="https://picsum.photos/536/352" />
            <Avatar alt="Cindy Baker" src="https://picsum.photos/536/353"  />
            <Avatar alt="Agnes Walker" src="https://picsum.photos/536/344"  />
            <Avatar alt="Trevor Henderson" src="https://picsum.photos/536/551"  />
            <Avatar alt="Trevor Henderson" src="https://picsum.photos/536/553"  />
            <Avatar alt="Trevor Henderson" src="https://picsum.photos/536/554"  />
            <Avatar alt="Trevor Henderson" src="https://picsum.photos/536/5555"  />
            <Avatar alt="Trevor Henderson" src="https://picsum.photos/536/564"  />
            <Avatar alt="Trevor Henderson" src="https://picsum.photos/536/567"  />
            <Avatar alt="Trevor Henderson" src="https://picsum.photos/536/5574"  />
          </AvatarGroup>
          <Typography variant='h5' mt={2} mb={2}>Latest Photos</Typography>
        <ImageList cols={3} rowHeight={120}>
          <ImageListItem>
            <img src="https://picsum.photos/566/354" alt="none" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/366/354" alt="none" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/466/354" alt="none" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/666/354" alt="none" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/766/354" alt="none" />
          </ImageListItem>
          <ImageListItem>
            <img src="https://picsum.photos/576/354" alt="none" />
          </ImageListItem>
        </ImageList>
        <Typography variant='h5' mt={2}>Latest Conversations</Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://picsum.photos/536/354"  />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://picsum.photos/536/352" />
        </ListItemAvatar>
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              {" — Wish I could come, but I'm out of town this…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Cindy Baker" src="https://picsum.photos/536/354" />
        </ListItemAvatar>
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
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
  )
};

export default RightBar;
