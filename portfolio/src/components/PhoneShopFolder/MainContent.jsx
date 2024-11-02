import PhonesList from "./PhonesList"

export default function MainContent() {
    return(
        <>
        <main>
        <div className="filter-products">

            <button>Phones</button>
            <button>Tablets</button>
            <button>TVS</button>

        </div>

            <div className="phonesListContainer">
             <PhonesList/>
            </div>
       </main>
        </>
    )
}