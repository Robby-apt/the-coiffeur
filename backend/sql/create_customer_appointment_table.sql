CREATE TABLE Appointments (
    appointment_id INT AUTO_INCREMENT PRIMARY KEY,
    fName VARCHAR(50),
    lName VARCHAR(50),
    phoneNumber VARCHAR(20),
    email VARCHAR(100),
    appointment_date DATE,
    appointment_time TIME,
    typeOfService VARCHAR(100)
);