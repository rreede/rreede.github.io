import { useParams } from "react-router";
import realEstateData from './Real-estate-files/real-estate-list.json';

export default function IndividualRealEstatePage() {
  const { id } = useParams();

  // Ensure id from useParams matches property.id type
  const filteredProperties = realEstateData.filter(
    (property: any) => property.id === Number(id)
  );

  return (
    <>

      {/* Render filtered properties */}
      {filteredProperties.map((property: any) => (
        <div key={property.id}>
          <h1>{property.name}</h1>
          <p>{property.description}</p>
          <p>Price: {property.price}</p>
          <img src={property.image} className='individual-image' alt={property.name} /><br/>
          
          <button>Contact</button>


          <table>
            <th>
                <td>Test</td>
            </th>
            <th>
                <td>Test</td>
            </th>
            <th>
                <td>Test</td>
            </th>
            <tr>
                <td>Test 12</td>
                <td>Test 13</td>
            </tr>
          </table>
        </div>
      ))}
    </>
  );
}
