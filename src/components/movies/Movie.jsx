import React, { useState } from 'react';
import './style.css';

const Movie = () => {
  const movies = [ 
    {
      title: 'Coming Soon',
      img: '/assets/movies/img/coming soon.jpg',
      video: '/assets/movies/video/coming soon.mp4',
      description: 'Một nhóm bạn trẻ tìm kiếm một bộ phim kinh dị trong một rạp chiếu phim cũ, nhưng họ không biết rằng họ đang bị theo dõi bởi một kẻ giết người bí ẩn.',
      meta: {
        label: 'Full HD',
        genres: ['Kinh dị', 'Hồi hợp'],
        year: 2008,
        imdb: 6.0,
      },
      link: 'https://drive.google.com/file/d/1VHSaAtJow9A-5X_20K9QQQVzMKdLGvXS/view?usp=sharing',
    },
    {
      title: 'The Void',
      img: '/assets/movies/img/the void.jpg',
      video: '/assets/movies/video/the void.mp4',
      description: 'Một cảnh sát đưa người bị thương đến bệnh viện nông thôn, nơi họ bị bao vây bởi những kẻ cuồng tín mặc áo choàng và đối mặt với những sinh vật kinh hoàng từ chiều không gian khác.',
      meta: {
        label: 'Full HD',
        genres: ['Kinh dị', 'Siêu nhiên'],
        year: 2016,
        imdb: 5.9,
      },
      link: "https://drive.google.com/file/d/1vvZU8oA6g-T_LMFzyHSZ7L-VRtD5ULfw/view?usp=sharing",
    },
    {
      title: 'Under The Skin',
      img: '/assets/movies/img/under the skin.jpg',
      video: '/assets/movies/video/under the skin.mp4',
      description: 'Một câu chuyện kỳ bí về sự tồn tại và bản chất con người, theo chân một sinh vật ngoài hành tinh trong hình hài phụ nữ loài người, lang thang khắp Scotland để khám phá và dần hoà nhập vào thế giới con người mà nó từng xa lạ.',
      meta: {
        label: 'Full HD',
        genres: ['Khoa học viễn tưởng', 'Kinh dị'],
        year: 2014,
        imdb: 6.3,
      },
      link: null,
    },
    {
      title: 'The Usual Suspects',
      img: '/assets/movies/img/the usual suspects.jpg',
      video: '/assets/movies/video/the usual suspects.mp4',
      description: 'Một nhóm tội phạm bị bắt trong một vụ cướp, nhưng khi một trong số họ bị giết, những người còn lại phải tìm ra kẻ đứng sau vụ việc.',
      meta: {
        label: 'Full HD',
        genres: ['Hình sự', 'Tội phạm'],
        year: 1995,
        imdb: 8.5,
      },
      link: null,
    },
    {
      title: 'Shangri-La Frontier',
      img: '/assets/movies/img/shangri-la frontier.jpg',
      video: '/assets/movies/video/shangri.mp4',
      description: 'Game thủ Rakuro khám phá thế giới game VR đỉnh cao Shangri-La Frontier, nơi kỹ năng và chiến lược được đặt lên hàng đầu.',
      meta: {
        label: 'Anime Series',
        genres: ['Hành động', 'Phiêu lưu', 'Game'],
        year: 2023,
        imdb: 8.1,
      },
      link: null,
    },
    {
      title: 'Steins;Gate',
      img: '/assets/movies/img/Steins;Gate.jpg',
      video: '/assets/movies/video/steingate.mp4',
      description: 'Một nhóm bạn phát hiện cách gửi tin nhắn về quá khứ, dẫn đến những hệ quả nghiêm trọng và hành trình du hành thời gian đầy kịch tính.',
      meta: {
        label: 'White Fox Anime',
        genres: ['Khoa học viễn tưởng', 'Tâm lý'],
        year: 2011,
        imdb: 8.8,
      },
      link: null,
    },

  ];

  const [currentMovie, setCurrentMovie] = useState(movies[0]);
  const [isMuted, setIsMuted] = useState(true); // State để quản lý âm lượng

  const handleMovieClick = (movie) => {
    setCurrentMovie(movie);
  };

  const toggleMute = () => {
    setIsMuted(!isMuted);
  };

  return (
    <div>
      <div className="row text-center mb-4">
        <div className="col-md-12">
            <h5 className="col_orange">Xem Gì Tại QGV Cinema?</h5>
          <h1 className="mt-3 mb-0" >Tham Khảo Một Số Bộ Phim Tiêu Biểu</h1>
        </div>
      </div>


      <div className="movie-hero">
      {/* Background video */}
      <div className="movie-bg">
        <video
          key={currentMovie.video}
          autoPlay
          loop
          muted={isMuted} // Điều chỉnh âm lượng dựa trên state
          playsInline
          className="video-bg"
        >
          <source src={currentMovie.video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="movie-overlay"></div>
      </div>

      {/* Main content */}
      <div className="movie-content">
        <h1 className="movie-title">{currentMovie.title}</h1>
        <p className="movie-description">{currentMovie.description}</p>
        <div className="movie-meta">
          <span className="meta-label">{currentMovie.meta.label}</span>
          {currentMovie.meta.genres.map((genre, index) => (
            <span key={index} className={`meta-badge ${genre.toLowerCase()}`}>
              {genre}
            </span>
          ))}
          <span className="meta-year">{currentMovie.meta.year}</span>
          <span className="meta-badge yellow">IMDb</span>
          <span className="meta-score">{currentMovie.meta.imdb}</span>
        </div>
        <div className="movie-buttons">
          <a
            href={currentMovie.link}
            className="btn btn-watch"
            target="_blank"
            rel="noopener noreferrer"
          >
            ▶ Xem
          </a>
          <button className="btn btn-rate">Đánh giá</button>
          <button className="btn btn-mute" onClick={toggleMute}>
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>

      </div>

      {/* Popular section */}
      <div className="popular-section">
        <h2 className="popular-title">Một Số Bộ Phim Được Xem Gần Đây</h2>
        <div className="popular-list">
          {movies.map((movie, index) => ( 
            <div 
              key={index}
              className="popular-item"
              onClick={() => handleMovieClick(movie)}
            >
              <img src={movie.img} alt={movie.title} />
              <p>{movie.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
    
  );
};

export default Movie;