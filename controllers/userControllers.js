import User from "../models/User";
import CryptoJS from "crypto-js";
import Order from "../models/Order";
import dotenv from "dotenv";
// import crypto from "crypto";
import nodemailer from "nodemailer";

dotenv.config();

//

export const order = async (req, res) => {
  // let's create the order
  const order = new Order(req.body);
  console.log(order.PriorityStatus, order.TrackingID);
  await order.save();

  res.status(201).json({
    message: "You have successfully saved the order",
  });
};

export const orderemail = async (req, res) => {
  const email = req.body.email;
  console.log(email);
  const cost = req.body.Cost;
  const trackingID = req.body.TrackingID;
  // let user = await User.findOne({ email: email, userType: '10' }).exec();

  // if(!user){
  // console.log('user not found')
  // return res.status(422).json({error: "Payment failed!"})}
  // console.log(user.email)

  let smtpTransporter = nodemailer.createTransport({
    service: "Gmail",
    port: 465,
    auth: {
      user: "kavyawhale777@gmail.com",
      pass: process.env.EMAIL_PASS,
    },
  });

  //
  //
  //
  //

  let mailOptions = {
    from: "kavyawhale777@gmail.com",
    to: email,
    subject: "Enroute Payment Invoice",
    html: `<h2>Thank you for the recent payment that you made for the amount $ ${cost}.
        This is a confirmation that the amount has been received successfully.
        Your tracking ID is ${trackingID} .</h2>`,
  };
  //
  //
  //

  smtpTransporter.sendMail(mailOptions, (error) => {
    try {
      if (error) return res.status(400).json({ msg: "Error occured!" });
      res.status(200).json({ msg: "Thank You, Enjoy journey with TrackOk." });
    } catch (error) {
      if (error) return res.status(500).json({ msg: "There is server error" });
    }
  });
};

export const trackOrder = async (req, res) => {
  const TrackingID = req.body.trackingId;
  // console.log(req.body.trackingId);
  try {
    const order = await Order.findOne({ TrackingID });
    console.log(order);

    return res.status(200).json({ order });
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const allOrders = async (req, res) => {
  try {
    const orders = await Order.find();
    return res.status(200).json(orders);
  } catch (err) {
    return res.status(500).json(err);
  }
};

export const updateOrder = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedData = await Order.findByIdAndUpdate(
      id,
      { $set: req.body },
      { new: true }
    );
    return res.status(200).json(updatedData);
  } catch (err) {
    return res.status(500).json(err);
  }
};
