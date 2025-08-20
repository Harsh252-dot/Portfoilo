import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import '../styles/education.css';
import { MdCastForEducation } from 'react-icons/md';
import { FaUserGraduate } from 'react-icons/fa';
import { GoTriangleLeft, GoTriangleRight } from 'react-icons/go';

export const Education = () => {
    const { light } = useContext(ThemeContext);

    return (
        <div id='education' style={{ '--bglighted': light ? "#edf2f8" : "#0a192f", '--plight': light ? 'black' : 'white', '--namelight': light ? "#dc143c" : "#64ffda", '--rolelight': light ? "" : "#dc143c" }}>
            <p>Educ<span>a</span>ti<span>o</span>n Details</p>

            <div className='educard' data-aos='zoom-in'>
                <div id='edu1'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div className='educardDet edd1'>
                    <p>Full Stack Web Development</p>
                    <p>Masai School, Remote</p>
                    <p>Focused on MERN Stack, DSA, and real-world projects</p>
                    <p>July 2024 – April 2025 (Ongoing)</p>
                </div>
                <div className='date d1'></div>
            </div>

            {/* <div className='educard' data-aos='zoom-in'>
                <div id='edu2'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div className='date d2'></div>
            </div> */}
{/* 
            <div className='educard' data-aos='zoom-in'>
                <div id='edu1'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>

                <div className='date d1'></div>
            </div> */}

            {/* <div className='educard' data-aos='zoom-in'>
                <div id='edu2'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div className='educardDet edd2'>
                    <p>Class 12th (Intermediate)</p>
                    <p>Bharatiya Intermediate College Kushinagar, Uttar Pradesh</p>
                    <p>Science Stream</p>
                    <p>2016 | Scored 75%</p>
                </div>
                <div className='date d2'></div>
            </div> */}
{/* 
            <div className='educard' data-aos='zoom-in'>
                <div id='edu1'>
                    <GoTriangleLeft className='ic21' />
                    <FaUserGraduate className='ic' />
                    <GoTriangleRight className='ic22' />
                </div>
                <div className='educardDet edd1'>
                    <p>Class 10th (High School)</p>
                    <p>Gyanoday High School Kushinagar, Uttar Pradesh</p>
                    <p>General Subjects</p>
                    <p>2014 | Scored 86%</p>
                </div>
                <div className='date d1'></div>
            </div> */}
        </div>
    );
};
