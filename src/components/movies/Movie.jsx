import React, { useState } from 'react';
import './style.css';

const Movie = () => {
  const movies = [ 
    {
      title: 'Peaky Blinders',
      img: '/assets/movies/img/peaky blinders.jpg',
      video: '/assets/movies/video/peaky blinders.webm',
      description: 'Một thủ lĩnh tàn nhẫn đứng đầu băng đảng Peaky Blinders, quyết tâm xây dựng đế chế quyền lực giữa lòng nước Anh hậu chiến.',
      meta: {
        label: 'A Netflix Original Film',
        genres: ['Hành động', 'Tội phạm'],
        year: 2013,
        imdb: 8.7,
      },
    },
    {
      title: 'The Void',
      img: '/assets/movies/img/the void.jpg',
      video: '/assets/movies/video/the void.mp4',
      description: 'Một cảnh sát đưa người bị thương đến bệnh viện nông thôn, nơi họ bị bao vây bởi những kẻ cuồng tín mặc áo choàng và đối mặt với những sinh vật kinh hoàng từ chiều không gian khác.',
      meta: {
        label: 'Phim kinh dị độc lập',
        genres: ['Kinh dị', 'Siêu nhiên'],
        year: 2016,
        imdb: 5.9,
      },
    },
    {
      title: 'The Substance',
      img: '/assets/movies/img/the substance.png',
      video: '/assets/movies/video/the substance.mp4',
      description: 'Một nữ ngôi sao dùng loại thuốc tạo ra bản thể trẻ trung của mình, nhưng cái giá phải trả là sự xung đột và kinh hoàng.',
      meta: {
        label: 'Body Horror Thriller',
        genres: ['Kinh dị', 'Châm biếm xã hội'],
        year: 2024,
        imdb: 7,
      },
    },
    {
      title: 'Under The Skin',
      img: '/assets/movies/img/under the skin.jpg',
      video: '/assets/movies/video/under the skin.mp4',
      description: 'Một câu chuyện kỳ bí về sự tồn tại và bản chất con người.',
      meta: {
        label: 'Sci-Fi Masterpiece',
        genres: ['Khoa học viễn tưởng', 'Kinh dị'],
        year: 2014,
        imdb: 6.3,
      },
      
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
    },
    {
      title: 'The Medium',
      img: '/assets/movies/img/the medium.jpg',
      video: '/assets/movies/video/the medium.mp4',
      description: 'Một bà đồng tại Thái Lan và đoàn làm phim tài liệu đối mặt với thế lực tà ác khi cháu gái bà có biểu hiện bị quỷ ám.',
      meta: {
        label: 'Thai Horror Film',
        genres: ['Kinh dị', 'Giả tài liệu'],
        year: 2021,
        imdb: 6.5,
      },
    },
    
    {
      title: 'The Hunger Games',
      img: '/assets/movies/img/hunger games.jpg',
      video: '/assets/movies/video/hunger games.mp4',
      description: 'Katniss Everdeen tình nguyện tham gia Đấu Trường Sinh Tử để cứu em gái, trở thành biểu tượng cuộc nổi dậy tại quốc gia Panem hậu tận thế.',
      meta: {
        label: 'Lionsgate Film',
        genres: ['Hành động', 'Khoa học viễn tưởng'],
        year: 2012,
        imdb: 7.2,
      },
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
          <button className="btn btn-watch">▶ Xem</button>
          <button className="btn btn-rate">Đánh giá</button>
          <button className="btn btn-mute" onClick={toggleMute}>
            {isMuted ? '🔇' : '🔊'}
          </button>
        </div>
      </div>

      {/* Popular section */}
      <div className="popular-section">
        <h2 className="popular-title">Danh Sách Phim Có Restream</h2>
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