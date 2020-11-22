import React from 'react';

const FindCity = ({ data }) => {
  return (
    <>{
        data.loading ? (<h2>Loading...</h2>) :
          data.error ? (<h2>{data.error}</h2>) :
            <div>
              {
                data.cast &&
                Array.isArray(data.cast) &&
                data.cast.length > 0 &&
                data.cast &&
                <h3>{data.cast[0].city.name}</h3>
              }
            </div>
      }</>
  );
};

export default FindCity;
