import React, { memo } from "react";

import ListCard from "@/views/list/components/ListCard";
import ListCardSkeleton from "./ListCardSkeleton";

const ListItemGroup = memo((props) => {
  const {
    data = [],
    title = "",
    handleClick = () => {},
    isLoading = false,
  } = props;

  return (
    <div className='row g-4 mb-5'>
      <div className='col-12'>
        <h3 className='mb-0 fs-xl'>{title}</h3>
      </div>
      {!isLoading &&
        [...Array(12).keys()].map((item, index) => {
          return (
            <div key={index} className='col-6 col-md-3 col-lg-2'>
              <ListCardSkeleton />
            </div>
          );
        })}
      {isLoading &&
        data.map((item, index) => {
          return (
            <div key={index} className='col-6 col-md-3 col-lg-2'>
              <ListCard
                name={item.name}
                cover={item.cover}
                price={item.price}
                handleClick={() => handleClick(item.id)}
              />
            </div>
          );
        })}
    </div>
  );
});

export default ListItemGroup;
