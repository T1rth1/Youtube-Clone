import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import{ Paper, IconButton } from "@mui/material";
import { Search } from "@mui/icons-material";
const SearchBar = () => {
  const [ searchTerm,setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    if(searchTerm){
      navigate(`/search/${searchTerm}`); // when it navigate this route then it called "SearchFeed" component
      // and in that component we render the videos based on that serachTerm....because we make the request on that searchTerm
      // and get the videos data back based on that searchTerm..
      setSearchTerm('');
    }
  }
  return (
    <Paper 
        component="form"
        onSubmit={handleSubmit}
        sx={{
            borderRadius:20,
            border:'1px solid #e3e3e3',
            pl: 2,
            boxShadow: 'none',
            mr: {sm:5} // indicating that for small screen sizes (sm), the right margin(mr -> margin right) should have a value of 5.
        }}>
        <input className='search-bar' placeholder="Search..." value={searchTerm} onChange={(e)=>{setSearchTerm(e.target.value)}}/>
        <IconButton type="submit" sx={{ p: '10px', color: 'red' }} aria-label='search'>
            <Search/>
        </IconButton>
    </Paper>
      

  )
}

export default SearchBar