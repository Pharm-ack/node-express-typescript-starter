import {
  getCustomerById,
  getCustomers,
} from "@/controllers/customerController";
import express from "express";

const customerRouter = express.Router();

customerRouter.get("/customers", getCustomers);
customerRouter.get("/customers/:id", getCustomerById);

export default customerRouter;
