import mysql.connector

db = mysql.connector.connect(
    host="localhost",
    user="root",           
    password="",           
    database="jobportal"  
)

cursor = db.cursor()

user_profiles_data = [
    (1, "BSc in Computer Science", "2 years at XYZ Corp", "Python, SQL, Java", "http://resume.url/alice"),
    (2, "BSc in Business Administration", "3 years at ABC Inc.", "Excel, Communication", "http://resume.url/bob"),
    (3, "BSc in Data Science", "1 year at DataHub", "R, Statistics", "http://resume.url/charlie"),
    (4, "MSc in Marketing", "2 years at MarketPro", "Digital Marketing, SEO", "http://resume.url/diana"),
    (5, "BSc in Environmental Science", "1 year at EcoCo", "Research, Analysis", "http://resume.url/eve")
]

insert_user_profiles_query = """
INSERT INTO User_Profiles (user_id, education, experience, skills, resume_url)
VALUES (%s, %s, %s, %s, %s);
"""
cursor.executemany(insert_user_profiles_query, user_profiles_data)
db.commit()

cursor.close()
db.close()
