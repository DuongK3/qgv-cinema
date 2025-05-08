import React from 'react'
import { Link } from 'react-router-dom'
import './custom.css'

function Header() {
  return (
    <div>
        <section id="header">
        <nav className="navbar navbar-expand-md navbar-light p-0 .bg_brow" id="navbar_sticky">
        <div className="container-xl">
            <Link className="p-0 navbar-brand" to="/">
                <img src="assets/img/qgvlogo.png" alt="QGV Logo" height="70" />
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-0 ms-auto">
                <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Trang Chủ</Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/404">Về QGV</Link>
                </li>
                
                <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="/404" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Phim
                </Link>
                <ul className="dropdown-menu drop_1" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/404">Danh Sách Phim Đã Chiếu </Link></li>
                    <li><Link className="dropdown-item border-0" to="/404">Danh Sách Phim Có Restream</Link></li>
                </ul>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/404">Đánh Giá</Link>
                </li>
                
                <li className="nav-item">
                <Link className="nav-link" to="/404">Đăng Nhập</Link>
                </li>

                <li className="nav-item dropdown">

                </li>
            </ul>
            </div>
        </div>
        </nav>
        </section>
    </div>
  )
}

export default Header