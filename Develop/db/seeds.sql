INSERT INTO department (id, dept_name)
VALUES (1, 'Finance'),
       (2, 'Procurement'),
       (3, 'Fulfillmet'),
       (4, 'IT'),
       (5, 'Human Resources');

INSERT INTO role (id, title, salary, department_id)
VALUES (1, 'Tech Support Agent', 50000, 4),
       (2, 'Procurement Specialist', 30000, 2),
       (3, 'Fulfillment Specialist', 30000, 3),
       (4, 'Accountant', 80000, 1),
       (5, 'HR Manager', 60000, 1);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (1, 'John', 'Adams', 1, 4),
       (2, 'Abe', 'Lincoln', 2, 3),
       (3, 'Thomas', 'Jefferson', 3, 1),
       (4, 'George', 'Washington', 3, 2);