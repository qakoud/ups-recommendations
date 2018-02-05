let createNewPlace = ({ name = '', distance = '', thingsToGet = [], comments = [] } = {}) => {
  return (
    {
      name,
      distance,
      thingsToGet,
      comments
    }
  )
}

export default createNewPlace;
