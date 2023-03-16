import "../assets/css/galeria.css";

import { useContext } from "react";

import MyContext from "../components/MyContext";
import Loader from "../components/Loader";
import Heart from "./Heart";

export default function Home() {
   const { photos, setPhotos, loading } = useContext(MyContext)

   const favoriteLike = (id) => {
      const photoIndex = photos.findIndex((photo) => photo.id === id);
      photos[photoIndex].liked = !photos[photoIndex].liked;
      setPhotos([...photos]);
   }

   return (
      <div className="galeria grid-columns-5 p-3">
         {loading && <Loader />}
         {!loading && photos.map(photo => (
            <div key={photo.id} className="foto" style={{ backgroundImage: `url(${photo.src.large})` }}>
               <Heart filled={(photo.liked)} onClick={() => favoriteLike(photo.id)} />
               <p>{photo.alt}</p>
            </div>
         ))}
      </div>
   );
}
