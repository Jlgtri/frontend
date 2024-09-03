import React from 'react'
import { getMe2DecimalPointsWithCommas } from '../../contracts';

const PresaleLaunchpadTable = ({ userDetail }) => {

    function timeToDate(time) {

        const utcDate = new Date(time);

        const localDateString = utcDate.toLocaleString();

        return localDateString;
    }

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-color191919 rounded-xl" style={{ border: 'none' }}>
                <thead>
                    <tr className='' style={{ borderBottom: '1px solid #000' }}>
                        <th className="text-left p-3 tracking-wider text-white font-medium">
                            <div className="">Id</div>
                        </th>

                        <th className="text-left p-3 tracking-wider text-white font-medium">
                            <div className="">Amount</div>
                        </th>
                        <th className="text-left p-3 tracking-wider text-white font-medium">
                            <div className="">Tokens</div>
                        </th>
                        <th className="text-left p-3 tracking-wider text-white font-medium">
                            <div className="">Date</div>
                        </th>
                        {/* <th className="text-left p-3 tracking-wider text-white font-medium">
                            <div className="">Status</div>
                        </th> */}
                    </tr>
                </thead>
                <tbody className="">
                    {userDetail.map((user, index) => {
                        return (
                            <tr className='' style={{ borderBottom: '1px solid #000' }}>
                                <td className="p-3">
                                    <div className="text-gray-400 font-normal">#{index + 1}</div>
                                </td>


                                <td className="p-3">
                                    <div className="text-gray-400 font-normal">
                                        {parseFloat(user.amount)} {user.token_symbol}
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div className="text-gray-400 font-normal">
                                        {getMe2DecimalPointsWithCommas(user.purchased_amount)} BLOX
                                    </div>
                                </td>
                                <td className="p-3">
                                    <div className="text-gray-400 font-normal">
                                        {timeToDate(user.purchased_at)}
                                    </div>
                                </td>
                                {/* <td className="p-3">
                                    <div className={`text-gray-400 font-normal ${user.status === 0 ? "text-yellow-500" : "text-green-500"
                                        }`}
                                    >
                                        {user.status === 0 ? "Pending" : "Claimed"}
                                    </div>
                                </td> */}
                            </tr>

                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default PresaleLaunchpadTable