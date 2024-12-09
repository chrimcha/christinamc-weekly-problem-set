-----Initial Attempt-----

# Write your MySQL query statement below
select D.name as Department, E.name as Employee, E.salary as Salary
from Employee E, Department D
inner join Department D using (D.id = E.departmentId);


-----Notes while reviewing solution-----

MAX() function returns the largest value of selected column
MIN() function returns the smallest value of selected column

AND operator can be used in the WHERE clause to filter records based on one or more conditions

IN operator allows you to specify multiple values in a WHERE clause; shorthand for multiple OR conditions

GROUP BY statement groups rows that have the same value into summary rows; often used with (COUNT(), MAX(), MIN(), SUM(), AVG())


-----Second Attempt (after viewing solutions)-----

# Write your MySQL query statement below
select D.id as Department, E.name as Employee, E.salary as Salary
from Department D join Employee E on (E.departmentId = D.id)
where (E.departmentId, MAX(salary)) and (E.departmentId = D.id) in (select departmentId, MAX(salary) from Employee group by departmentId);
-- pay more attention to query names and what fields I am trying to search


-----Third Attempt (after viewing solutions again)-----

# Write your MySQL query statement below
select D.name as Department, E.name as Employee, E.salary as Salary
from Department D join Employee E on (E.departmentId = D.id)
where (departmentId, salary) in (select departmentId, MAX(salary) from Employee group by departmentId);


-- Solution Accepted ✅
-- https://leetcode.com/u/chrimcha/