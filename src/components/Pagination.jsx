import { useEffect, useState } from "react";
import useAxiosSecure from "../hooks/useAxiosSecure";
import PropTypes from "prop-types";

const Pagination = ({ currentPage, setCurrentPage, postPerPage, search }) => {
  const axiosSecure = useAxiosSecure();
  const [totalPost, setTotalPost] = useState(0);

  const numberOfPages = Math.ceil(totalPost / postPerPage);
  const pagesArray = [...Array(numberOfPages).keys()];

  useEffect(() => {
    axiosSecure
      .get(`/number-of-post?searchQuery=${search}`)
      .then((res) => setTotalPost(res.data.totalPost))
      .catch((err) => console.log(err));
  }, [search]);

  const handleCurrentPage = (e) => {
    setCurrentPage(+e.target.textContent - 1);
  };

  const HandlePrevButton = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const HandleNextButton = () => {
    if (currentPage < numberOfPages - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  if (numberOfPages > 1) {
    return (
      <div className="dark:text-gray-800 flex justify-center space-x-3">
        <button
          onClick={HandlePrevButton}
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded border text-sm font-semibold shadow-md hover:bg-primary hover:text-white dark:border-0 dark:bg-white"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="15 18 9 12 15 6"></polyline>
          </svg>
        </button>
        {pagesArray.map((page, index) => (
          <button
            key={index}
            type="button"
            onClick={handleCurrentPage}
            className={`inline-flex h-8 w-8 items-center justify-center rounded border text-sm font-semibold shadow-md hover:bg-primary hover:text-white dark:border-0 dark:bg-white ${currentPage === page ? "bg-primary text-white" : ""} `}
          >
            {page + 1}
          </button>
        ))}
        <button
          onClick={HandleNextButton}
          type="button"
          className="inline-flex h-8 w-8 items-center justify-center rounded border text-sm font-semibold shadow-md hover:bg-primary hover:text-white dark:border-0 dark:bg-white"
        >
          <svg
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-4"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </button>
      </div>
    );
  }
};

Pagination.propTypes = {
  currentPage: PropTypes.number,
  setCurrentPage: PropTypes.func,
  postPerPage: PropTypes.number,
  search: PropTypes.string,
};

export default Pagination;
