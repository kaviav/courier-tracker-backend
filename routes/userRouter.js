import express from "express";
import {
  allOrders,
  order,
  orderemail,
  trackOrder,
  updateOrder,
} from "../controllers/userControllers";

const userRouter = express.Router();

// api endpoint, middlewares, api or controller functn

userRouter.post("/placeorder", order);
userRouter.post("/orderemail", orderemail);
userRouter.post("/track", trackOrder);
userRouter.get("/allorders", allOrders);
userRouter.put("/updateorder/:id", updateOrder);

export default userRouter;
