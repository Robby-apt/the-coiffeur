CREATE TABLE Employee (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    phone VARCHAR(20),
    email VARCHAR(100),
    employee_role VARCHAR(50),
    bank VARCHAR(100),
    bank_account_number VARCHAR(50),
    salary DECIMAL(10, 2)
);