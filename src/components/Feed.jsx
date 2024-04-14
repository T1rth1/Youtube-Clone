import React from 'react'
import { useState, useEffect} from 'react';
import { fetchFromAPI } from "../utils/fetchFromAPI"
import{ Box, Stack, Typography} from  '@mui/material';
import { Sidebar, Videos } from "./"
const Feed = () => {
  const[selectedCategory,setSelectedCategory] = useState("New");
  const[videos,setVideos] = useState([]);
  const maxResults=200; // not working
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}&maxResults=${maxResults}`)
     .then((data) => setVideos(data.items))
  },[selectedCategory]);
  return (
    <Stack sx={{flexDirection:{sx:"column",md:"row"}}}>
    {/*box and stack element is nothing but like a div element and we can add our customize css using sx property to this react mui components */}
    {/*here "sx" means for extra small devices flex direction is "coumn" and height is "auto" and "md" means for medium devices height is "92vh"(92% of view port) and flex direction is "row"*/}
      <Box sx={{ height:{sx:'auto',md:'92vh'},borderRight:'1px solid #3d3d3d',px:{sx:0,md:1}}}>
          <Sidebar
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
          />
          <Typography className="copyright" variant="body2" sx={{mt:1.5,color:"#fff"}}>
            Copyright 2024 ReacMedia
          </Typography>
      </Box> 
      <Box p={1} sx={{ flex:1,overflowY: "auto", height: "90vh"}}>
        <Typography variant="h4" fontWeight="bold" mb={2} ml={2} sx={{color:'white'}}>
        {/* The variant, fontWeight,ml (margin left) and mb(margin bottom) props are directly passed to the Typography component.
          The sx prop is a special prop in Material-UI that allows you to apply custom styles using an object notation. */}
           {selectedCategory} <span style={{color:'#F31503'}}>Videos</span>
        </Typography>
        <Videos videos={videos}/>
      </Box>
    </Stack>
  )
}

export default Feed