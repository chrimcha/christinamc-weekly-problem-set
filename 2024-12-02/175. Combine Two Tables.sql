-----Initial Attempt-----

# Write your MySQL query statement below
select firstName, lastName from Person by addressId
union
select city, state from Address by personId;


-----Notes while reviewing solution-----

LEFT JOIN returns all records from first table and the corresponding info from the second table, if there is no matching data in second table it will return NULL for those fields

It is possible to abbreviate table names by first letter (Person.firstName turns to P.firstName, when stated that abbreviation is Person P in the FROM)

-- table1 LEFT JOIN table2 ON condition
SELECT (data fields separated by commas)
FROM (table, with abbreviation after table name if using one) LEFT JOIN (table, with abbreviation after table name if using one)
ON (table and field to be compared with) = (other table and the same field)

-- another way to find solution
-- table1 LEFT JOIN table2 USING column_name
SELECT (data fields separated by commas)
FROM (table, with abbreviation after table name if using one)
LEFT JOIN (table, with abbreviation after table name if using one) USING (table and field to be compared with on both tables in parenthesis)

-- what is "natural left join"?


-----Second Attempt (after viewing solutions)-----

# Write your MySQL query statement below
-- select P.firstName, P.lastName, A.city, A.state 
-- from Person P left join Address A
-- on P.personId = A.personId;

-- or

select firstName, lastName, city, state
from Person 
left join Address using (personId);


-- Both Solution Accepted ✅