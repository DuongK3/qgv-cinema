import { useState } from "react";
import "./css/restreammovies.css"

const moviesData = [
  
  {
    id:1,
    title: "Coming Soon",
    description: "Một nhóm bạn trẻ tìm kiếm một bộ phim kinh dị trong một rạp chiếu phim cũ, nhưng họ không biết rằng họ đang bị theo dõi bởi một kẻ giết người bí ẩn.",
    imdb: 6.0,
    image: "/assets/movies/img/coming soon.jpg",
    link: "https://drive.google.com/file/d/1NSM2NvIDvCUUWdl8AxqFV1Dw2sKL4wpW/view?usp=sharing"
  },

  
  
  // Thêm nhiều phim khác...
];

const itemsPerPage = 4;

export default function RestreamMovies() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const filteredMovies = moviesData.filter(movie =>
    movie.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredMovies.length / itemsPerPage);
  const paginatedMovies = filteredMovies.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0); // Cuộn lên đầu trang khi đổi trang
  };

  return (
    <div className="movie-container">
      <h1 className="restream-title">Danh Sách Các Phim Có Restream</h1>

      <div className="search-container">
        <div className="search-input-wrapper">
            <input
            type="text"
            placeholder="Tìm tên phim..."
            value={searchTerm}
            onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(1);
            }}
            />
            <span className="search-icon">🔍</span>
        </div>
        </div>

        <div className="movie-grid">
        {paginatedMovies.map((movie) => (
            <div className="movie-card" key={movie.id}>
            <img src={movie.image} alt={movie.title} className="movie-poster" />
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.description}</p>
                <div className="movie-actions">
                  <span className="imdb-score">
                    <span className="imdb-label">IMDb</span> {movie.imdb}
                  </span>
                  <a
                    href={movie.link}
                    className="watch-button"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Xem Phim
                  </a>
                </div>
            </div>
            </div>
        ))}
        </div>

      <div className="pagination">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx + 1}
            className={currentPage === idx + 1 ? "page-button active" : "page-button"}
            onClick={() => handlePageChange(idx + 1)}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
