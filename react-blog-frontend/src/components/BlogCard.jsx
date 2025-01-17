import React from "react";
import "../style.css";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const BlogCard = ({ blog,blogs,setBlogs }) => {
  const showImage = (img) => {
    return img ? 'http://localhost:8000/uploads/blogsimages/' + img : "src/assets/download (1).png";
  };
  const deleteBlog = async (id) => {
    if (confirm("Are you sure you want to delete?")) {
      try {
        const res = await fetch(`http://127.0.0.1:8000/api/blogs/${id}`, {
          method: 'DELETE',
        });
        if (!res.ok) {
          throw new Error('Network response was not ok');
        }
        const newBlogs = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogs);
        toast("Blog deleted successfully");
      } catch (error) {
        console.error('Failed to delete the blog:', error);
        toast.error('Failed to delete the blog');
      }
    }
  };
  
  const truncateText = (text, limit) => {
    return text.length > limit ? text.substring(0, limit) + "..." : text;
  };

  return (
    <div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
      <div className="card customcard border-0 shadow-lg h-100">
        <img src={showImage(blog.image)} style={{ height: '200px', objectFit: 'fill' }} className="card-img-top" alt={blog.title} />
        <div className="card-body d-flex flex-column">
          <h2 className="h5 card-title customtitle">{truncateText(blog.title, 30)}</h2>
          <p>{truncateText(blog.shortDesc, 65)}</p>
          <div className="mt-auto d-flex justify-content-between">
            <Link to={`/blogs/${blog.id}`} className="btn btn-primary hello">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-eye-fill"
                viewBox="0 0 16 16"
              >
                <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0" />
                <path d="M0 8s3-5.5 8-5.5S16 8 16 8s-3 5.5-8 5.5S0 8 0 8m8 3.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7" />
              </svg>
            </Link>
            <Link to={`/blogs/edit/${blog.id}`} className="btn btn-secondary text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                <path
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z"
                />
              </svg>
            </Link>
            <a href="#"  className="btn btn-danger text-white" onClick={() => deleteBlog(blog.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash-fill"
                viewBox="0 0 16 16"
              >
                <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
