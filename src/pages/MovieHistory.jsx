import { useState } from "react";
import "./css/moviehistory.css"

const moviesData = [
  {
    id: 0,
    title: "Coming Soon",
    description: "Một nhóm bạn trẻ tìm kiếm một bộ phim kinh dị trong một rạp chiếu phim cũ, nhưng họ không biết rằng họ đang bị theo dõi bởi một kẻ giết người bí ẩn.",
    imdb: 6.0,
    image: "/assets/movies/img/coming soon.jpg"
  },
  {
    id: 1,
    title: "Peaky Blinders",
    description: "Một thủ lĩnh tàn nhẫn đứng đầu băng đảng Peaky Blinders, quyết tâm xây dựng đế chế quyền lực giữa lòng nước Anh hậu chiến.",
    imdb: 8.7,
    image: "/assets/movies/img/peaky blinders.jpg"
  },
  {
    id: 2,
    title: "The Void",
    description: "Một cảnh sát đưa người bị thương đến bệnh viện nông thôn, nơi họ bị bao vây bởi những kẻ cuồng tín mặc áo choàng và đối mặt với những sinh vật kinh hoàng từ chiều không gian khác.",
    imdb: 5.9,
    image: "/assets/movies/img/the void.jpg"
  },
  {
    id: 3,
    title: "The Substance",
    description: "Một nữ ngôi sao dùng loại thuốc tạo ra bản thể trẻ trung của mình, nhưng cái giá phải trả là sự xung đột và kinh hoàng.",
    imdb: 7,
    image: "/assets/movies/img/the substance.png"
  },
  {
    id: 4,
    title: "Under The Skin",
    description: "Một câu chuyện kỳ bí về sự tồn tại và bản chất con người.",
    imdb: 6.3,
    image: "/assets/movies/img/under the skin.jpg"
  },
  {
    id: 5,
    title: "Shangri-La Frontier",
    description: "Game thủ Rakuro khám phá thế giới game VR đỉnh cao Shangri-La Frontier, nơi kỹ năng và chiến lược được đặt lên hàng đầu.",
    imdb: 8.1,
    image: "/assets/movies/img/shangri-la frontier.jpg"
  },
  {
    id: 6,
    title: "Steins;Gate",
    description: "Một nhóm bạn phát hiện cách gửi tin nhắn về quá khứ, dẫn đến những hệ quả nghiêm trọng và hành trình du hành thời gian đầy kịch tính.",
    imdb: 8.8,
    image: "/assets/movies/img/Steins;Gate.jpg"
  },
  {
    id: 7,
    title: "The Medium",
    description: "Một bà đồng tại Thái Lan và đoàn làm phim tài liệu đối mặt với thế lực tà ác khi cháu gái bà có biểu hiện bị quỷ ám.",
    imdb: 6.5,
    image: "/assets/movies/img/the medium.jpg"
  },
  {
    id: 8,
    title: "The Hunger Games",
    description: "Katniss Everdeen tình nguyện tham gia Đấu Trường Sinh Tử để cứu em gái, trở thành biểu tượng cuộc nổi dậy tại quốc gia Panem hậu tận thế.",
    imdb: 7.2,
    image: "/assets/movies/img/hunger games.jpg"
  },
  // Thêm nhiều phim khác...
];

const itemsPerPage = 4;

export default function MovieHistory() {
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
      <h1 className="history-title">Danh Sách Các Phim Đã Chiếu</h1>

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
              <span className="imdb-score">
                <span className="imdb-label">IMDb</span> {movie.imdb}
            </span>
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
