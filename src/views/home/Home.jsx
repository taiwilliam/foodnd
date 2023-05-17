import React, { memo, useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import BaseHomeCard from "@/views/home/components/HomeCard";
import { fetchShopListAction } from "@/store/features/shop.store";
import HomeCardSkeleton from "./components/HomeCardSkeleton";

const HomeView = memo(() => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);
  const { shopList } = useSelector((state) => ({
    shopList: state.shop.list,
  }));

  useEffect(() => {
    // 獲取非同步shop資料
    fetchData();
  }, [dispatch]);

  const fetchData = async () => {
    await setIsLoading(false);

    await dispatch(fetchShopListAction());

    await setIsLoading(true);
  };

  return (
    <div className='container py-5'>
      <div className='row g-4 mb-5'>
        <div className='col-12'>
          <h3 className='mb-0 fs-xl'>精選店家</h3>
        </div>
        {!isLoading &&
          [...Array(8).keys()].map((item, index) => {
            return (
              <div key={index} className='col-6 col-md-4 col-lg-3'>
                <HomeCardSkeleton />
              </div>
            );
          })}
        {isLoading &&
          shopList.map((item, index) => {
            return (
              <div key={index} className='col-6 col-md-4 col-lg-3'>
                <BaseHomeCard
                  {...item}
                  classNames={["cursor-pointer"]}
                  handleClick={(id) => navigate(`/list/${id}`)}
                />
              </div>
            );
          })}
      </div>

      <div className='row g-4 mb-5'>
        <div className='col-12'>
          <h3 className='mb-0 fs-xl'>快速送達</h3>
        </div>
        {!isLoading &&
          [...Array(8).keys()].map((item, index) => {
            return (
              <div key={index} className='col-6 col-md-4 col-lg-3'>
                <HomeCardSkeleton />
              </div>
            );
          })}
        {isLoading &&
          shopList.map((item, index) => {
            return (
              <div key={index} className='col-6 col-md-4 col-lg-3'>
                <BaseHomeCard
                  {...item}
                  classNames={["cursor-pointer"]}
                  handleClick={(id) => navigate(`/list/${id}`)}
                />
              </div>
            );
          })}
      </div>
      <div className='row g-4 mb-5'>
        <div className='col-12'>
          <h3 className='mb-0 fs-xl'>新餐廳</h3>
        </div>
        {!isLoading &&
          [...Array(8).keys()].map((item, index) => {
            return (
              <div key={index} className='col-6 col-md-4 col-lg-3'>
                <HomeCardSkeleton />
              </div>
            );
          })}
        {isLoading &&
          shopList.map((item, index) => {
            return (
              <div key={index} className='col-6 col-md-4 col-lg-3'>
                <BaseHomeCard
                  {...item}
                  classNames={["cursor-pointer"]}
                  handleClick={(id) => navigate(`/list/${id}`)}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
});

export default HomeView;
