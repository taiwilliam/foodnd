import BaseSkeleton from "@/components/Skeleton/BaseSkeleton";
import React from "react";

const ListTopSkeleton = (props) => {
  return (
    <div>
      <BaseSkeleton heightRatio={20} classNames='rounded-0' />

      <div className='container py-3'>
        <BaseSkeleton type='text' text_height='26' classNames='mb-2' />
        <BaseSkeleton
          type='text'
          text_height='16'
          classNames='mb-2 w-50 d-block'
        />
        <BaseSkeleton type='text' text_height='16' classNames='w-50' />
      </div>
    </div>
  );
};

export default ListTopSkeleton;
