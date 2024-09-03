import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const UnlockExclusiveBenefits = () => {
    return (
        <div>
            <div className="text-center mb-5">
                <div className="text-white text-center font-bold lg:text-5xl md:text-4xl sm:text-3xl text-3xl mb-5">
                    Security & Transparency Milestone
                </div>
                <div className="text-white">
                    Achiveving Audit Success and Showcasing Our Vision for a <br /> secure and transaction future
                </div>
            </div>
            <Container maxWidth="lg">
                <Grid container spacing={2}>
                    <Grid item lg="6" md="6" sm="12" xs="12">
                        <Box className="p-5 rounded-xl bg-color191919 h-full">
                            <div className="text-center text-white font-bold py-4 lg:text-4xl md:text-4xl sm:text-3xl text-3xl">Audit Results</div>
                            <div className="text-gray-400 text-center py-3 font-normal">
                                We have been successfully audited by Certik. This milestone highlights our commitment to transparency and excellence
                            </div>
                            <div className="my-6 text-center">
                                <Link to="https://www.certik.com/" target='_blank' className='text-white'>
                                    <button className="rounded-lg gradientBorder lg:w-1/2 md:w-1/2 sm:w-full w-full m-auto">
                                        <div className='bg-black w-full rounded-lg py-1 h-14 flex items-center justify-center'>
                                            <img src="https://www.certik.com/_app/immutable/assets/certik-logotype-h-w.b7600cfc.svg" className='w-40 m-auto' alt="" />
                                            {/* https://www.certik.com/ */}
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </Box>
                    </Grid>
                    <Grid item lg="6" md="6" sm="12" xs="12">
                        <Box className="p-5 rounded-xl bg-color191919 h-full">
                            <div className="text-center text-white font-bold py-4 lg:text-4xl md:text-4xl sm:text-3xl text-3xl">Explore Documentation</div>
                            <div className="text-gray-400 text-center py-3 font-normal">
                                Details of BLOX Network functionality and its mission to address industry challenges
                            </div>
                            <div className="my-6 text-center">
                                <Link to="https://bloxnetwork.gitbook.io/bloxnetwork" target='_blank'>
                                    <button className="rounded-lg gradientBorder lg:w-1/2 md:w-1/2 sm:w-full w-full m-auto text-white transition-all hover:text-gray-300">
                                        <div className='bg-black w-full rounded-lg py-1 h-14 flex items-center justify-center'>
                                            Read More
                                        </div>
                                    </button>
                                </Link>
                            </div>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}

export default UnlockExclusiveBenefits