

const phones = [
    {   
        id: 1,
         name: 'iphone',
         price: 899,
    },
    {   id:2,
        name: 'pixel',
        price: 599,
   }
]


export default function PhonesView(){

const phonesMapped = phones.map((phone) => (
    
    
    <div className="phone-container" key={phone.id}> 
        {phone.name}
        {phone.price}
    </div>
    ));

    return(
        <section>
            {phonesMapped}

        </section>
    )
}