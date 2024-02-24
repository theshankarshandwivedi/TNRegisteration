const express = require("express");
const Data = require("../model/data");


exports.dataController = async (req, res) => {
    try {
        const { name, year, scholarId, branch, email, contact, verticals} = req.body;

        if(!name || !year || !scholarId || !branch || !email || !contact){
            return res.status(401).json({
                success: false,
                message: "Please fill out all the fields"
            });
        }
        
        // let vertical = [];

        const user = Data.create({
            name,
            year,
            scholarId,
            branch,
            email,
            contact,
            verticals,
        });

        return res.status(200).json({
            success: true,
            message: "User registered successfully"
        });


    } catch (error) {
        console.log(error);
        return res.status(500).json({
            success: false,
            message: "Error creating the User",
        });
    }
}