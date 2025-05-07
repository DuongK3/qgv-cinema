import React, { useState } from 'react';

import Movie from '../components/movies/Movie';
import './css/home.css';

const slides = [
  '/assets/img/background1.jpg',
  '/assets/img/background2.jpg',
];

function Home() {
  const [current, setCurrent] = useState(0);
  const [prev, setPrev] = useState(null);

  const nextSlide = () => {
    setPrev(current);
    setCurrent((current + 1) % slides.length);
  };

  const prevSlide = () => {
    setPrev(current);
    setCurrent((current - 1 + slides.length) % slides.length);
  };

  return (
    <div>
      <section id="center" className="center_home">
        <div className="custom-carousel">
          {slides.map((img, index) => (
            <div
              className={`custom-slide ${
                index === current ? 'active' : index === prev ? 'prev' : ''
              }`}
              key={index}
            >
              <img src={img} alt={`Slide ${index + 1}`} className="custom-slide-img" />
            </div>
          ))}
          <button className="custom-prev" onClick={prevSlide}>&#10094;</button>
          <button className="custom-next" onClick={nextSlide}>&#10095;</button>
          <div className="custom-indicators">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setPrev(current);
                  setCurrent(index);
                }}
                className={index === current ? 'active' : ''}
              ></button>
            ))}
          </div>
        </div>
      </section>

      <section id="about_h" className="p_3">
        <div className="container-xl">
            <div className="about_h1 row">
            <div className="col-md-6">
            <div className="about_h1l">
                <h5 className="col_orange text-uppercase">QGV Cinema</h5>
            <h1 className="font_50  mb-3">ĐƯỢC ĐÁNH GIÁ LÀ RẠP UY TÍN NHẤT NIMO TV</h1>
            <p style={{ textAlign: 'justify' }}>
              QGV Cinema là rạp phim số 1 trên nền tảng livestream Nimo TV, nơi bạn có thể thưởng thức những bộ phim có điểm IMDb trên 6.0 với chất lượng hình ảnh và âm thanh sắc nét, hoàn toàn miễn phí. 
              <br /> Chúng tôi không chỉ chiếu phim — chúng tôi tạo ra trải nghiệm. 
            </p>
            <p>
              🎬 <strong>Thời gian chiếu phim: </strong>
                  Hàng ngày, từ 15:30 đến 17:30<br />
              📍 <strong>Trực tiếp trên nền tảng Nimo TV</strong>
            </p>
            <h6 className="mb-0 mt-4"><a className="button_1" href="https://www.nimo.tv/sbtcviolet">Trải Nghiệm Ngay!</a></h6>
            </div>
            </div>
            <div className="col-md-6">
            <div className="about_h1r">
                <div className="grid clearfix">
                        <figure className="effect-jazz mb-0">
                            <img src="assets/img/pic1.png" className="w-100" alt="abc"/>
                        </figure>
                    </div>
            </div>
            </div>
            </div>
        </div>
        </section>

        <section id="spec">
        <div className="spec_m bg_back pt-5 pb-5">
          <div className="container-xl">
            <div className="spec_1 row">
          <div className="col-md-3 col-sm-6">
            <div className="spec_1l text-center">
                <h1 className="text-white font_50">73700+</h1>
              <h6 className="col_brow mb-0 text-uppercase">Người Theo Dỗi</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="spec_1l text-center">
                <h1 className="text-white font_50">4700+</h1>
              <h6 className="col_brow mb-0 text-uppercase">Thành Viên</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="spec_1l text-center">
                <h1 className="text-white font_50">0</h1>
              <h6 className="col_brow mb-0 text-uppercase">Tài Khoản Thành Viên</h6>
            </div>
          </div>
          <div className="col-md-3 col-sm-6">
            <div className="spec_1l text-center">
                <h1 className="text-white font_50">100+</h1>
              <h6 className="col_brow mb-0 text-uppercase">Phim Đã Chiếu</h6>
            </div>
          </div>
          </div>
        </div>
        </div>
        </section>

        <section id="serv" className="p_3 bg-dark">
        <div className="container-xl">
            <div className="award_1 row text-center mb-4">
                <div className="col-md-12">
                    <h5 className="col_brow">Tại Sao Bạn Nên Chọn QGV?</h5>
                    <h1 className="mt-3 text-white mb-3">Khám Phá Những Lợi Ích Khi Bạn Chọn QGV Cinema</h1>
                    <p className="text-white-50 mb-0">QGV Cinema mang đến cho bạn những trải nghiệm điện ảnh tuyệt vời, với chất lượng hình ảnh, âm thanh sắc nét, và không gian giải trí đỉnh cao. Chúng tôi luôn cam kết mang lại những bộ phim chất lượng và dịch vụ xuất sắc.</p>
                </div>
            </div>
            <div className="serv_1 row">
                <div className="col-md-3 col-sm-6">
                <div className="serv_1i text-center">
                        <span className="col_brow font_50 lh-1 bold-text">18+</span>
                        <h5 className="text-white mt-3 mb-3">Cảnh Nóng</h5>
                        <p className="mb-0 text-white-50">Từ hành động, anime đến tâm lý, tại QGV Cinema, mọi thể loại phim đều không thiếu những cảnh nóng đặc sắc, mang đến trải nghiệm điện ảnh đầy cảm xúc cho khán giả</p>
                    </div>
                    
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="serv_1i text-center">
                        <span className="col_brow font_50 lh-1"><i className="fa fa-star-o"></i></span>
                        <h5 className="text-white mt-3 mb-3">Đánh Giá Hàng Đầu</h5>
                        <p className="mb-0 text-white-50">QGV Cinema luôn nằm trong top rạp phim được yêu thích nhất trên Nimo TV nhờ chất lượng phim ổn định, đa dạng thể loại</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="serv_1i text-center">
                      <span className="col_brow font_50 lh-1 bold-text">4K</span>
                        <h5 className="text-white mt-3 mb-3">Chất Lượng Hình Ảnh</h5>
                        <p className="mb-0 text-white-50">QGV Cinema cam kết mang đến trải nghiệm hình ảnh sắc nét với độ phân giải cao, màu sắc sống động và độ tương phản rõ ràng, giúp người xem tận hưởng từng khung hình một cách trọn vẹn nhất</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="serv_1i text-center">
                        <span className="col_brow font_50 lh-1"><i className="fa fa-film"></i></span>
                        <h5 className="text-white mt-3 mb-3">Trải Nghiệm Xem Phim</h5>
                        <p className="mb-0 text-white-50">QGV Cinema mang đến không gian giải trí trực tuyến mượt mà, dễ sử dụng và không giật lag, giúp bạn thưởng thức phim liền mạch với cảm giác như đang ở rạp thật</p>
                    </div>
                </div>
            </div>
            <div className="serv_1 row mt-4">
                <div className="col-md-3 col-sm-6">
                    <div className="serv_1i text-center">
                        <span className="col_brow font_50 lh-1"><i className="fa fa-check-circle"></i></span>
                        <h5 className="text-white mt-3 mb-3">Chứng Nhận Từ Nimo</h5>
                        <p className="mb-0 text-white-50">QGV Cinema là rạp phim duy nhất trên Nimo TV được cho phép công chiếu các bộ phim có nội dung trưởng thành, đảm bảo trải nghiệm đầy đủ và không bị gián đoạn</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="serv_1i text-center">
                        <span className="col_brow font_50 lh-1"><i className="fa fa-thumbs-up"></i></span>
                        <h5 className="text-white mt-3 mb-3">IMDb 6.0+</h5>
                        <p className="mb-0 text-white-50">Chúng tôi chỉ lựa chọn những bộ phim đạt điểm đánh giá từ 6.0 trên IMDb trở lên, đảm bảo chất lượng nội dung và trải nghiệm xem phim xứng đáng với thời gian của bạn</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                    <div className="serv_1i text-center">
                        <span className="col_brow font_50 lh-1"><i className="fa fa-pause-circle"></i></span>
                        <h5 className="text-white mt-3 mb-3">Không Quảng Cáo</h5>
                        <p className="mb-0 text-white-50">Tại QGV Cinema, chúng tôi mang đến trải nghiệm xem phim mà không bị làm phiền bởi quảng cáo. Không có quảng cáo chen ngang, chỉ có những bộ phim tuyệt vời, sẵn sàng để bạn tận hưởng</p>
                    </div>
                </div>
                <div className="col-md-3 col-sm-6">
                <div className="serv_1i text-center">
                        <span className="col_brow font_50 lh-1"><i className="fa fa-ban"></i></span>
                        <h5 className="text-white mt-3 mb-3">Không Spoil</h5>
                        <p className="mb-0 text-white-50">Chúng tôi tôn trọng trải nghiệm của bạn. Tại QGV Cinema, không có nơi cho những câu chuyện bị tiết lộ trước. Hãy đến và thưởng thức từng bất ngờ trong mỗi bộ phim mà không lo bị spoil</p>
                    </div>
                </div>
            </div>
        </div>
    </section>


      <Movie />

      <section id="testim" className="p_3 carousel_p">
      <div className="container-xl">
          <div className="award_1 row text-center mb-4">
        <div className="col-md-12">
            <h5 className="col_orange">Đánh Giá Tiêu Biểu</h5>
          <h1 className="mt-3 mb-0" >Người Xem Đánh Giá Thế Nào Về QGV Cinema</h1>
        </div>
        </div>
      <div className="testim_1 row">
          <div id="carouselExampleCaptions1" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="0" className="active" aria-label="Slide 1" aria-current="true"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions1" data-bs-slide-to="1" aria-label="Slide 2" className=""></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="testim_1i row">
            <div className="col-md-4">
          <div className="testim_1i1 bg_light p-4">
          <span className="col_orange font_14">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            
          </span>
          <div className="testim_1i1i mt-3">
            <span><img src="/assets/img/cartoon-cheese-1.png" alt="abc" className="rounded-circle me-3 float-start"/></span>
            <h6 className="mb-0 fw-bold text-uppercase lh-base"> Phô Mai <br/> <span className="col_blue font_14 text-capitalize  fw-normal">Thành Viên Cấp 10</span></h6>
            </div>
            <p className="mb-0 mt-3" style={{ textAlign: 'justify' }} >IMDb trên 6, nhưng độ nóng phải trên 9.</p>
          </div>  
          </div>
          <div className="col-md-4">
          <div className="testim_1i1 bg_light p-4">
          <span className="col_orange font_14">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
          </span>
          <div className="testim_1i1i mt-3">
            <span><img src="/assets/img/pushkin.jpg" alt="abc" className="rounded-circle me-3 float-start"/></span>
            <h6 className="mb-0 fw-bold text-uppercase lh-base"> Pút Kin <br/> <span className="col_blue font_14 text-capitalize fw-normal">Thành Viên Cấp 9</span></h6>
            </div>
            <p className="mb-0 mt-3" style={{ textAlign: 'justify' }} >Vào QGV xem anime, ra khỏi rạp như vừa coi phim 18+. Cảm ơn QGV.</p>
          </div>  
          </div>
          <div className="col-md-4">
          <div className="testim_1i1 bg_light p-4">
          <span className="col_orange font_14">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
          </span>
          <div className="testim_1i1i mt-3">
            <span><img src="/assets/img/darlinq.jpg" alt="abc" className="rounded-circle me-3 float-start"/></span>
            <h6 className="mb-0 fw-bold text-uppercase lh-base"> darlinq <br/> <span className="col_blue font_14 text-capitalize fw-normal">Thành Viên Cấp 7</span></h6>
            </div>
            <p className="mb-0 mt-3 text-justify" style={{ textAlign: 'justify' }} >Rạp duy nhất khiến tôi phải canh giờ xem cảnh nóng. Cảm ơn QGV vì luôn tâm lý với người xem.</p>
          </div>  
          </div>
          </div>
          </div>
          <div className="carousel-item">
              <div className="testim_1i row">
              <div className="col-md-4">
          <div className="testim_1i1 bg_light p-4">
          <span className="col_orange font_14">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            
          </span>
          <div className="testim_1i1i mt-3">
            <span><img src="/assets/img/brb.jpg" alt="abc" className="rounded-circle me-3 float-start"/></span>
            <h6 className="mb-0 fw-bold text-uppercase lh-base"> BRB <br/> <span className="col_blue font_14 text-capitalize  fw-normal">Thành Viên Cấp 10</span></h6>
            </div>
            <p className="mb-0 mt-3 " style={{ textAlign: 'justify' }} >Chúc mừng rạp đạt danh hiệu Rạp Phim Top 1 Nimo.</p>
          </div>  
          </div>
          <div className="col-md-4">
          <div className="testim_1i1 bg_light p-4">
          <span className="col_orange font_14">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
          </span>
          <div className="testim_1i1i mt-3">
            <span><img src="/assets/img/thy.jpg" alt="abc" className="rounded-circle me-3 float-start"/></span>
            <h6 className="mb-0 fw-bold text-uppercase lh-base"> Vy Vy <br/> <span className="col_blue font_14 text-capitalize fw-normal">Thành Viên Cấp 9</span></h6>
            </div>
            <p className="mb-0 mt-3" style={{ textAlign: 'justify' }}>
              BÚUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU <br/> UUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUUU
            </p>
          </div>  
          </div>
          <div className="col-md-4">
          <div className="testim_1i1 bg_light p-4">
          <span className="col_orange font_14">
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star"></i>
            <i className="fa fa-star-half-o"></i>
          </span>
          <div className="testim_1i1i mt-3">
            <span><img src="/assets/img/arya.png" alt="abc" className="rounded-circle me-3 float-start"/></span>
            <h6 className="mb-0 fw-bold text-uppercase lh-base"> Arya <br/> <span className="col_blue font_14 text-capitalize fw-normal">Thành Viên Cấp 10</span></h6>
            </div>
            <p className="mb-0 mt-3" style={{ textAlign: 'justify' }}>Tôi không nhớ tên phim, nhưng nhớ rõ từng cảnh nóng.</p>
          </div>  
          </div>
          </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      </section>
    </div>
  );
}

export default Home;