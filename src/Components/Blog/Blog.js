import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';


 


    const clipPathStyle = {
        clipPath: 'polygon(0 0, 100% 0%, 100% 40%, 50% 74%, 0 40%)',

    };


    function TabPanel(props) {
        const { children, value, index, ...other } = props;
    
        return (
            <div
                role="tabpanel"
                hidden={value !== index}
                id={`full-width-tabpanel-${index}`}
                aria-labelledby={`full-width-tab-${index}`}
                {...other}
            >
                {value === index && (
                    <Box sx={{ p: 3 }}>
                        <Typography>{children}</Typography>
                    </Box>
                )}
            </div>
        );
    }
    
    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
    };
    
    function a11yProps(index) {
        return {
            id: `full-width-tab-${index}`,
            'aria-controls': `full-width-tabpanel-${index}`,
        };
    }
    

export default function Blog() {
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div>

            <div style={clipPathStyle} className='bg-slate-200   absolute w-full h-[700px] flex flex-col text-center'>
                <div className='container'>

                    <h1 className='text-slate-950 mt-10 max-auto text-5xl font-sans font-bold'>Expert Digital <span className='text-blue-500'>Marketing</span>   </h1>
                    <div className='text-slate-100'>
                    </div>
                    <p className='text-slate-600 w-[50%] mx-auto mt-4  font-nunito '>Welcome to [Your Blog Name], your pathway to insightful content! Explore our diverse range of articles curated to inspire and inform, fostering meaningful engagement and expanding your knowledge horizons </p>
                    <Link to='/contactpage'> <button className='bg-blue-500 hover:bg-blue-600 font-nunito text-white w-[100px] h-[40px] rounded mx-auto mt-4'>Get Start</button>
                    </Link>
                </div>
            </div>
            <div className='container flex justify-center relative items-center   top-[250px]'>
                <div className='bg-slate-950 mb-[500px] w-full h-full text-center items-center flex  justify-center rounded'>

                    <Box sx={{ bgcolor: 'background.paper', width: '100%', borderRadius: '5px' }}>
                        <AppBar position="static">
                            <Tabs
                                value={value}
                                onChange={handleChange}
                                indicatorColor="secondary"
                                textColor="black"
                                variant="fullWidth"
                                aria-label="full width tabs example"
                            >
                                <Tab label="Programming Language" {...a11yProps(0)} />
                                <Tab label="Framewoek & Library" {...a11yProps(1)} />
                                <Tab label="Tools" {...a11yProps(2)} />
                                <Tab label="Top MNC" {...a11yProps(3)} />
                                <Tab label="About COmpany" {...a11yProps(4)} />
                            </Tabs>
                        </AppBar>
                        <SwipeableViews
                            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                            index={value}
                            onChangeIndex={handleChangeIndex}
                        >
                            <TabPanel value={value} index={0} dir={theme.direction}>
                                <div className=' font-verdina text-3xl font-bold mt-3 mb-2'>Interview Question For Programming Language</div>
                                <div className='font-nunito'> Delve into the core of computing with our fundamental interview section. Explore essential concepts, from hardware to software, to prepare for comprehensive discussions. Master the foundational principles for a confident stride in your interviews.
                                </div>
                                <div className="flex flex-wrap  gap-3 mt-4">
                                    {/* {
                                        Language.map((tutorial) => (

                                            // eslint-disable-next-line jsx-a11y/anchor-has-content

                                            <Link
                                                key={tutorial.id}
                                                to={tutorial.link}
                                                className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                                            >
                                                <div className='w-[130px] h-36 rounded bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                                    <div>
                                                        <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                                    </div>
                                                    <div className='text-black mt-1 font-verdina text-sm'>
                                                        {tutorial.title}
                                                    </div>
                                                </div>

                                            </Link>


                                        ))
                                    } */}
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={1} dir={theme.direction}>
                                <div className=' font-verdina text-3xl font-bold mt-3 mb-2'>Interview Questions about Library & Framework</div>
                                <div className='font-nunito'> Delve into the core of computing with our fundamental interview section. Explore essential concepts, from hardware to software, to prepare for comprehensive discussions. Master the foundational principles for a confident stride in your interviews.
                                </div>
                                <div className="flex flex-wrap  gap-3 mt-4">
                                    {/* {
                                        Library.map((tutorial) => (

                                            <Link
                                                key={tutorial.id}
                                                to={tutorial.link}
                                                className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                                            >
                                                <div className='w-[130px] h-36 rounded bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                                    <div>
                                                        <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                                    </div>
                                                    <div className='text-black mt-1 font-verdina text-sm'>
                                                        {tutorial.title}
                                                    </div>
                                                </div>

                                            </Link>


                                        ))
                                    } */}
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={2} dir={theme.direction}>
                                <div className=' font-verdina text-3xl font-bold mt-3 mb-2'>Interview Questions about Tools</div>
                                <div className='font-nunito'> Delve into the core of computing with our fundamental interview section. Explore essential concepts, from hardware to software, to prepare for comprehensive discussions. Master the foundational principles for a confident stride in your interviews.
                                </div>
                                <div className="flex flex-wrap overflow-x-auto   gap-3 mt-4">
                                    {/* {
                                        Tools.slice(0, 16).map((tutorial) => (

                                            <Link
                                                key={tutorial.id}
                                                to={tutorial.link}
                                                className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                                            >
                                                <div className='w-[130px] h-36 rounded bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                                    <div>
                                                        <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                                    </div>
                                                    <div className='text-black mt-1 font-verdina text-sm'>
                                                        {tutorial.title}
                                                    </div>
                                                </div>

                                            </Link>


                                        ))
                                    } */}
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={3} dir={theme.direction}>
                                <div className=' font-verdina text-3xl font-bold mt-3 mb-2'>Top MNC</div>
                                <div className='font-nunito'> Delve into the core of computing with our fundamental interview section. Explore essential concepts, from hardware to software, to prepare for comprehensive discussions. Master the foundational principles for a confident stride in your interviews.
                                </div>
                                <div className="flex flex-wrap  gap-3 mt-4">
                                    {/* {
                                        interviewObject.map((tutorial) => (

                                            <Link
                                                key={tutorial.id}
                                                to={tutorial.link}
                                                className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                                            >
                                                <div className='w-[130px] h-36 rounded bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                                    <div>
                                                        <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                                    </div>
                                                    <div className='text-black mt-1 font-verdina text-sm'>
                                                        {tutorial.title}
                                                    </div>
                                                </div>

                                            </Link>


                                        ))
                                    } */}
                                </div>
                            </TabPanel>
                            <TabPanel value={value} index={4} dir={theme.direction}>
                                <div className=' font-verdina text-3xl font-bold mt-3 mb-2'>About Company</div>
                                <div className='font-nunito'> Delve into the core of computing with our fundamental interview section. Explore essential concepts, from hardware to software, to prepare for comprehensive discussions. Master the foundational principles for a confident stride in your interviews.
                                </div>
                                <div className="flex flex-wrap  gap-3 mt-4">
                                    {/* {
                                        interviewObject.map((tutorial) => (

                                            <Link
                                                key={tutorial.id}
                                                to={tutorial.link}
                                                className='shadow-sm rounded  transition ease-in-out delay-50  hover:-translate-y-2 hover:scale-40  duration-400 '
                                            >
                                                <div className='w-[130px] h-36 rounded bg-slate-100 hover:bg-slate-200 flex flex-col items-center justify-center'>
                                                    <div>
                                                        <img className='w-[70px] h-[70px]' src={tutorial.img} alt="" />
                                                    </div>
                                                    <div className='text-black mt-1 font-verdina text-sm'>
                                                        {tutorial.title}
                                                    </div>
                                                </div>

                                            </Link>


                                        ))
                                    } */}
                                </div>
                            </TabPanel>
                        </SwipeableViews>
                    </Box>


                </div>
            </div>

        </div>

    );
};

