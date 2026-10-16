"use client";
import "./Skills.css"
import ProgressBar from 'react-bootstrap/ProgressBar';
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "@/lib/router";
function Skills() {
    return (
        <>
            <div className="container mt-5 pt-lg-3 mb-5 pb-5">
                <ul>
                    <li className="syne">What We Do Best</li>
                </ul>
                <div className="row ">
                    <div className="col-lg-6 ">
                        <h2 className='Sectional-heading syne mt-3 mb-3'>Business  <span className="text-orange"> Growth  </span> With Marketing </h2>
                    </div>
                    <div className="col-lg-6 mt-4">
                        <p className="text-muted">
                            At WebberZone, we help US small and medium businesses win more customers with social media, Meta & Google Ads, geo-fencing, SEO, AI videos and websites that convert.
                        </p>
                    </div>
                </div>

                <div className="row mt-2 px-2">
                    <div className="col-lg-3 col-md-6 col-sm-12  mt-2 mb-3">
                        <h6 className="syne">Social Media Management</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={90}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={90}
                                    style={{
                                        height: '5px',
                                        backgroundColor: 'var(--wz-primary)',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">90%</span>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12  mt-2">
                        <h6 className="syne">Meta & Google Ads</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={80}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={80}
                                    style={{
                                        height: '5px',
                                        backgroundColor: 'var(--wz-primary)',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">80%</span>
                        </div>
                    </div>
                  

                    <div className="col-lg-3 col-md-6 col-sm-12  mt-2">
                        <h6 className="syne">Geo-Fencing Ads</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={85}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={85}
                                    style={{
                                        height: '5px',
                                        backgroundColor: 'var(--wz-primary)',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">85%</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12  mt-2">
                        <h6 className="syne"> Content & AI Videos </h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={85}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={85}
                                    style={{
                                        height: '5px',
                                        backgroundColor: 'var(--wz-primary)',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">85%</span>
                        </div>
                    </div>

                </div>


                <div className="row mt-2 px-2">
                    <div className="col-lg-3 col-md-6 col-sm-12  mt-3 mb-3">
                        <h6 className="syne">SEO</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={80}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={80}
                                    style={{
                                        height: '5px',
                                        backgroundColor: 'var(--wz-primary)',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">80%</span>
                        </div>

                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12  mt-3">
                        <h6 className="syne">Website Development</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={90}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={90}
                                    style={{
                                        height: '5px',
                                        backgroundColor: 'var(--wz-primary)',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">90%</span>
                        </div>
                    </div>
                  

                    <div className="col-lg-3 col-md-6 col-sm-12  mt-3">
                        <h6 className="syne">App Development</h6>
                        <div className="mt-3 d-flex align-items-center position-relative">
                            <ProgressBar
                                now={90}
                                style={{
                                    flex: 1,
                                    height: '5px',
                                    backgroundColor: '#f1f1f1',
                                    borderRadius: '5px'
                                }}
                            >
                                <ProgressBar
                                    now={90}
                                    style={{
                                        height: '5px',
                                        backgroundColor: 'var(--wz-primary)',
                                        borderRadius: '5px'
                                    }}
                                />
                            </ProgressBar>
                            <span className="text-muted ms-2">90%</span>
                        </div>
                    </div>

                    <div className="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-center align-items-center   mt-3">
                    <div className="syne learn-more">
                                 More <Link to='/services'> <span className="arrow-icon ms-3"><FaArrowRightLong /></span></Link>
                            </div>
                    </div>

                </div>

               
            </div>
        </>
    )
}

export default Skills
