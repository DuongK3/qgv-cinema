import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div>
        <section id="footer">
        <div className="footer_m bg_backo p_3">
        <div className="container-xl">
            <div className="footer_1 row">
            <div className="col-md-3">
                <div className="footer_1i">
                <img src="assets/img/qgvlogo.png" alt="QGV Logo" height="70" />
                <p className="text-light mt-4">Cùng QGV Cinema tận hưởng những thước phim tuyệt vời và phút giây thư giãn trọn vẹn.</p>
                <ul className="social-network social-circle mb-0 mt-4">
                            <li><a href="https://www.facebook.com/share/g/1Kw1rbWNL8" className="icoFacebook" title="Facebook Rạp"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.qgvcinema@gmail.com" className="icoGoogle" title="Gmail"><i className="fa fa-google"></i></a></li>
                        </ul>
                </div>
            </div>
            <div className="col-md-3">
                <div className="footer_1i">
                <h5 className="col_light mb-4">Khám Phá Thêm</h5>
                <div className="row footer_1ism">
                <h6 className="fw-normal mt-2 col-md-12 col-6 font_14"><Link className="text-light" to="/404"><i className="fa fa-caret-right col_brow me-1 font_12 align-middle"></i> Thông Báo</Link></h6>
            <h6 className="fw-normal mt-2 col-md-12 col-6 font_14"><Link className="text-light" to="/404"><i className="fa fa-caret-right col_brow me-1 font_12 align-middle"></i> Tại Sao Chọn QGV</Link></h6>
            <h6 className="fw-normal mt-2 col-md-12 col-6 font_14"><Link className="text-light" to="/404"><i className="fa fa-caret-right col_brow me-1 font_12 align-middle"></i> Về QGV Cinema</Link></h6>
            <h6 className="fw-normal mt-2 col-md-12 col-6 mb-0 font_14"><Link className="text-light" to="/404"><i className="fa fa-caret-right col_brow me-1 font_12 align-middle"></i> Nội Quy</Link></h6>
            </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="footer_1i">
                <h5 className="col_light mb-4">Kết Nối Với QGV</h5>
                <div className="row footer_1ism">
            <h6 className="fw-normal col-md-12 col-6 font_14"><a className="text-light" href="https://www.facebook.com/share/g/1Kw1rbWNL8/"><i className="fa fa-caret-right col_brow me-1 font_12 align-middle"></i>  Nhóm FB 'Rạp QGV'</a></h6>
            <h6 className="fw-normal mt-2 col-md-12 col-6 font_14"><a className="text-light" href="https://www.nimo.tv/sbtcviolet"><i className="fa fa-caret-right col_brow me-1 font_12 align-middle"></i> Nimo TV - SBTC Violet</a></h6>
            <h6 className="fw-normal mt-2 col-md-12 col-6 font_14"><a className="text-light" href="https://www.facebook.com/profile.php?id=61572727165606"><i className="fa fa-caret-right col_brow me-1 font_12 align-middle"></i> Facebook Chủ Rạp</a></h6>
            </div>
                </div>
            </div>
            <div className="col-md-3">
                <div className="footer_1i">
                <h5 className="col_light mb-4">Liên Hệ</h5>
                <h6 className="font_14 text-light">Phố Cổ, Hà Nội</h6>
                <h6 className="font_14"><a className="text-light" href="https://mail.google.com/mail/?view=cm&fs=1&to=contact.qgvcinema@gmail.com">contact.qgvcinema@gmail.com</a></h6>
                <h6 className="mt-3 font_14 text-light">+84 0000 000</h6>
                <h6 className="mt-3 text-light font_14"><span className="text-white">Cả tuần:</span> 8:30 am - 10:00 pm</h6>
            
                </div>
            </div>
            </div>
            <div className="footer_2 row mt-4 text-center pt-4">
            <div className="col-md-12">
                <p className="mb-0 text-light">© 2025 QGV Cinema. All Rights Reserved | Design by <a className="col_brow fw-bold" href="https://www.facebook.com/profile.php?id=100022550032731">Duong Dinh Bao (darlinq)</a></p>
            </div>
            </div>
        </div>
        </div>
        </section>
    </div>
  )
}

export default Footer