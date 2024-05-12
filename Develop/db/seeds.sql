INSERT INTO department (id, dept_name)
VALUES (1, 'dept1'),
       (2, 'dept2'),
       (3, 'dept3');

INSERT INTO role (id, title, salary, department_id)
VALUES (11, 'role1', 30000, 1),
       (22, 'role2', 30000, 2),
       (33, 'role3', 30000, 3);

INSERT INTO employee (id, first_name, last_name, role_id, manager_id)
VALUES (111, 'FirstName', 'LastName', 11, 333),
       (222, 'FirstName', 'LastName', 22, 222),
       (333, 'FirstName', 'LastName', 33, 111);