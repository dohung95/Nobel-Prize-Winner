import React from 'react'
import AOS from "aos"
import "aos/dist/aos.css"
import { useEffect } from "react"
import { Container } from 'react-bootstrap';
import NavBar from './Navbar'
import Footer from './Footer'

import h2 from "../Img/Van/slide/vochong.jpg"
import h3 from "../Img/Van/slide/vochongdapxe.png"
import h4 from "../Img/Van/slide/gia-dinh.jpg"
//import h5 from "../Img/Van/slide/bamecon-nho.jpg"
import h6 from "../Img/Van/slide/bamecon1.jpg"
import h7 from "../Img/Van/slide/chiem.png"
import h8 from "../Img/Van/slide/bamecon.jpg"
import h9 from "../Img/Van/slide/irene-marie.jpg"
import h10 from "../Img/Van/slide/congaidaulong.png"
import h11 from "../Img/Van/slide/nghiencuu.jpg"
import h12 from "../Img/Van/slide/xechupdidong1915.jpg"
import h13 from "../Img/Van/slide/fiveyears.png"
import h14 from "../Img/Van/slide/con-irence.jpg"
import h15 from "../Img/Van/slide/gia.png"
import h16 from "../Img/Van/form ngang/birth_place.png"
import tivi from "../Img/Van/tivi.png" //<link href="https: //cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">
import '../Css/Van/tivi.css'
import '../Css/Van/Reference.css'
import '../Css/Van/slide_left_right.css'
const References = () => {
    const images_run = [h7, h8, h9, h10, h11, h14, h4];

    useEffect(() => {
        AOS.init({
            duration: 1500, // thời gian hiệu ứng chạy, tính bằng ms
        });
    }, []);
    return (
        <>

            <div className='background_refer' >




                <div >
                    <Container className='khoibio_Van_refer 'alignItem='center'>

                        


                        <div className="container Van_trang_refer">
                            
                            <div className=' Van_slide_lefttoright '>
                                {images_run.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image }
                                        alt=""
                                        className="animated-img img-fluid"
                                        style={{ animationDelay: `${index * 0.5}s`, height:'90%'}} // Add animation delay for each image
                                    />
                                ))}
                                {/* dong text cam on */}
                                <div className='thank-you-text'>
                                    Chào mừng các bạn quay về lịch sử để tìm hiểu sâu hơn về người phụ nữ vĩ đại-MarieCurie.
                                    <h1> Wellcom ! THU VIEN MARIE CURIE</h1>
                                </div>

                            </div>
                        </div>

                        <div className="container Van_trang_refer">
                            slide này làgioi thieu sach ve bà. mỏw mọt hinh ra là hiện text so tuọc ve sach do! CẦN MẤY BẠN HỖ TRỢ

                            <div className='container slide_marie'>
                                <img src={h3} alt="" className="col-4" />
                                <img src={h6} alt="" className="col-4" />
                                <img src={h13} alt="" className="col-4" />

                                {/* <img src={h15} alt="" className="col-4" /> */}
                                <img src={h16} alt="" className="col-4" />
                                <img src={h11} alt="" className="col-4" />
                                <img src={h12} alt="" className="col-4" />
                            </div>

                        </div>


                        <h1>Youtube</h1>

                        <div class="box-hover" >
                            <img src={tivi} alt="thu cam on" />
                            <div href={h2} class="nut1" target="_top">
                                Xin chân thành cảm ơn thầy cô, bạn bè, ban giám khảo và tất cả những người đã quan tâm theo dõi!

                                Team chúng tôi chân thành cảm ơn những tác giả đã để nội dung công khai cho team lấy làm tư liệu nghiên cứu học tập.
                            </div>
                            <div href={h2} class="nut2" target="">
                                Nguồn: (© Copyright 2017 Marie Curie Hanoi School. All right reserved. - ® Trường Marie Curie giữ bản quyền nội dung trên website này.)
                                Nguồn: vi.wikipedia.org, kenh14.vn, nghiencuuquocte.org, alphabooks.vn, zingnews.vn
                            </div>
                        </div>




                    </Container>
                </div >

                <div className="container mt-4">
                    <h3 className="text-center mb-4" data-aos="fade-up">Some Videos About Marie Curie</h3>
                    <div className="row">
                        <div className="col-md-6 mb-4 d-flex justify-content-center" data-aos="fade-right">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/m1HxOaEawBQ?si=55oT_q3OvJEGINUK"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                        <div className="col-md-6 mb-4 d-flex justify-content-center" data-aos="fade-left">
                            <iframe
                                width="560"
                                height="315"
                                src="https://www.youtube.com/embed/w7RoFj3q4_U?si=FB9ZWzC-ZcU-tU0l"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </div>
                </div>

            </div >
        </>
    );
}

export default References;