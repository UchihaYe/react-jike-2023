// 和用户相关的状态管理

import { request } from "@/utils";
import { createSlice } from "@reduxjs/toolkit";

const userStore = createSlice({
  name: "user",
  initialState: {
    token: "",
  },
  // 同步修改方法
  reducers: {
    setToken(state, action) {
      state.token = action.payload;
    },
  },
});

// 解构actionCreater
const { setToken } = userStore.actions;

// 获取reducer函数
const userReducer = userStore.reducer;

// 异步方法 完成登录并且获取token
const fetchLogin = (loginForm) => {
  return async (dispatch) => {
    // 发送异步请求
    const res = await request.post("/authorizations", loginForm);
    // 提交同步action进行token存入
    dispatch(setToken(res.data.token));
  };
};

export { setToken, fetchLogin };

export default userReducer;
