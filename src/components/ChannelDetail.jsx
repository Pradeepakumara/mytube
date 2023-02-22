import React, { useEffect, useState } from 'react'
import {Videos, ChannelCard} from './';
import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import { fetchFromAPI } from '../utils/fetchFromAPI';

const ChannelDetail = () => {

  const {id} = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([])

  // console.log(channelDetail);

  // console.log(videos);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
    .then((data) => setChannelDetail(data?.items[0]))

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
    .then((data) => setVideos(data?.items))
  }, [id])


  return (
    <Box minHeight="95vh">
      <Box>
        <div
          style={{
            background: 'radial-gradient(circle, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%)',
            zIndex: 10,
            height: '300px'
          }}
        />
        <ChannelCard channelDetail={channelDetail} marginTop="-110px" />
      </Box>

      <Box display="flex" p="2">
          <Box sx={{mr: {sm: '100px'}}} />
            <Videos videos={videos} />
          
      </Box>
    </Box>
  )
}

export default ChannelDetail