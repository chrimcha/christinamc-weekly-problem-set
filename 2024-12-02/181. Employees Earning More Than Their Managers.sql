-----Initial Attempt-----

# Write your MySQL query statement below
select E.name
from Employee E
on E.salary > Manager.salary using E.managerId;


-----Notes while reviewing solution-----

If there is no column with the name needed, rename that column (SELECT (name) as (desired name))
-- pay more attention to the data provided, the managerId's aligned with two id's provided in employee table
INNER JOIN is like creating a duplicate of a table to then use a conditional on, using it to compare sorted data between the two new tables

SELECT (second table with field) as (desired column name if it doesn't exist)
FROM (table, with abbreviation, will need when using INNER JOIN)
INNER JOIN (table, with abbreviation, will need when using INNER JOIN, this one is second) ON (table with field to compare to) = (table with field to compare to)
WHERE (table with field to compare to) < (table with field to compare to);

-- the table named after the FROM statement turns into a table with only the conditional content, the table named after the INNER JOIN statement becomes a table without the contents of the previous table


-----Second Attempt (after viewing solutions)-----

# Write your MySQL query statement below
select E.name as Employee
from Employee M
inner join Employee E on M.id = E.managerId
where E.salary > M.salary;


-- Solution Accepted ✅