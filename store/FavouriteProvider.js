import {useState} from 'react';
import FavouriteContext from './FavouriteContext';

const FavouriteProvider = props => {
  const [favourite, setFavourite] = useState([]);
  const ProviderValue = {
    favourite,
    setFavourite,
  };
  return (
    <FavouriteContext.Provider value={ProviderValue}>
      {props.children}
    </FavouriteContext.Provider>
  );
};
export default FavouriteProvider;
