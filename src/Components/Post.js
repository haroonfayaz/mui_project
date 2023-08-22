import React from 'react'
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox } from '@mui/material';
import { Favorite, FavoriteBorder } from '@mui/icons-material';

const Post = () => {
  return (
    <>
    <Card >
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: "red" }} aria-label="recipe" src='https://picsum.photos/id/870/200/300'/>
               
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Shreddo fealtus"
              subheader="August 14, 2023"
            />
            <CardMedia
              component="img"
              height="20%"
              image="https://picsum.photos/seed/picsum/536/354"
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                This impressive paella is a perfect party dish and a fun meal to cook
                together with your guests. Add 1 cup of frozen peas along with the mussels,
                if you like.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
              <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:"red"}} />} />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
            </CardActions>
          
          </Card> 
      
    </>
  )
}

export default Post
