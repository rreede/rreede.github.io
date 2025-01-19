import { useParams } from "react-router";
import realEstateData from './Real-estate-files/real-estate-list.json';
import Header from "./Project1-files/Header";
import './project1.css';

export default function IndividualRealEstatePage() {
  const { id } = useParams();

  // Ensure id from useParams matches property.id type
  const filteredProperties = realEstateData.filter(
    (property: any) => property.id === Number(id)
  );

  return (
    <>

    <Header/>

      {/* Render filtered properties */}
      {filteredProperties.map((property: any) => (
        <div key={property.id}>
          <h1>{property.name}</h1>
        
          <img src={property.image} className='individual-image' alt={property.name} /><br/>
          <p>{property.description}</p>
          <p>Price: {property.price}</p>
          <button>Contact</button>
          <table className='specific-info-table'>
            <th>
                <td>Rooms</td>
            </th>
            <th>
                <td>Average utilities</td>
            </th>

            <tr>
                <td>{property.rooms}</td>
                <td>{property.utilities}</td>
            </tr>
          </table>

<div className="recently-viewed-section">
    <h2>Recently viewed</h2>
    <div className="recently-viewed-container">
        {realEstateData.map((property: any) => (
            <div className="recently-viewed-item" key={property.id}>
                <img src={property.image} alt={property.name} className='recently-viewed-image' />
                <h3>{property.name}</h3>
                <p>{property.price}</p>
            </div>
        ))}
    </div>
</div>

        </div>
      ))}
    </>
  );
}
