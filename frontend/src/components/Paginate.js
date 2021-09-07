import React from "react";
import { Pagination } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const Paginate = ({ pages, page, isAdmin = false, keyword = "" }) => {
  return (
    pages > 1 && (
      <Pagination>
        {[...Array(pages).keys()].map((pn) => (
          <LinkContainer
            key={pn + 1}
            to={
              !isAdmin
                ? keyword
                  ? `/search/${keyword}/page/${pn + 1}`
                  : `/page/${pn + 1}`
                : `/admin/productlist/${pn + 1}`
            }
          >
            <Pagination.Item active={pn + 1 === page}>{pn + 1}</Pagination.Item>
          </LinkContainer>
        ))}
      </Pagination>
    )
  );
};

export default Paginate;
