import clothesList from './clothesList.json';

export default function Blog() {
    return(
        <>
            <h1>Layout page</h1>

                {clothesList.map((item) => {
                    return(
                        <div key={item.id}>
                            <h1>{item.name}</h1>
                            <p>{item.price}</p>
                        </div>
                    )

                }) }


        </>
    )
}