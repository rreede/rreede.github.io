

const phones = [
    {   
        id: 1,
        manufacturer: 'Apple',
         name: 'Iphone 15',
         price: 999,
         image: 'phone-images/Iphone15.jpg',
    },
    {   id:2,
        manufacturer: 'Google',
        name: 'Pixel 9',
        price: 899,
        image: '',
   }
]


export default function PhonesView(){

const phonesMapped = phones.map((phone) => (
    
    
    <div className="phone-container" key={phone.id}> 
   <img className="product-image" src={phone.image} alt="" /> 
        <p className="manufacturer-p">{phone.manufacturer}</p> 
       <strong>{phone.name}</strong>  <br></br>
        {phone.price}$

        <div className="see-more-btn">See More</div>
    </div>
    ));

    return(
        <section>

            <div className="category-filter">
                <div className="phones-filter-btn filter-pill">Phones</div>
                <div className="phones-filter-btn filter-pill">Tablets</div>
                <div className="phones-filter-btn filter-pill">TV</div>

            </div>
            {phonesMapped}

        </section>
    )
}