import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export const AlbumDetail = () => {
  const { albumId } = useParams()
  const [albumInfo, SetAlbumInfo] = useState({})

  useEffect(() => {
    fetch(`https://theaudiodb.com/api/v1/json/1/album.php?m=${albumId}`)
    .then((res) => res.json())
    .then ((json) => {
      SetAlbumInfo(json.album)
      console.log(SetAlbumInfo)
    })
  }, [albumId])
    
    return (
      <div>
        More info about the Album
      </div>
    )
  }