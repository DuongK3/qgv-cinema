import React from 'react';
import './css/notfound.css';

function NotFound() {
  return (
    <div className="page-404-container">
      <div className="page-404-box">
        <h1 className="page-404-title">🚧 Đang Phát Triển 🚧</h1>
        <p className="page-404-message">
          Trang này hiện đang trong giai đoạn phát triển. Mình sẽ sớm hoàn thiện và ra mắt trong thời gian tới!
        </p>
        <p className="page-404-submessage">Cảm ơn mọi người đã ghé thăm! ❤️</p>
        <a href="/" className="page-404-button">Quay Lại Trang Chủ</a>
      </div>
    </div>
  );
}

export default NotFound; 