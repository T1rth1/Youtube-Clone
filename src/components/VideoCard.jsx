import React from 'react';
import { Link } from "react-router-dom";
import { Typography, Card , CardContent, CardMedia, CardActionArea } from '@mui/material';
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import{ demoThumbnailUrl, demoVideoUrl, demoVideoTitle, demoChannelUrl, demoChannelTitle } from "../utils/constants"
const VideoCard = ({video : {id : { videoId },snippet}}) => {
    // console.log(videoId,snippet);
  return (//ml:{md:'50px',sm:'100px'}
    <Card sx={{width:{xs:'100%',sm:'358px',md:'320px'},boxShadow:'none',borderRadius:5}}>
        <Link to={videoId?`/video/${videoId}` : demoVideoUrl}>
            <CardMedia 
                image={snippet?.thumbnails?.high?.url || demoThumbnailUrl}
                alt={snippet?.title}
                sx={{ width: { xs: '100%', sm: '358px'}, height: 180 }} 
 
                />
        </Link>
        <CardContent sx={{backgroundColor: '#1e1e1e',height:'106px'}}>
            <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
                <Typography variant="subtitle1" fontWeight="bold" sx={{color:"#FFF"}}>
                    {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
                </Typography>
            </Link>
            <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle2" sx={{color:"gray"}}>
                    {snippet?.channelTitle || demoChannelTitle}
                    <CheckCircleIcon sx={{fontSize:"12px",color:'gray',ml:'5px'}}/>
                </Typography>
            </Link>
        </CardContent>
    </Card>
  )
}

export default VideoCard