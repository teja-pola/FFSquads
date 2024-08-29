import registrationModel from "../models/registrationModel.js";
import userModel from "../models/usermodel.js";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

// Registration from frontend with Stripe payment
const registration = async (req, res) => {
    const frontend_url = "http://localhost:5173";

    try {
        const newRegistration = new registrationModel({
            userId: req.body.userId,
            roomId: req.body.roomId,
            EventDate:req.body.EventDate,
            time:req.body.time,
            map:req.body.map,
            ticket: req.body.ticket,
            teamDetails: req.body.teamDetails,
        });

        await newRegistration.save();

        // Stripe payment link
        const line_items = [
            {
                price_data: {
                    currency: "inr",
                    product_data: {
                        name: `Room ${req.body.roomId} Ticket`,
                    },
                    unit_amount: req.body.ticket * 100 , // Ticket price in INR (assuming conversion to paise)
                },
                quantity: 1,
            },
        ];

        // Adding processing or registration fee, if applicable
        //     line_items.push({
        //     price_data: {
        //        currency: "inr",
        //        product_data: {
        //            name: "Registration Charges",
        //        },
        //        unit_amount: 10000, // Example: 100 INR converted to paise
        //    },
        //    quantity: 1,
        //});

        const session = await stripe.checkout.sessions.create({
            line_items: line_items,
            mode: "payment",
            success_url: `${frontend_url}/verify?success=true&registrationId=${newRegistration._id}`,
            cancel_url: `${frontend_url}/verify?success=false&registrationId=${newRegistration._id}`,
        });

        res.json({ success: true, session_url: session.url });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// Verify registration payment
// Verify registration payment
const verifyRegistration = async (req, res) => {
    const { registrationId, success } = req.body;
    console.log(`Verification called with registrationId: ${registrationId}, success: ${success}`);
    try {
        if (success) {
            // Update payment status
            const updatedRegistration = await registrationModel.findByIdAndUpdate(registrationId, { payment: true });
            if (updatedRegistration) {
                console.log(`Payment updated for registrationId: ${registrationId}`);
                res.json({ success: true, message: "Paid" });
            } else {
                console.log(`No registration found for registrationId: ${registrationId}`);
                res.status(404).json({ success: false, message: "Registration not found" });
            }
        } else {
            // Handle failed payment
            const deletedRegistration = await registrationModel.findByIdAndDelete(registrationId);
            if (deletedRegistration) {
                console.log(`Registration deleted for registrationId: ${registrationId}`);
                res.json({ success: false, message: "Not Paid" });
            } else {
                console.log(`No registration found for registrationId: ${registrationId}`);
                res.status(404).json({ success: false, message: "Registration not found" });
            }
        }
    } catch (error) {
        console.error("Error during verification:", error.message);
        res.status(500).json({ success: false, message: "Error" });
    }
};




// List registrations for frontend
const userRegistrations = async (req, res) => {
    try {
        const registrations = await registrationModel.find({ userId: req.body.userId });
        res.json({ success: true, data: registrations });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

// List registrations for admin panel
// List registrations for admin panel
const listRegistrations = async (req, res) => {
    try {
        // Populate teamDetails if it's referencing another model
        const registrations = await registrationModel.find({}).populate('teamDetails');
        res.json({ success: true, data: registrations });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};


// API for updating registration status
const updateRegistrationStatus = async (req, res) => {
    try {
        await registrationModel.findByIdAndUpdate(req.body.registrationId, { status: req.body.status });
        res.json({ success: true, message: "Status updated" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
};

export {
    registration,
    verifyRegistration,
    userRegistrations,
    listRegistrations,
    updateRegistrationStatus,
};
