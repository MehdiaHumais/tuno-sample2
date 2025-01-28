import React, { useState } from 'react';
import Services from '../../api/service'
import ServiceSingle from '../ServiceSingle';

const ServiceSection = (props) => {

    const [open, setOpen] = React.useState(false);

    function handleClose() {
        setOpen(false);
    }

    const [state, setState] = useState({
    })

    const handleClickOpen = (item) => {
        setOpen(true);
        setState(item)
    }

    return (


        <div className="tp-service-area section-padding">
            <div className="container">
                <div className="tp-section-title">
                    <span>Check services</span>
                    <h2>My best services</h2>
                </div>
                <div className="tp-service-wrap">
                    <div className="row align-items-center">
                        {Services.slice(0, 4).map((service, srv) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={srv}>
                                <div className="tp-service-item">
                                    <i className={`fi ${service.icon}`}></i>
                                    <h2 onClick={() => handleClickOpen(service)}>{service.sTitle}</h2>
                                    <p>Website design involves creating visually appealing, user-friendly layouts that ensure functionality and enhance user experience.</p>
                                    <button className="read-more" onClick={() => handleClickOpen(service)}>
                                        <i className="fi flaticon-right-arrow"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="tp-section-title">
                    <h2>Mobile App Design</h2>
                </div>
                <div className="tp-service-wrap">
                    <div className="row align-items-center">
                        {Services.slice(0, 4).map((service, srv) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={srv}>
                                <div className="tp-service-item">
                                    <i className={`fi ${service.icon}`}></i>
                                    <h2 onClick={() => handleClickOpen(service)}>{service.sTitle}</h2>
                                    <p>Mobile app design focuses on intuitive interfaces, responsive layouts, and seamless navigation for enhanced user engagement.</p>
                                    <button className="read-more" onClick={() => handleClickOpen(service)}>
                                        <i className="fi flaticon-right-arrow"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tp-section-title">
                    <h2>Brand Identity</h2>
                </div>
                <div className="tp-service-wrap">
                    <div className="row align-items-center">
                        {Services.slice(0, 4).map((service, srv) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={srv}>
                                <div className="tp-service-item">
                                    <i className={`fi ${service.icon}`}></i>
                                    <h2 onClick={() => handleClickOpen(service)}>{service.sTitle}</h2>
                                    <p>Brand identity encompasses logos, colors, and messaging, creating a cohesive image representing a business's values.</p>
                                    <button className="read-more" onClick={() => handleClickOpen(service)}>
                                        <i className="fi flaticon-right-arrow"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="tp-section-title">
                    <h2>Market Analysis</h2>
                </div>
                <div className="tp-service-wrap">
                    <div className="row align-items-center">
                        {Services.slice(0, 4).map((service, srv) => (
                            <div className="col col-lg-3 col-md-6 col-12" key={srv}>
                                <div className="tp-service-item">
                                    <i className={`fi ${service.icon}`}></i>
                                    <h2 onClick={() => handleClickOpen(service)}>{service.sTitle}</h2>
                                    <p>Market analysis involves researching trends, competitors, and consumer behavior to identify opportunities and inform strategies.</p>
                                    <button className="read-more" onClick={() => handleClickOpen(service)}>
                                        <i className="fi flaticon-right-arrow"></i>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="visible-rotate-text">
                <h1>Services</h1>
            </div>
            <ServiceSingle open={open} onClose={handleClose} title={state.sTitle} dImg={state.sImgS} sImg1={state.ssImg1} sImg2={state.ssImg2} />
        </div>
    );
}

export default ServiceSection;