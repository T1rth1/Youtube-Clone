import React from 'react'
import { useState, useEffect} from 'react';
import { fetchFromAPI } from "../utils/fetchFromAPI"
import{ Box, Typography} from  '@mui/material';
import { Videos } from "./";
import { useParams } from "react-router-dom";
const SearchFeed = () => {
  const[videos,setVideos] = useState([]);
  const { searchTerm } = useParams();
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
     .then((data) => setVideos(data.items))
  },[searchTerm]);
  return (
  <Box>
    <Typography variant="h4" fontWeight={900} mb={2} ml={{ sm: "100px"}} sx={{color:'white'}}>
      {/* The variant, fontWeight,ml (margin left) and mb(margin bottom) props are directly passed to the Typography component.
        The sx prop is a special prop in Material-UI that allows you to apply custom styles using an object notation. */}
        Search Results for:  <span style={{color:'#F31503'}}>{searchTerm}</span> videos
      </Typography>
      <Box display="flex">
        <Box sx={{mr:{sm:'100px'}}}/>
        <Videos videos={videos}/>
      </Box>
  </Box>
  )
}

export default SearchFeed