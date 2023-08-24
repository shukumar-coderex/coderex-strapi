import css from 'styled-jsx/css';
export default css`

.related-posts h2 {
    color: #fff;
}

.single .blog-list {
    background: #00146b;
    position: relative;
    padding-top: 223px;
    padding-bottom: 88px;
}
.single .blog-list .overlay {
    overflow: hidden;
    top: -2px;
}
.single .blog-list .overlay:before {
    content: "";
    width: 100%;
    height: 0;
    position: absolute;
    top: 0;
    right: 0;
    border-top: 160px solid #ffffff;
    border-right: 2560px solid transparent;
}

.single .blog-list .section-title {
    margin-bottom: 65px;
}
.single .blog-list .section-title h2 {
    font-size: calc(30px + (70 - 30) * ((100vw - 320px) / (1920 - 320)));
    line-height: 1.1;
    letter-spacing: -2px;
    font-family: 'Circular Std Bold';
}
.single .blog-list .single-post {
    margin-bottom: 50px;
}
.single .blog-list .post-title h1 a {
    color: #fff;
}
.single .blog-list .post-title h1 a:hover {
    color: #00b4ff;
}



@media (max-width: 1300px) {
    .single .blog-list {
        padding-top: 200px;
    }

}
@media (max-width: 1199px) {
    .single .blog-list {
        padding-bottom: 55px;
    }
}
@media (max-width: 991px) {
    .single .blog-list {
        padding-top: 152px;
    }

}
@media (max-width: 767px) {
    .single .blog-list {
        padding-top: 110px;
    }
}


`;
