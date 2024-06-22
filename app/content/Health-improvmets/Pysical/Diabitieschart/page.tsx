import Link from 'next/link'
import React from 'react'

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
                <td>22/06/2024</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
                <td>0</td>
            </tr>
            <tr>
                <td></td>
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