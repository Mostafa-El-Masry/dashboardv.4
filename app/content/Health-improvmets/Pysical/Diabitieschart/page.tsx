import Link from 'next/link'

const Diabitieschart = () => {
  return (
    <>
    <h1>Diabities chart</h1>
    <Link className='Link' href="/content/Health-improvmets/Pysical">Back</Link>
    <h2>Create a chart for diabites Fasting &amp; 2h after each main meal</h2>
    <table className=''>
        <thead>
            <th>Date</th>
            <th>Fasting</th>
            <th>2h+ Breakfast</th>
            <th>2h+ Lunch</th>
            <th>2h+ Diner</th>
        </thead>
        <tbody>
            <tr>
                <td>23/06/2024</td>
                <td>222</td>
                <td>377</td>
                <td>350</td>
                <td>0</td>
            </tr>
            <tr>
                <td>24/06/2024</td>
                <td>289</td>
                <td>260</td>
                <td>265</td>
                <td>222</td>
            </tr>
            <tr>
            <td>2 /06/2024</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
            <td>2 /06/2024</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
            <td>2 /06/2024</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
        </tbody>
    </table>
    
    </>
  )
}

export default Diabitieschart