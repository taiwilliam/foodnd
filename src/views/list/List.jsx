import React, { memo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import BaseDialog from "@/components/Dialog/BaseDialog";
import ListItemGroup from "@/views/list/components/ListItemGroup";
import ListTop from "@/views/list/components/ListTop";
import ListDialogContent from "./components/ListItemDialogContent";
import ListCartDialogContent from "./components/ListCartDialogContent";
import ListFixedBar from "./components/ListFixedBar";
import { fetchCartDataAction } from "@/store/features/cart.store";
import {
  fetchShopDataAction,
  fetchShopMenuAction,
} from "@/store/features/shop.store";
import ListTopSkeleton from "./components/ListTopSkeleton";

const ListView = memo((props) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // 彈出視窗開關
  const [cartOpenDialog, setCartOpenDialog] = useState(false); // 購物車彈出視窗開關
  const [activeDialog, setActiveDialog] = useState(0); // active 所選的餐點id
  const [modeDialog, setModeDialog] = useState("create"); // 產品視窗 模式
  const { cartData, shopData, shopMenuData } = useSelector((state) => ({
    cartData: state.cart.data, // 購物車資料,
    shopData: state.shop.data, // 店家資料
    shopMenuData: state.shop.menu, // 菜單資料,
  }));

  useEffect(() => {
    initView();
  }, [dispatch]);

  // 獲取非同步資料
  const fetchData = () =>
    Promise.all([
      dispatch(fetchShopDataAction(id)),
      dispatch(fetchShopMenuAction(id)),
      dispatch(fetchCartDataAction()),
    ]);

  const initView = async () => {
    setIsLoading(false);
    await fetchData();
    setIsLoading(true);
  };

  const handleOpenDialog = (id) => {
    setModeDialog("create");
    setActiveDialog(id);
    setOpenDialog(true);
  };

  const handleCloseDialog = (id) => {
    setOpenDialog(false);
  };

  const handleOpenCartDialog = () => {
    setCartOpenDialog(true);
  };

  const handleCloseCartDialog = () => {
    setCartOpenDialog(false);
  };

  const handleClickEditBtn = (item) => {
    setActiveDialog(item.id);
    setCartOpenDialog(false);
    setModeDialog("update");
    setOpenDialog(true);
  };

  return (
    <div className=''>
      {!isLoading && <ListTopSkeleton />}
      {isLoading && (
        <ListTop
          cover={shopData.cover}
          name={shopData.name}
          score={shopData.score}
          address={shopData.address}
          price={shopData.price}
        />
      )}

      {/* 購物車沒商品時不顯示 */}
      {cartData.length > 0 && (
        <ListFixedBar handleClick={() => handleOpenCartDialog()} />
      )}

      <div className='container py-5'>
        <ListItemGroup
          isLoading={isLoading}
          data={shopMenuData}
          title={"您專屬的推薦商品"}
          handleClick={(id) => handleOpenDialog(id)}
        />
        <ListItemGroup
          isLoading={isLoading}
          data={shopMenuData.slice(0, 2)}
          title={"優惠餐"}
          handleClick={(id) => handleOpenDialog(id)}
        />
        <ListItemGroup
          isLoading={isLoading}
          data={shopMenuData.slice(0, 4)}
          title={"新登場 New"}
          handleClick={(id) => handleOpenDialog(id)}
        />
        <ListItemGroup
          isLoading={isLoading}
          data={shopMenuData.slice(0, 5)}
          title={"單品"}
          handleClick={(id) => handleOpenDialog(id)}
        />
      </div>

      <BaseDialog show={openDialog} handleClose={() => handleCloseDialog()}>
        <ListDialogContent
          {...shopMenuData[activeDialog]}
          mode={modeDialog}
          handleClose={() => handleCloseDialog()}
        />
      </BaseDialog>

      <BaseDialog
        show={cartOpenDialog}
        handleClose={() => handleCloseCartDialog()}
      >
        <ListCartDialogContent
          cartData={cartData}
          handleClickEditBtn={(id) => handleClickEditBtn(id)}
          handleClose={() => handleCloseCartDialog()}
        />
      </BaseDialog>
    </div>
  );
});

export default ListView;
