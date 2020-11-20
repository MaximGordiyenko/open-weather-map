import React from 'react';

const FindCity = ({ data }) => {
  console.log(data);
  return (
    <div className="">
      {
        data.loading ? (<h2>Loading...</h2>) :
          data.error ? (<h2>{data.error}</h2>) :
            <div>
              {
                data.cast &&
                Array.isArray(data.cast) &&
                data.cast.length > 0 &&
                data.cast &&
                <p>{data.cast[0].city.name}</p>
              }
            </div>
      }
    </div>
  );
};

export default FindCity;
