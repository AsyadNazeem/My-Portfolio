import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

const Degree = ({ educationData }) => {
    return (
        <div className="education-container" style={{ width: '100%', margin: '0 auto' }}>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
            >
                {educationData.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className='degree' style={{
                            marginTop: '30px',
                            // border: '1px solid #ccc',
                            borderRadius: '10px',
                            padding: '10px',
                            // boxShadow: '0px 8px 24px rgba(149, 157, 165, 0.2)',
                            backgroundColor: '#fff',
                            marginBottom:'30px'
                        }}>
                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                <h2 className='dig-heading' style={{ maxWidth: '300px', fontSize: '18px' }}>{item.course}</h2>
                                <h2 className='uni' style={{ maxWidth: '350px', fontSize: '18px' }}>{item.campus}</h2>
                                <h2 className='year' style={{ maxWidth: '350px', fontSize: '18px' }}>{item.year}</h2>
                            </div>
                            <div className='par'>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{
                                        width: '10px',
                                        height: '10px',
                                        backgroundColor: 'black',
                                        borderRadius: '50%',
                                        marginRight: '10px',
                                    }}></div>
                                    {item.description.des1}
                                </div>
                                <br />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{
                                        width: '13px',
                                        height: '10px',
                                        backgroundColor: 'black',
                                        borderRadius: '50%',
                                        marginRight: '10px',
                                    }}></div>
                                    {item.description.des2}
                                </div>
                                <br />
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <div style={{
                                        width: '10px',
                                        height: '10px',
                                        backgroundColor: 'black',
                                        borderRadius: '50%',
                                        marginRight: '10px',
                                    }}></div>
                                    {item.description.des3}
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default Degree;
