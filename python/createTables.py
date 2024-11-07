import mysql.connector

# Connect to MySQL server in XAMPP
db = mysql.connector.connect(
    host="localhost",
    user="root",           # Default MySQL username for XAMPP
    password="",           # Default MySQL password for XAMPP is empty (unless changed)
    database="jobportal"  # Replace with your database name or create it if needed
)

cursor = db.cursor()

# Create the Companies table
cursor.execute("""
CREATE TABLE IF NOT EXISTS Companies (
    company_id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    location VARCHAR(100),
    description TEXT
);
""")

# Create the Users table
cursor.execute("""
CREATE TABLE IF NOT EXISTS Users (
    user_id INT AUTO_INCREMENT PRIMARY KEY,
    username VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL
);
""")

# Create the Jobs table
cursor.execute("""
CREATE TABLE IF NOT EXISTS Jobs (
    job_id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    company_id INT,
    location VARCHAR(100),
    salary DECIMAL(10, 2),
    FOREIGN KEY (company_id) REFERENCES Companies(company_id) ON DELETE CASCADE
);
""")

# Create the Applications table
cursor.execute("""
CREATE TABLE IF NOT EXISTS Applications (
    application_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    job_id INT,
    status ENUM('applied', 'reviewed', 'rejected') DEFAULT 'applied',
    applied_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE,
    FOREIGN KEY (job_id) REFERENCES Jobs(job_id) ON DELETE CASCADE
);
""")

# Create the User_Profiles table
cursor.execute("""
CREATE TABLE IF NOT EXISTS User_Profiles (
    user_profile_id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    education VARCHAR(255),
    experience TEXT,
    skills TEXT,
    resume_url VARCHAR(255),
    FOREIGN KEY (user_id) REFERENCES Users(user_id) ON DELETE CASCADE
);
""")

# Create the Job_Requirements table
cursor.execute("""
CREATE TABLE IF NOT EXISTS Job_Requirements (
    job_requirement_id INT AUTO_INCREMENT PRIMARY KEY,
    job_id INT,
    skill_required VARCHAR(100),
    FOREIGN KEY (job_id) REFERENCES Jobs(job_id) ON DELETE CASCADE
);
""")

print("Tables created successfully.")

# Close the connection
cursor.close()
db.close()
