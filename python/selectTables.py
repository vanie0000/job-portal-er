import mysql.connector
from prettytable import PrettyTable

# Function to connect to the database
def connect_db():
    return mysql.connector.connect(
        host="localhost",
        user="root",  # Default MySQL username for XAMPP
        password="",  # Default MySQL password for XAMPP is empty (unless changed)
        database="jobportal"  # Replace with your database name
    )

# Function to execute a query and print results in table format
def execute_and_display_query(query):
    db = connect_db()
    cursor = db.cursor()

    cursor.execute(query)
    results = cursor.fetchall()

    # Get column names from cursor description
    column_names = [desc[0] for desc in cursor.description]

    # Create a PrettyTable instance and add column names
    table = PrettyTable()
    table.field_names = column_names

    # Add rows to the table
    for row in results:
        table.add_row(row)

    print(table)

    cursor.close()
    db.close()

# 1. List all users and their emails.
query1 = "SELECT username, email FROM Users;"
execute_and_display_query(query1)

# 2. Retrieve all jobs posted by a specific company (e.g., "Tech Solutions").
query2 = """
SELECT * FROM Jobs 
WHERE company_id = (SELECT company_id FROM Companies WHERE name = 'Tech Solutions');
"""
execute_and_display_query(query2)

# 3. Count the total number of applications submitted by each user.
query3 = """
SELECT user_id, COUNT(*) AS application_count 
FROM Applications 
GROUP BY user_id;
"""
execute_and_display_query(query3)

# 4. Find all jobs that require a specific skill (e.g., "Python").
query4 = """
SELECT j.* 
FROM Jobs j 
JOIN Job_Requirements jr ON j.job_id = jr.job_id 
WHERE jr.skill_required = 'Python';
"""
execute_and_display_query(query4)

# 5. Retrieve the profile information of a user based on their username (e.g., "alice").
query5 = """
SELECT u.username, up.education, up.experience, up.skills, up.resume_url 
FROM Users u 
JOIN User_Profiles up ON u.user_id = up.user_id 
WHERE u.username = 'alice';
"""
execute_and_display_query(query5)

# 6. Find the average salary of jobs in each company.
query6 = """
SELECT c.name AS company_name, AVG(j.salary) AS average_salary 
FROM Companies c 
JOIN Jobs j ON c.company_id = j.company_id 
GROUP BY c.name;
"""
execute_and_display_query(query6)

# 7. List all applications along with the user and job details.
query7 = """
SELECT a.application_id, u.username, j.title, a.status 
FROM Applications a 
JOIN Users u ON a.user_id = u.user_id 
JOIN Jobs j ON a.job_id = j.job_id;
"""
execute_and_display_query(query7)

# 8. Retrieve all jobs that are located in a specific city (e.g., "Chicago").
query8 = "SELECT * FROM Jobs WHERE location = 'Chicago';"
execute_and_display_query(query8)

# 9. Find all users who have applied for a specific job (e.g., job_id = 1).
query9 = """
SELECT u.username, a.status 
FROM Applications a 
JOIN Users u ON a.user_id = u.user_id 
WHERE a.job_id = 1;
"""
execute_and_display_query(query9)

# 10. List all companies that do not have any job postings.
query10 = """
SELECT c.* 
FROM Companies c 
LEFT JOIN Jobs j ON c.company_id = j.company_id 
WHERE j.job_id IS NULL;
"""
execute_and_display_query(query10)
