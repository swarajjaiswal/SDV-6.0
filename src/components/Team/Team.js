import React from 'react';
import './Team.css'; 

const teamMembers = [
    {
        name: "Siddharth Khandelwal",
        imgSrc: "https://i.ibb.co/VVvJFH5/Siddharth-Khandelwal.jpg"
    },
    {
        name: "Atanu Bepari",
        imgSrc: "https://live.staticflickr.com/65535/52771983628_a45c73fbd5_w.jpg"
    },
    {
        name: "Prince Raj",
        imgSrc: "https://i.ibb.co/28N0q6s/Prince-Raj.jpg"
    },
    {
        name: "Aniket Kamble",
        imgSrc: "https://i.ibb.co/MRwgKT6/Aniket-Kamble.png"
    },
    {
        name: "Dipesh Banerjee",
        imgSrc: "https://i.ibb.co/w63L8gf/Dipesh-Banerjee.jpg"
    },
    {
        name: "Shiv Mangal Pandey",
        imgSrc: "https://live.staticflickr.com/65535/52771058662_34408c67b5_w.jpg"
    },
    {
        name: "Gautam Kesari",
        imgSrc: "https://live.staticflickr.com/65535/52770050986_33bd98fce5_w.jpg"
    },
    {
        name: "Liza Gupta",
        imgSrc: "https://live.staticflickr.com/65535/52770930214_3de6813ed8_w.jpg"
    },
    {
        name: "Ambar",
        imgSrc: "https://live.staticflickr.com/65535/52771085605_0f5886ca1c_n.jpg"
    },
    {
        name: "Sachin Patel",
        imgSrc: "https://i.ibb.co/hVJq3K1/Sachin-Patel.jpg"
    },
    {
        name: "Prajnan Karmakar",
        imgSrc: "https://live.staticflickr.com/65535/52770704591_34e540d4f0_n.jpg"
    },
    {
        name: "Biswajit",
        imgSrc: "https://i.ibb.co/1vcxtNh/Biswajit.png"
    },
    {
        name: "Prasant Sahu",
        imgSrc: "https://live.staticflickr.com/65535/52770159432_ee9bdfdbf0_n.jpg"
    },
    {
        name: "Sai Prakash",
        imgSrc: "https://live.staticflickr.com/65535/52771602331_bc777f420f_n.jpg"
    },
    {
        name: "Aksha",
        imgSrc: "https://live.staticflickr.com/65535/52770673311_ef3c63ea13_n.jpg"
    },
    {
        name: "Vyashnavi",
        imgSrc: "https://live.staticflickr.com/65535/52770138467_1133f23c3e_w.jpg"
    },
    {
        name: "Bireshwar Hansda",
        imgSrc: "https://live.staticflickr.com/65535/52771494781_6e0ca2e5c6_w.jpg"
    },
    {
        name: "Shibraj Deb",
        imgSrc: "https://live.staticflickr.com/65535/52769439002_ab1b5da2e3_w.jpg"
    },
    {
        name: "Himanshu Hembram",
        imgSrc: "https://live.staticflickr.com/65535/52770493868_8825256c72_n.jpg"
    },
    {
        name: "Hritam Saha",
        imgSrc: "https://live.staticflickr.com/65535/52770394240_f0a47a4e43_w.jpg"
    },
    {
        name: "Abhay Fateh",
        imgSrc: "https://live.staticflickr.com/65535/52770445380_13163e4edb_n.jpg"
    },
    {
        name: "Rakesh",
        imgSrc: "https://live.staticflickr.com/65535/52770390480_1dc866efc1_w.jpg"
    },
    {
        name: "Ritu Rani",
        imgSrc: "https://i.ibb.co/Zh3WFTt/Ritu-Rani.jpg"
    },
    {
        name: "Jashwanth Ram",
        imgSrc: "https://live.staticflickr.com/65535/52771085715_9c9216744e_w.jpg"
    },
    {
        name: "Agnibho Bhattacharya",
        imgSrc: "https://live.staticflickr.com/65535/53127365808_16bfac199a_m.jpg"
    },
    {
        name: "Sourashish",
        imgSrc: "https://live.staticflickr.com/65535/52771200973_e82464442d_n.jpg"
    },
    {
        name: "Siddarth Prasad",
        imgSrc: "https://live.staticflickr.com/65535/52771545716_f8fd7cd973_n.jpg"
    }
];

const Team = () => {
    return (
        <>
        <div className="team-page">  
            {teamMembers.map((member, index) => (
                <div key={index} className="team-member mt-12">
                    <img src={member.imgSrc} alt={member.name} />
                    <h3 className="name">{member.name}</h3>
                </div>
            ))}
        </div>
        </>
    );
};

export default Team;
