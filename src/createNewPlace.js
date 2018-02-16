let createNewPlace = ({ name = '', placeId='', thingsToGet = [], comments = [] } = {}) => {
  return (
    {
      name,
      placeId,
      thingsToGet,
      comments
    }
  )
}

export default createNewPlace;
