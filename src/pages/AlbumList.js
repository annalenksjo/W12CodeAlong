import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export const AlbumList = () => {
  const [albums, setAlbums] = useState([])

  useEffect (() => {
    fetch('https://theaudiodb.com/api/v1/json/1/album.php?i=112024')
    .then((response) => response.json()) 
    .then((json) => {
      setAlbums(json.album)
    })
  }, [])
  
  return (
      <div>
        {albums.map((album) => (
          <div key={album.idAlbum}>
            <img src={album.strAlbumThumb} alt={album.strAlbum}/>
            <h2>
              <Link to={`/albums/${album.idAlbum}`}>
                {album.strAlbum}
              </Link>
            </h2>
            <h3>{album.strArtist}</h3>
          </div>
        ))}
      </div>
  )
}