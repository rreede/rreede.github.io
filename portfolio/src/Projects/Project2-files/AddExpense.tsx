export default function AddExpense() {

    
    function handleSubmit() {
            
    }


    return(
        <>

            <form onSubmit={handleSubmit}>
                
                <input placeholder="Spending description" type='text' id='description'></input>

                <label htmlFor="expense">Expense</label>
                <select name="expense-type" id="">
                    <option value="">Food</option>
                    <option value="">Utilities</option>
                    <option value="">Health</option>
                </select>

                <label htmlFor="expense">Date</label>
                <input type='date' id='date'></input>

            </form>
        </>
    )
}