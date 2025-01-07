import React from "react";
import "./SdvComponent.css";

const images = [
  "chasis.png",

  "bluetoothmodule.jpg",
  "Bms.jpg",

  "Arduino.jpg",
  "ServoMotor.jpg",
  "L298.jpg",
  "BOMotor.jpg",
  "IRproximity.jpg",

  "Cells.jpg",
  "UltrasonicSensor.jpg",
  "Switches.jpg",
  "Jumper Wires.jpg",
  "Wheels.jpg",
  "Breadboard.jpg",
  "BatteryCarrier.jpg",
  "screw driver.jpg",
  "Doubletape.jpg",
  "sticker.jpg",
  'manual.jpg',
  "WristBand.jpg",
];

const cardHeadings = [
  "Chassis",
  "Bluetooth Module HC-05",
  "Battery Management System",
  "Arduino UNO",
  "Servo Motors",
  "L298 Motor Controller",
  "BO Motors",
  "IR Proximity Sensor",
  "Cells",
  "Ultrasonic Sensor",
  "Switches",
  "Jumper Wires",
  "Wheels",
  "Breadboard",
  "Battery Carrier",
  "Screw Driver",
  "Double Tape",
  "Stickers",
  "Manual",
  "Wrist Band",
];

const cardParagraphs = [
  "The chassis is the frame of the robot, which holds all the components together and provides structural support.",
  "The HC-05 is a Bluetooth module that allows devices to communicate wirelessly over a short distance. It is commonly used in robotics and IoT projects to enable wireless communication between devices.",
  "A Battery Management System (BMS) is an electronic system that ensures the safe operation of a rechargeable battery by monitoring its state, protecting it, controlling its environment, and balancing it",
  "The Arduino Uno is an open-source microcontroller board based on the Microchip ATmega328P microcontroller (MCU) and developed by Arduino.cc and initially released in 2010.",
  "A servo motor is defined as an electric motor that allows for precise control of angular or linear position, speed, and torque.",
  "L298N module is a high voltage, high current dual full-bridge motor driver module for controlling DC motor and stepper motor. It can control both the speed and rotation direction of two DC motors.",
  "BO Motor, stands for Battery Operated Motor, is a simple DC Geared Motor consists of gearbox and shaft, used in Robot, cars and other DIY projects where movement is needed.",
  "The IR sensor or infrared sensor is one kind of electronic component, used to detect specific characteristics in its surroundings through emitting or detecting IR radiation.",
  "Electric cells are devices that convert chemical energy into electrical energy through a process involving oxidation and reduction.",
  "Ultrasonic sensors are electronic devices that calculate the target’s distance by emission of ultrasonic sound waves and convert those waves into electrical signals.",
  "A Switch is a device which is designed to interrupt the current flow in a circuit. In simple words, a Switch can make or break an electrical circuit.",
  "Jumper wires are flexible electrical wires used to connect components on a breadboard or in a circuit, making prototyping and testing quick and easy.",
  "Wheels are mechanical components used for movement, attached to motors to provide mobility.",
  "A breadboard is a construction base for prototyping of electronics, used to build and test circuits quickly without soldering.", // Added new paragraph
  "A battery carrier is a device designed to hold batteries securely and provide electrical contacts to connect the batteries to a circuit.", // Added new paragraph
  "A screwdriver is a tool, manual or powered, used for screwing (installing) and unscrewing (removing) screws.",
  "Double-sided tape is any pressure-sensitive tape that is coated with adhesive on both sides. It is designed to stick two surfaces together, often in a way which is not visible in the end product, due to it being in between the objects rather than overlaying them.",
  "Stickers are a type of label: a piece of printed paper, plastic, vinyl, or other material with pressure-sensitive adhesive on one side.",
  "A manual is a document that provides instructions or information. It is a book or booklet that is given to the user of a product or service, which contains information on the operation, maintenance, and troubleshooting of the product or service.",
  "A wristband is a wearable device that is worn around the wrist to track various health parameters and activities.",
];

const Component = () => {
  return (
    <div className="component ">
      <h1 className="gallery-heading ">
        <span className="text-center ">KNOW YOUR COMPONENTS</span>
      </h1>
      <div className="card-container">
        {images.map((image, index) => (
          <div key={index} className="card">
            <img
              src={process.env.PUBLIC_URL + "/" + image}
              alt={cardHeadings[index]}
            />
            <div className="info">
              <h1>{cardHeadings[index]}</h1>
              <p>{cardParagraphs[index]}</p>
            </div>
            <div className="card-heading">{cardHeadings[index]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Component;
