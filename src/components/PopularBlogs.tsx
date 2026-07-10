import React, { useState } from "react";
import { MessageCircle, ThumbsUp, Eye } from "lucide-react";

const PopularBlogs = () => {
  const blogs = [
    {
      title: "My Amazing Blog Title 1",
      author: "Jordan",
      likes: 142,
      comments: 44,
      eyes: 300,
    },
    {
      title: "My Amazing Blog Title 2",
      author: "John",
      likes: 153,
      comments: 25,
      eyes: 400,
    },
    {
      title: "My Amazing Blog Title 3",
      author: "Huxn",
      likes: 50,
      comments: 14,
      eyes: 150
    },
  ];

  const [likedBlogs, setLikedBlogs] = useState<number[]>([]);

  const handleLike = (index: number) => {
    setLikedBlogs((prev) =>
      prev.includes(index)
        ? prev.filter((id) => id !== index)
        : [...prev, index],
    );
  };

  return (
    <div className="bg-white p-5 w-[23rem] mt-4 border ml-5 rounded">
      <h2 className="text-xl font-bold mb-5">Popular Blogs</h2>
      <ul>
        {blogs.map((blog, index) => (
          <li key={index} className="mb-4">
            <div className="flex justify-between items-center">
              <span className="font-bold mb-2">{blog.title}</span>
            </div>

            <span className="text-gray-600">Publish by {blog.author}</span>
            <div className="flex items-center mt-2">
              <MessageCircle size={16} />
              <span className="text-gray-500 mr-5 ml-1">{blog.comments}</span>

              <button onClick={() => handleLike(index)}>
                <ThumbsUp
                  size={16}
                  className={`transition ${
                    likedBlogs.includes(index)
                      ? "text-red-500 fill-red-500"
                      : "text-gray-500"
                  }`}
                />
              </button>

              <span className="text-gray-500 mr-5 ml-2">
                {blog.likes + (likedBlogs.includes(index) ? 1 : 0)}
              </span>

              <Eye size={16} />
              <span className="text-gray-500 ml-2">{blog.eyes}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularBlogs;
