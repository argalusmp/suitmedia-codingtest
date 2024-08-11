import React from "react";
import PostCard from "./PostCard";
import Pagination from "./Pagination";

const PostList = ({
  ideas,
  loading,
  page,
  pageSize,
  totalPages,
  totalItems,
  sort,
  onPageChange,
  onPageSizeChange,
  onSortChange,
}) => {
  if (loading) {
    return <div>Loading...</div>;
  }

  // Menghitung rentang item yang ditampilkan
  const startIndex = (page - 1) * pageSize + 1;
  const endIndex = Math.min(page * pageSize, totalItems);
  console.log(ideas); // untuk memastikan struktur data dan isian dari API

  return (
    <div className="m-24">
      <div className=" my-7 flex justify-between">
        <div className="text-showings flex items-center">
          <p className="text-lg">
            Showing {startIndex} - {endIndex} of {totalItems}
          </p>
        </div>
        <div className="filter-content flex justify-end">
          <div className="sort">
            <label htmlFor="sort" className="mb-2 mr-2 text-lg">
              Sort
            </label>
            <select
              id="sort"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-7 p-2.5"
              value={sort}
              onChange={(e) => onSortChange(e.target.value)}
            >
              <option value="-published_at">Newest</option>
              <option value="published_at">Oldest</option>
            </select>
          </div>
          <div className="per-page">
            <label htmlFor="per-page" className=" mb-2 mr-2 ml-10 text-lg">
              Show Per Page
            </label>
            <select
              id="per-page"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 px-7 p-2.5"
              value={pageSize}
              onChange={(e) => onPageSizeChange(Number(e.target.value))}
            >
              <option value={10}>10</option>
              <option value={20}>20</option>
              <option value={50}>50</option>
            </select>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {ideas.map((idea) => (
          <PostCard key={idea.id} idea={idea} />
        ))}
      </div>
      <div className="mt-5">
        <Pagination
          currentPage={page}
          totalPages={totalPages}
          onPageChange={onPageChange}
        />
      </div>
    </div>
  );
};

export default PostList;
