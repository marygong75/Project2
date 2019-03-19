-- Create database
CREATE database gender_job_db;
USE gender_job_db;

CREATE TABLE job_category (
   company VARCHAR(64),
   gender VARCHAR(128),
   job_category VARCHAR(128),
   count FLOAT
);
