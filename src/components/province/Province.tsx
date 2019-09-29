import React from 'react';
import { Link } from 'react-router-dom';

import './Province.css';

interface Props {
  province: string,
    cities: [{ 
        id: number, 
        name: string 
      }]
}

const Province: React.FC<Props> = (props) => {
  return (
    <div className="province">
      <div className="province__name">
        {props.province}
      </div>
      <div className="province__cities">
        {props.cities.map((city: any, index: any) => <div className="city" key={index + 'city'}>
          <Link to={`/weather/${city.name}/${city.id}`}>{city.name}</Link>
        </div>)}
      </div>
    </div>
  )
}

export default Province;