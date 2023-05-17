import React, { memo } from "react";

import BaseSkeleton from "@/components/Skeleton/BaseSkeleton";

const HomeCardSkeleton = memo((props) => {
  return (
    <div className=''>
      <BaseSkeleton classNames='mb-2' />
      <div className='d-flex mx-n1 align-items-center'>
        <div className='px-1 w-100'>
          <BaseSkeleton type='text' />
        </div>
        <div className='px-1'>
          <BaseSkeleton type='circle' circle_size='28' />
        </div>
      </div>
      <BaseSkeleton type='text' classNames='text d-inline-block w-50' />
    </div>
  );
});

export default HomeCardSkeleton;
