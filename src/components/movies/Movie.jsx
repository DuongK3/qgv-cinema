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
        label: 'Chất Lượng 1080p',
        genres: ['Kinh dị', 'Hồi hợp'],
        year: 2008,
        imdb: 6.0,
      },
      link: 'https://drive.google.com/file/d/1NSM2NvIDvCUUWdl8AxqFV1Dw2sKL4wpW/view?usp=sharing',
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