import React, { useState, useEffect } from 'react';
import { getIdeas } from '../services/api';
import Header from '../components/Header';
import Banner from '../components/Banner';
import PostList from '../components/PostList';
import queryString from 'query-string';
import { useLocation, useNavigate } from 'react-router-dom';

const IdeasPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  
  const [ideas, setIdeas] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sort, setSort] = useState('-published_at');
  const [totalPages, setTotalPages] = useState(0);
  const [loading, setLoading] = useState(false);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const query = queryString.parse(location.search);
    const initialPage = parseInt(query.page, 10) || 1;
    const initialPageSize = parseInt(query.pageSize, 10) || 10;
    const initialSort = query.sort || '-published_at';

    setPage(initialPage);
    setPageSize(initialPageSize);
    setSort(initialSort);

    fetchIdeas(initialPage, initialPageSize, initialSort);
  }, [location.search]);

  const fetchIdeas = async (page = 1, pageSize = 10, sort = '-published_at') => {
    setLoading(true);
    try {
      const data = await getIdeas(page, pageSize, sort);
      setIdeas(data.data);
      setTotalPages(data.meta.last_page);
      setTotalItems(data.meta.total);
    } catch (error) {
      console.error('Error fetching ideas:', error);
    }
    setLoading(false);
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
    updateQueryParams({ page: newPage });
  };

  const handlePageSizeChange = (newSize) => {
    setPageSize(newSize);
    setPage(1); // Reset to first page when changing page size
    updateQueryParams({ page: 1, pageSize: newSize });
  };

  const handleSortChange = (newSort) => {
    setSort(newSort);
    setPage(1); // Reset to first page when changing sort
    updateQueryParams({ page: 1, sort: newSort });
  };

  const updateQueryParams = (params) => {
    const currentParams = queryString.parse(location.search);
    const newParams = { ...currentParams, ...params };
    navigate({ search: queryString.stringify(newParams) });
  };

  return (
    <div>
      <Header />
      <Banner imageUrl={'ideas.jpeg'} />
      <PostList
        ideas={ideas}
        loading={loading}
        page={page}
        pageSize={pageSize}
        totalPages={totalPages}
        totalItems={totalItems}
        sort={sort}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        onSortChange={handleSortChange}
      />
    </div>
  );
};

export default IdeasPage;
