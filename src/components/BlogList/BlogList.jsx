import React from "react"
import "./BlogList.scss"

const BlogList = () => {
  return (
    <section className="blog-list__container">
      <article className="blog-list__article">
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit adin infn
          dinfn.
        </h3>
        <p>
          {" "}
          Debitis provident pariatur deleniti ex ad, excepturi rem adipisci unde
          iusto similique. Blanditiis, velit beatae? Accusantium doloremque
          adipisci{" "}
          <span>
            {" "}
            ...
            <a href="/#linktoarticle">Read article</a>
          </span>
        </p>
        <p className="blog-list__date">May 13, 2020</p>
      </article>
      <article className="blog-list__article">
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit adin infn
          dinfn.
        </h3>
        <p>
          {" "}
          Debitis provident pariatur deleniti ex ad, excepturi rem adipisci unde
          iusto similique. Blanditiis, velit beatae? Accusantium doloremque
          adipisci{" "}
          <span>
            {" "}
            ...
            <a href="/#linktoarticle">Read article</a>
          </span>
        </p>
        <p className="blog-list__date">May 13, 2020</p>
      </article>
      <article className="blog-list__article">
        <h3>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit adin infn
          dinfn.
        </h3>
        <p>
          {" "}
          Debitis provident pariatur deleniti ex ad, excepturi rem adipisci unde
          iusto similique. Blanditiis, velit beatae? Accusantium doloremque
          adipisci{" "}
          <span>
            {" "}
            ...
            <a href="/#linktoarticle">Read article</a>
          </span>
        </p>
        <p className="blog-list__date">May 13, 2020</p>
      </article>

      <div className="more-articles-box">
        <button>See More</button>
      </div>
    </section>
  )
}

export default BlogList
