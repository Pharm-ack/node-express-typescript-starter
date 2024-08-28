import { Request, Response } from "express";

export const getCustomers = async (req: Request, res: Response) => {
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
    },
    {
      id: 2,
      name: "Joel Smith",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    },
    {
      id: 3,
      name: "Joel michael",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    },
  ];

  return res.status(200).json(customers);
};

export const getCustomerById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const customers = [
    {
      id: 1,
      name: "John Doe",
      email: "john.doe@example.com",
      phone: "+1234567890",
    },
    {
      id: 2,
      name: "Joel Smith",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    },
    {
      id: 3,
      name: "Joel michael",
      email: "joel.smith@example.com",
      phone: "+0987654321",
    },
  ];
  const customer = customers.find((customer) => customer.id === parseInt(id));

  if (!customer) {
    return res.status(404).json({ message: "Customer not found" });
  }

  return res.status(200).json(customer);
};
