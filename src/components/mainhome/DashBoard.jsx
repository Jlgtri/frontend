import { Box } from "@mui/material";
import React from "react";
import PresaleLaunchpadTable from "./PresaleLaunchpadTable";
// import PresaleLaunchpad from "./PresaleLaunchpad";
import { useSelector } from "react-redux";

const DashBoard = () => {
    const presales = useSelector((state) => state.blox.presales);
    return (
        <Box paddingY="3rem">
            <h2 style={{ color: 'white' }}><PresaleLaunchpadTable /></h2>
            {/* <h2 style={{color:'white'}}><PresaleLaunchpad presale={presales}/></h2> */}

        </Box>
    )
}

export default DashBoard;