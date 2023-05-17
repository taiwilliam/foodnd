import React from "react";
// import propTypes from 'prop-types'
import BaseSkeleton from "@/components/Skeleton/BaseSkeleton";

const ListCardSkeleton = (props) => {
  return (
    <div>
      <div className=''>
        <BaseSkeleton />
      </div>
      <div className='py-2'>
        <BaseSkeleton type='text' classNames='mb-1' />
        <BaseSkeleton type='text' classNames='w-50' />
      </div>
    </div>
  );
};

export default ListCardSkeleton;
