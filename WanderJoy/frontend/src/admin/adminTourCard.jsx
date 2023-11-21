import React, {useContext} from 'react'
import {Card, CardBody} from 'reactstrap'
import {Link, useNavigate} from 'react-router-dom'
import './styles/admintourcard.css'
import calculateAvgRating from '../utils/avgRating'

import {BASE_URL} from './../utils/config'
import {AuthContext} from './../context/AuthContext'

const AdminTourCard = ({tour}) => {

    const{_id,title,city, photo,price,featured,reviews} = tour;

    const{totalRating, avgRating} = calculateAvgRating(reviews);

    const { user } = useContext(AuthContext);
    const token = user.token;
    const navigate = useNavigate();

    const handleDelete = async (e) => {
        e.preventDefault();
        const confirmDelete = window.confirm('Are you sure you want to delete this tour?');

        if(confirmDelete){
    
        try {
          const res = await fetch(`${BASE_URL}/tours/${_id}`, {
            method: 'delete', // Use put method to update data
            headers: {
              'content-type': 'application/json',
              Authorization: `Bearer ${token}`,
            },
            credentials: 'include'
            //body: JSON.stringify(createTour),
          });
    
          const result = await res.json();
          if (!res.ok) {
            return alert(result.message);
          }
          alert(result.message);
          navigate('/tour');
          
        } catch (err) {
          alert(err.message);
        } }
      };

    return <div className='tour__card_ouradmin'>
        <Card>
            <div className='tour__img_ouradmin'>
                <img src={photo} alt='tour-img_ouradmin' />
                {featured && <span>Featured</span>}
            </div>

            <CardBody>
            <div className='card__top_ouradmin d-flex align-items-center justify-content-between'>
                <span className='tour__location_ouradmin d-flex align-items-center gap-1'>
                <i class="ri-map-pin-2-line"></i>{city}
                </span>
                <span className='tour__location_ouradmin d-flex align-items-center gap-1'>
                <i class="ri-star-fill"></i>{avgRating=== 0 ? null : avgRating}
                {totalRating === 0 ? ('Not rated') :( <span>({reviews.length})</span>)}
                
                </span>
            </div>

            <h5 className='tour__title_ouradmin'>{title}</h5>

            <div className='card__bottom_ouradmin d-flex align-items-center justify-content-between mt-3'>
                <h5>${price}<span>/per person</span></h5>
                <button className='btn booking__btn_ouradmin'>
                    <Link to={`/tours/update/${_id}`}>Update Tour</Link>
                </button> 
                {/*--added delete button--*/}
                <button className='btn delete__btn_ouradmin' onClick={handleDelete}>
                    Delete Tour
                </button>
            </div>
        </CardBody>
        </Card>

        
    </div>
}

export default AdminTourCard;