import React from 'react'
import './WidegetLg.css'
export default function WidegetLg() {
    return (
        <div className='widegetLg'>
            <h3 className="widegetTitle">Last Transaction</h3>
            <table className='widegetLgTable'>
                <tr className='widegetLgTr'>
                    <th className="widegetLgTh">Customer</th>
                    <th className="widegetLgThd">Date</th>
                    <th className="widegetLgTh">Amount</th>
                    <th className="widegetLgThi">Status</th>
                    

                </tr>
                <tr className='widegetLgTr'>
                <td className='widegetLgTd'>
                   <img className='widegetimg' src='https://picsum.photos/207/308' height='40px' alt='img' />
                   <span className="widegetName"> Shimran Jha</span>
                </td>
                <td className="widegetDate">12 Feb 2023</td>
                <td className="widegetLgAmount">$190.00</td>
                <td className="widegetLgStatus">
                    <button  className='wifegetBtn' type='Approved'>Approved</button>
                </td>

                </tr>
                <tr className='widegetLgTr'>
                <td className='widegetLgTd'>
                   <img  className='widegetimg' src='https://picsum.photos/205/306' height='40px' alt='img' />
                   <span className="widegetName"> Sunsan Carol</span>
                </td>
                <td className="widegetDate">02 Dec 2022</td>
                <td className="widegetLgAmount">$183.00</td>
                <td className="widegetLgStatus">
                    <button  className='wifegetBtn' type='Approved'>Declined</button>
                </td>

                </tr>
                <tr className='widegetLgTr'>
                <td className='widegetLgTd'>
                   <img  className='widegetimg' src='https://picsum.photos/202/301' height='40px' alt='img' />
                   <span className="widegetName"> Amita Sharma</span>
                </td>
                <td className="widegetDate">02 Jan 2023</td>
                <td className="widegetLgAmount">$144.00</td>
                <td className="widegetLgStatus">
                    <button  className='wifegetBtn' type='Approved'>Pending</button>
                </td>

                </tr>
                <tr className='widegetLgTr'>
                <td className='widegetLgTd'>
                   <img  className='widegetimg' src='https://picsum.photos/200/300'  height='40px' alt='img' />
                   <span className="widegetName"> Susan Kharar</span>
                </td>
                <td className="widegetDate">22 Mar 2023</td>
                <td className="widegetLgAmount">$132.00</td>
                <td className="widegetLgStatus">
                    <button  className='wifegetBtn' type='Approved'>Approved</button>
                </td>

                </tr>
                
                <tr className='widegetLgTr'>
                <td className='widegetLgTd'>
                   <img  className='widegetimg' src='https://picsum.photos/210/390'  height='40px' alt='img' />
                   <span className="widegetName"> Sunsan Carol</span>
                </td>
                <td className="widegetDate">22 April 2023</td>
                <td className="widegetLgAmount">$122.00</td>
                <td className="widegetLgStatus">
                    <button  className='wifegetBtn' type='Approved'>Approved</button>
                </td>

                </tr>
                
            </table>
            
        </div>
    )
}
