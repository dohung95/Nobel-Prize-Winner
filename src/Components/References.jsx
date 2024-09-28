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
import h5 from "../Img/Van/slide/bamecon-nho.jpg"
import h6 from "../Img/Van/slide/bamecon1.jpg"
import h7 from "../Img/Van/slide/chiem.png"
import h8 from "../Img/Van/slide/bamecon.jpg"
import h9 from "../Img/Van/slide/irene-marie.jpg"
import h10 from "../Img/Van/slide/congaidaulong.png"
import h11 from "../Img/Van/slide/nghiencuu.jpg"
import h12 from "../Img/Van/slide/xechupdidong1915.jpg"
import h13 from "../Img/Van/slide/nho.png"
import h14 from "../Img/Van/slide/con-irence.jpg"
import h15 from "../Img/Van/slide/gia.png"

//import tivi from "../Img/Van/tivi.png"<link href="https: //cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css" rel="stylesheet">

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
                <h1>Galary</h1>

                <h1>THƯ NGỎ (sticker) <p> hình tivi- hover ra khối div này</p></h1>

                <div style={{ padding: '30px' }}>
                    <Container className='khoibio_Van_refer ' style={{ padding: "30px" }}>

                        <div className="container Van_trang_refer">
                            <div className="row align-items-center">
                                <div className="col-md-8" data-aos="fade-right">
                                    <span className='chuhoa' style={{ textAlign: "justify", fontSize: "1.5rem", }}>

                                        <p> Chào mừng các bạn quay về lịch sử để tìm hiểu sâu hơn về người phụ nữ vĩ đại-MarieCurie.
                                            Team chúng tôi chân thành cảm ơn những tác giả đã để nội dung công khai cho team lấy làm tư liệu nghiên cứu học tập.
                                        </p>
                                        <p> Nguồn: (© Copyright 2017 Marie Curie Hanoi School. All right reserved. - ® Trường Marie Curie giữ bản quyền nội dung trên website này.)
                                            Nguồn: vi.wikipedia.org, kenh14.vn, nghiencuuquocte.org, alphabooks.vn, zingnews.vn </p>

                                    </span>
                                </div>
                                <div className="col-md-4" data-aos="fade-left">
                                    <figure style={{ textAlign: "center" }}>
                                        <img src={require("../Img/Van/tivi.png")} className="img-fluid" style={{ width: "auto", height: "250px" }} />
                                        <figcaption style={{ textAlign: "center", marginTop: "10px" }}>(Thư ngỏ)</figcaption>
                                    </figure>
                                </div>
                            </div>
                        </div>


                        <div className="container Van_trang_refer">
                            slide này là gpt chạy hình từ trái qua phải rôi mât. từng bị lỗi là do khai bao bien không đúng.
                            Ý nghĩa slide là quảng cáo về một đối tuọng, khiến người xem chú ý: cái gì chạy qua rồi mất tiêu. click vô xem thử.
                            theo thử nghiệm, 1slide là 4hinh
                            <div className='container Van2 '>
                                {images_run.map((image, index) => (
                                    <img
                                        key={index}
                                        src={image}
                                        alt=""
                                        className="animated-img"
                                        style={{ animationDelay: `${index * 0.5}s` }} // Add animation delay for each image
                                    />
                                ))}
                            </div>
                        </div>

                        <div className="container Van_trang_refer">
                            slide này là thước phim cuộc đời bà.
                            <div className="container Van_slide1">
                                <div className="gallery " >
                                    <img src={h3} alt="" className="col-4" />
                                    <img src={h6} alt="" className="col-4" />
                                    <img src={h13} alt="" className="col-4" />

                                    <img src={h15} alt="" className="col-4" />
                                    <img src={h5} alt="" className="col-4" />
                                    <img src={h11} alt="" className="col-4" />
                                    <img src={h12} alt="" className="col-4" />
                                </div>
                            </div>
                        </div>


                        <h1>Youtube</h1>

                    </Container>
                </div >
            </div >
        </>
    );
}

export default References;