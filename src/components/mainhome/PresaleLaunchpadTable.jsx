import React, { useState } from "react";
import { getMe2DecimalPointsWithCommas } from "../../contracts";
import { useSelector } from "react-redux";
import { useAccount } from "wagmi";
import { FaArrowAltCircleDown } from "react-icons/fa";

const PresaleLaunchpadTable = () => {
  const [roundOne, setroundOne] = useState(false);
  const [roundTwo, setroundTwo] = useState(false);
  const [roundThree, setroundThree] = useState(false);
  const [roundFour, setroundFour] = useState(false);
  const { address } = useAccount();
  const userDetail = useSelector((state) => state.blox.userDetails);
  const presales = useSelector((state) => state.blox.presales);

  function timeToDate(time) {
    const utcDate = new Date(time);

    const localDateString = utcDate?.toLocaleString();

    return localDateString;
  }

  const shortenAddress = `${address?.slice(0, 6)}...${address?.slice(-4)}`;

  const presaleZeroUsers = userDetail?.filter((user) => user?.presale_id === 0);
  const updatedPresaleZeroUsers = presaleZeroUsers?.map((user, index) => {
    // Define the array with the desired values
    const unlockdayValues = [
      "90 days after the listing date",
      "180 days after the listing date",
      "270 days after the listing date",
      "360 days after the listing date",
    ];
    const unlockdayValue = unlockdayValues[index % unlockdayValues?.length];
    return {
      ...user,
      unlockday: unlockdayValue,
    };
  });

  // --------
  const presaleOneUsers = userDetail?.filter((user) => user?.presale_id === 1);
  const updatedpresaleOneUsers = presaleOneUsers?.map((user, index) => {
    // Define the array with the desired values
    const unlockdayValues = [
      "90 days after the listing date",
      "150 days after the listing date",
      "210 days after the listing date",
      "270 days after the listing date",
    ];
    const unlockdayValue = unlockdayValues[index % unlockdayValues?.length];
    return {
      ...user,
      unlockday: unlockdayValue,
    };
  });
  //   ------------
  const presaleTwoUsers = userDetail?.filter((user) => user?.presale_id === 2);

  const updatedpresaleTwoUsers = presaleTwoUsers?.map((user, index) => {
    // Define the array with the desired values
    const unlockdayValues = [
      "60 days after the listing date",
      "90 days after the listing date",
      "120 days after the listing date",
      "180 days after the listing date",
    ];
    const unlockdayValue = unlockdayValues[index % unlockdayValues?.length];
    return {
      ...user,
      unlockday: unlockdayValue,
    };
  });
  //--------------
  const presaleThreeUsers = userDetail?.filter((user) => user?.presale_id === 3);
  const updatedpresaleThreeUsers = presaleThreeUsers?.map((user, index) => {
    // Define the array with the desired values
    const unlockdayValues = [
      "30 days after the listing date",
      "60 days after the listing date",
      "90 days after the listing date",
      "120 days after the listing date",
    ];
    const unlockdayValue = unlockdayValues[index % unlockdayValues?.length];
    return {
      ...user,
      unlockday: unlockdayValue,
    };
  });
  // ------------
  const sumPurchasedAmount = (users) => {
    return users?.reduce(
      (total, user) => total + parseFloat(user?.amount || 0),
      0
    );
  };
  // ---------
  const presaleZeroTotal = sumPurchasedAmount(presaleZeroUsers || 0);
  const presaleOneTotal = sumPurchasedAmount(presaleOneUsers || 0);
  const presaleTwoTotal = sumPurchasedAmount(presaleTwoUsers || 0);
  const presaleThreeTotal = sumPurchasedAmount(presaleThreeUsers || 0);

  const totalPresaleAmount =
    presaleZeroTotal + presaleOneTotal + presaleTwoTotal + presaleThreeTotal;

  return (
    <>
      <div className="overflow-x-auto mainboxdashboardtable">
        <div className="w-full text-center">
          <div className="w-[80%] m-auto  bg-color191919 p-2">
            <p>Your wallet address:</p>
            <p>{shortenAddress}</p>
            <p>
              Total BLOX Purchased: <span>{totalPresaleAmount}</span>
            </p>
          </div>
        </div>
        {/* Round 1 Table */}
        <div className="roundboxmain">
          <div className="text-center">
            <div className="w-[80%] m-auto pt-5 bg-zinc-800 p-4 mt-4 font-3 rounddiv">
              <p>Round 1 </p>
              <button onClick={() => setroundOne(!roundOne)}>
                <FaArrowAltCircleDown className="downIcon" />
              </button>
            </div>
          </div>
          {roundOne && (
            <div>
              <div className="w-[80%] m-auto mt-4 mb-3 text-center">
                <p>
                  Total $BLOX purchased in round 1:
                  <span className="purchased_total">{presaleZeroTotal}</span>
                </p>
              </div>
              <table
                className="w-[70%] m-auto rounded-xl mt-5 "
                style={{ border: "none" }}
              >
                <thead>
                  <tr className="" style={{ borderBottom: "1px solid #000" }}>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Id</div>
                    </th>

                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">No. Of tokens</div>
                    </th>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Date</div>
                    </th>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Claim</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {/* {presaleZeroUsers.map((user, index) => { */}
                  {updatedPresaleZeroUsers.map((user, index) => {
                    const findPresale = presales.find(
                      (presale) => presale.presale_id === user.presale_id
                    );
                    const tge_unlock = findPresale?.tge_unlock || 0;
                    const TGTAmount =
                      (Number(user.amount) * Number(tge_unlock)) / 100;
                    if (user.presale_id === 0) {
                    }
                    return (
                      <>
                        <tr
                          className=""
                          style={{ borderBottom: "1px solid #000" }}
                        >
                          <td className="p-3">
                            <div className="text-gray-400 font-normal">
                              #{index + 1}
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="text-gray-400 font-normal">
                              {getMe2DecimalPointsWithCommas(
                                user.purchased_amount
                              )}{" "}
                              BLOX
                            </div>
                          </td>

                          <td className="p-3 tokentd">
                            <div className="text-gray-400 font-normal">
                              {/* {timeToDate(user.purchased_at)} */}
                              {user.unlockday}
                            </div>
                          </td>
                          <td className="p-3">
                            <button className="p-2 w-[100px] climButton rounded m-2">
                              Claim
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* Round 2 Table */}
        <div className="roundboxmain">
          <div className="text-center">
            <div className="w-[80%] m-auto pt-5 bg-zinc-800 p-4 mt-4 font-3 rounddiv">
              <p>Round 2 </p>
              <button onClick={() => setroundTwo(!roundTwo)}>
                <FaArrowAltCircleDown className="downIcon" />
              </button>
            </div>
          </div>
          {roundTwo && (
            <div>
              <div className="w-[80%] m-auto mt-4 mb-3 text-center">
                <p>
                  Total $BLOX purchased in round 2:
                  <span className="purchased_total">{presaleOneTotal}</span>
                </p>
              </div>
              <table
                className="w-[70%] m-auto rounded-xl mt-5"
                style={{ border: "none" }}
              >
                <thead>
                  <tr className="" style={{ borderBottom: "1px solid #000" }}>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Id</div>
                    </th>

                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">No. Of tokens</div>
                    </th>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Date</div>
                    </th>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Claim</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {updatedpresaleOneUsers.map((user, index) => {
                    const findPresale = presales.find(
                      (presale) => presale.presale_id === user.presale_id
                    );
                    const tge_unlock = findPresale?.tge_unlock || 0;
                    const TGTAmount =
                      (Number(user.amount) * Number(tge_unlock)) / 100;
                    return (
                      <>
                        <tr
                          className=""
                          style={{ borderBottom: "1px solid #000" }}
                        >
                          <td className="p-3">
                            <div className="text-gray-400 font-normal">
                              #{index + 1}
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="text-gray-400 font-normal">
                              {getMe2DecimalPointsWithCommas(
                                user.purchased_amount
                              )}{" "}
                              BLOX
                            </div>
                          </td>

                          <td className="p-3 tokentd">
                            <div className="text-gray-400 font-normal">
                              {user.unlockday}
                            </div>
                          </td>
                          <td className="p-3">
                            <button className="p-2 w-[100px] climButton rounded m-2">
                              Claim
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* Round 3 Table */}
        <div className="roundboxmain">
          <div className="text-center">
            <div className="w-[80%] m-auto pt-5 bg-zinc-800 p-4 mt-4 font-3 rounddiv">
              <p>Round 3 </p>
              <button onClick={() => setroundThree(!roundThree)}>
                <FaArrowAltCircleDown className="downIcon" />
              </button>
            </div>
          </div>
          {roundThree && (
            <div>
              <div className="w-[80%] m-auto mt-4 mb-3 text-center">
                <p>
                  Total $BLOX purchased in round 3:
                  <span className="purchased_total">{presaleTwoTotal}</span>
                </p>
              </div>
              <table
                className="w-[70%] m-auto rounded-xl mt-5"
                style={{ border: "none" }}
              >
                <thead>
                  <tr className="" style={{ borderBottom: "1px solid #000" }}>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Id</div>
                    </th>

                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">No. Of tokens</div>
                    </th>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Date</div>
                    </th>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Claim</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {updatedpresaleTwoUsers?.map((user, index) => {
                    const findPresale = presales.find(
                      (presale) => presale.presale_id === user.presale_id
                    );
                    const tge_unlock = findPresale?.tge_unlock || 0;
                    const TGTAmount =
                      (Number(user.amount) * Number(tge_unlock)) / 100;
                    if (user.presale_id === 0) {
                    }
                    return (
                      <>
                        <tr
                          className=""
                          style={{ borderBottom: "1px solid #000" }}
                        >
                          <td className="p-3">
                            <div className="text-gray-400 font-normal">
                              #{index + 1}
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="text-gray-400 font-normal">
                              {getMe2DecimalPointsWithCommas(
                                user.purchased_amount
                              )}{" "}
                              BLOX
                            </div>
                          </td>

                          <td className="p-3 tokentd">
                            <div className="text-gray-400 font-normal ">
                              {/* {timeToDate(user.purchased_at)} */}
                              {user.unlockday}
                            </div>
                          </td>
                          <td className="p-3">
                            <button className="p-2 w-[100px] climButton rounded m-2">
                              Claim
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
        {/* Round 4 Table */}
        <div className="roundboxmain">
          <div className="text-center">
            <div className="w-[80%] m-auto pt-5 bg-zinc-800 p-4 mt-4 font-3 rounddiv">
              <p>Round 4 </p>
              <button onClick={() => setroundFour(!roundFour)}>
                <FaArrowAltCircleDown className="downIcon" />
              </button>
            </div>
          </div>
          {roundFour && (
            <div>
              <div className="w-[80%] m-auto mt-4 mb-3 text-center">
                <p>
                  Total $BLOX purchased in round 4:
                  <span className="purchased_total">{presaleThreeTotal}</span>
                </p>
              </div>

              <table
                className="w-[70%] m-auto rounded-xl mt-5"
                style={{ border: "none" }}
              >
                <thead>
                  <tr className="" style={{ borderBottom: "1px solid #000" }}>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Id</div>
                    </th>

                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">No. Of tokens</div>
                    </th>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Date</div>
                    </th>
                    <th className="text-left p-3 tracking-wider text-white font-medium">
                      <div className="">Claim</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="">
                  {updatedpresaleThreeUsers?.map((user, index) => {
                    const findPresale = presales.find(
                      (presale) => presale.presale_id === user.presale_id
                    );
                    const tge_unlock = findPresale?.tge_unlock || 0;
                    const TGTAmount =
                      (Number(user.amount) * Number(tge_unlock)) / 100;
                    if (user.presale_id === 0) {
                    }
                    return (
                      <>
                        <tr
                          className=""
                          style={{ borderBottom: "1px solid #000" }}
                        >
                          <td className="p-3">
                            <div className="text-gray-400 font-normal">
                              #{index + 1}
                            </div>
                          </td>
                          <td className="p-3">
                            <div className="text-gray-400 font-normal">
                              {getMe2DecimalPointsWithCommas(
                                user.purchased_amount
                              )}{" "}
                              BLOX
                            </div>
                          </td>

                          <td className="p-3 tokentd">
                            <div className="text-gray-400 font-normal">
                              {/* {timeToDate(user.purchased_at)} */}
                              {user.unlockday}
                            </div>
                          </td>
                          <td className="p-3">
                            <button className="p-2 w-[100px] climButton rounded m-2">
                              Claim
                            </button>
                          </td>
                        </tr>
                      </>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default PresaleLaunchpadTable;
