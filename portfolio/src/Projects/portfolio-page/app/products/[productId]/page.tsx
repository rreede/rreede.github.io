import productsList from '../../productsList'
import Header from '@/app/ui/Header';
import Image from 'next/image';

export default function Details({ params }: { params: { productId: string } }) {
  // Directly use params.productId for filtering
  const filteredItem = productsList.filter((item: any) => item.id === Number(params.productId));
  return (
    <>
    <Header/>
<main>
<div className="wrapper ">
      {/* Check if filteredItem is not empty and render */}
      {filteredItem.length > 0 ? (
        filteredItem.map((item: any) => (
          <div key={item.id} className='flex'>
            <div className="left-container">
                <Image src={`/${item.img[0]}`} className='mb-6' width={200} height={200} alt={item.name}/>
                <h2>{item.name}</h2>
                <p>{item.price}$</p>
                </div>

                <div className="right-container">
                    <p>{item.description}</p>
                    <button className='bg-blue-600 rounded-md py-3 px-6 mt-3 text-white'>Add to shopping cart</button>
                </div>
               
          </div>
        ))
      ) : (
        <p>Product not found</p>
      )}

</div>
</main>
    </>
  );
}
