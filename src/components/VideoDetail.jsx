import React from 'react';
import{ useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack} from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import{ Loader, Videos } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";


const VideoDetail = () => {
  const [videoDetail,setVideoDetail] = useState(null);
  const [ videos,setVideos] = useState([]);
  const { id } = useParams();
  
  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
     .then((data) => setVideoDetail(data.items[0]));
     fetchFromAPI(`search?rpart=snippet&relatedToVideoId=${id}&type=video`)
     .then((data) => setVideos(data.items));
  },[id])

  if(!videoDetail?.snippet) return <Loader/>;

  const { snippet:{ title,channelId,channelTitle },statistics:{viewCount,likeCount}} = videoDetail;
  return (
    <Box minHeight="95vh">
      <Stack direction={{xs:'column',md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%',position:'sticky',top:'86px'}}>
            <ReactPlayer className="react-player" controls url={`https://www.youtube.com/watch?v=${id}`}/>
            <Typography variant="h5" fontWeight="bold" p={2} color="#fff">
              {title}
            </Typography>
            <Stack direction="row" justifyContent="space-between" sx={{color:"#fff"}} py={1} px={2}>
              <Link to={`/channel/${channelId}`}>
                <Typography variant={{sm:'subtitle1',md:"h6"}} sx={{color:'#fff'}}>
                  {channelTitle}
                  <CheckCircleIcon sx={{fontSize:"12px",color:'gray',ml:'5px'}}/>

                </Typography>
              </Link>
              <Stack direction="row" gap="20px" alignItems="center">
                <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
                <Typography variant="body1" sx={{opacity:0.7}}>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
            </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{md:1,xs:5}} justifyContent="center" alignItems="center">
            <Videos videos={videos} direction="column"/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail