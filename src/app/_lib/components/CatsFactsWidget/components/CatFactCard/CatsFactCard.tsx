import React from 'react'
import CatsFactCardData from '../../types/CatsFactCardData.type'


const CatsFactCard = (props: CatsFactCardData) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <div className="flex items-center mb-2">
        <img src={props.user.photo} alt={props.user.name} className="w-10 h-10 rounded-full mr-3" />
        <h3 className="font-semibold">
          {props.user.name}
        </h3>
      </div>
      <p className="text-gray-600">
        {props.catsFact}
      </p>
    </div>
  );
}

export default CatsFactCard;