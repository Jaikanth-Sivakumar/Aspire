use aspire;

create table Programmer(
name varchar(16) not null,
dob date not null,
doj date not null,
sex varchar(2) not null,
prof1 varchar(16),
prof2 varchar(16),
salary int not null 
);

create table Software(
name varchar(16) not null,
title varchar(40) not null,
dev_in varchar(16) not null,
scost float,
dcost float,
sold int 
);

create table Studies(
name varchar(16) not null,
splace varchar(16) not null,
course varchar(16) not null,
ccost varchar(16) not null 
);

insert into Programmer (name, dob, doj, sex, prof1, prof2, salary) values ('somdutt', '1966-04-21', '1992-04-21', 'm', 'pascal', 'basic', 3200);
insert into Programmer (name, dob, doj, sex, prof1, prof2, salary) values ('devutt', '1967-05-24', '1997-05-24', 'f', 'cobol', 'c', 3200);
insert into Programmer (name, dob, doj, sex, prof1, prof2, salary) values ('devutt', '1967-05-24', '1997-05-24', 'f', 'cobol', 'c', 3000);

insert into Software (name, title, dev_in, scost, dcost, sold) values ('somdutt', 'parachutes', 'basic', 399.95, 6000, 43);
insert into Software (name, title, dev_in, scost, dcost, sold) values ('devdutt', 'product', 'c', 450.5, 5000, 30);

insert into Studies (name, splace, course, ccost) values ('somdutt', 'sabhari', 'pgdca', '4500');
insert into Studies (name, splace, course, ccost) values ('devdutt', 'bdps', 'dcs', '5000');
insert into Studies (name, splace, course, ccost) values ('somdutt', 'sabhari', 'dcs', '4500');



-- QUERIES - I

-- 1) Find out the SELLING COST AVERAGE for the packages developed in PASCAL?
select avg(scost) from software where dev_in like 'pascal';

-- 2) Display the names and ages of all programmers.
select name AS NAME, FLOOR(DATEDIFF(curdate(),dob)/365) as AGE from programmer;

-- 3) Display the names and ages of all the programmers who have undergone training in DCS course.
select p.name AS NAME, FLOOR(DATEDIFF(curdate(),p.dob)/365) as AGE from programmer p join studies s on p.name=s.name where s.course like 'dcs';

-- 4) What is the highest numbers of copies sold by a package?
select max(sold) from software;

-- 5) Display the names and date of birth of all the programmer born in JANUARY.
select name as NAME, dob as DOB from programmer where month(dob)=4;

-- 6) Display lowest course fee.
select min(ccost) from studies;

-- 7) How many programmer has done PGDCA course.
select count(name) from studies where course like 'dcs';

-- 8) How much revenue has been earned through sales of packages in C.
select sum(sold*scost) as REVENUE from software where dev_in like 'basic';

-- 9) Display the details of software developed by Ramesh?
select * from software where name like 'somdutt';

-- 10) How many programmers studied at SABHARI.
select count(name) from studies where splace like 'sabhari';

-- 11) Display the details of PACKAGES whose sales crossed the 20000 mark.
select * from software where (sold*scost)>2000;

-- 12) Find out the number of copies which should be sold in order to recover the development cost of each package.
select round(dcost/scost) from software;

-- 13) What is the price of the costliest software developed in BASIC?
select max(scost) from software where dev_in like 'basic';

-- 14) Display the details of packages for which development cost has been recovered.
select * from software where scost*sold>=dcost;

-- 15) How many packages were developed in dbase?
select count(title) from software where dev_in like 'dbase';

-- 16) How many programmers studies at paragathi?
select count(name) from studies where splace like 'bdps';

-- 17) How many programmers paid 5000 to 10000 for their course?
select count(name) from studies where ccost>=4000 and ccost<=10000;

-- 18) What is the average course fee?
select avg(ccost) as AverageCourseFee from studies;

-- 19) Display the details of programmers knowing c?
select * from programmer where prof1='basic' or prof2='basic';

-- 20) How many programmers know either Cobol or Pascal?
select count(name) from programmer where prof1 in ('cobol', 'pascal') or prof2 in ('cobol', 'pascal');

-- 21) How many programmers don't know Pascal & C?
select count(name) from programmer where prof1 not in ('c','pascal') and prof2 not in ('c','pascal'); 

-- 22) How old is the oldest male programmers?
select max(FLOOR(DATEDIFF(curdate(),dob)/365)) from programmer where sex like 'm';

-- 23) What is the average age of female programmers?
select avg(FLOOR(DATEDIFF(curdate(),dob)/365)) from programmer where sex like 'f';

-- 24) Calculate the experience in years for each programmers and display along with the names in descending order?
select name,FLOOR(DATEDIFF(curdate(),doj)/365) as experience from programmer order by name desc;

-- 25) Who are the programmers who celebrate their birthday during the current month?
select name from programmer where month(dob)=month(current_date());

-- 26) How many female programmers are there?
select count(name) from programmer where sex='f';

-- 27) What are the languages known by the male programmers?
select distinct prof1 as languages from programmer where sex='m' union select distinct prof2 from programmer where sex='m';

-- 28) What is the Average salary?
select avg(salary) as average_salary from programmer;

-- 29) How many people draw 2000 to 4000?
select name from programmer where salary between 2000 and 4000;

-- 30) Display the details of those who don't know Clipper, Cobol or Pascal?
select * from programmer where prof1 not in ('clipper','cobol','pascal') and prof2 not in ('clipper','cobol','pascal');

-- 31) How many Female programmers knowing C are above 24 years of age?
select count(name) from programmer where sex like 'f' and (prof1='c' or prof2='c') and FLOOR(DATEDIFF(curdate(),dob)/365) > 24;

-- 32) Who are the programmers who will be celebrating their Birthday within a week?
select name from programmer where week(dob)=week(current_date());

-- 33 Display the details of those with less than a year's experience?
select * from programmer where FLOOR(DATEDIFF(curdate(),doj)/365)<1;

-- 34 Display the details of those who will be completing 2 years of service this year?
select * from programmer where FLOOR(DATEDIFF(curdate(),doj)/365)=2;

-- 35 Calculate the amount to be recovered for those packages whose development cost has not been recovered?
select title, (dcost-(scost*sold)) as recover_amount from software where (dcost-(scost*sold))>0;

-- 36) List the packages which have not been sold so far?
select title from software where sold=0;

-- 37) Find out the cost of the software developed by Mary?
select title, scost from software where name='somdutt';

-- 38) Display the institute’s names from the studies table without duplicates?
select distinct splace from studies;

-- 39) How many different courses are mentioned in the studies table?
select distinct course from studies;

-- 40) Display the names of the programmers whose names contain 2 occurrences of the letter A?
select name from programmer where name like '%t%t%';
select name from programmer where name like '%a%a%';

-- 41) Display the names of programmers whose names contain unto 5 characters?
select name from programmer where length(name)>=5;

-- 42) How many female programmers knowing COBOL have more than 2 years experience?
select name from programmer where FLOOR(DATEDIFF(curdate(),doj)/365)>2 and sex='f' and (prof1='cobol' or prof2='cobol');

-- 43) What is the length of the shortest name in the programmer table?
select min(length(name)) from programmer;

-- 44) What is the average development cost of a package developed in COBOL?
select avg(dcost) from software where dev_in='c';

-- 45) Display the name, sex, dob (DD/MM/YY format), doj for all the programmers without using conversion function?
select name, sex,
    CONCAT(
        RIGHT(CONCAT('0', DAY(dob)), 2), '/', 
        RIGHT(CONCAT('0', MONTH(dob)), 2), '/', 
        RIGHT(YEAR(dob), 2)
    ) as DOB,
    CONCAT(
        RIGHT(CONCAT('0', DAY(doj)), 2), '/', 
        RIGHT(CONCAT('0', MONTH(doj)), 2), '/', 
        RIGHT(YEAR(doj), 2)
    ) as DOJ FROM Programmer;

-- 46) Who are the programmers who were born on the last day of the month?
select name from programmer where day(dob) =31 or day(dob) =31;

-- 47) What is the amount paid in salaries of the male programmers who do not know Cobol?
select salary from programmer where sex='m' and (prof1!='cobol' or prof2!='cobol');

-- 48) Display the title, scost, dcost and difference between scost and dcost in descending order of difference?
select title, scost, dcost, (dcost-scost) as diff from software order by diff desc;

-- 49) Display the name, dob, doj of those month of birth and month of joining are same?
select name from programmer where month(dob)=month(doj);

-- 50) Display the names of the packages whose names contain more than 1 word?
select title from software where INSTR(title, ' ') > 0;


-- QUERIES - II

-- 51) Display THE NUMBER OF packages developed in EACH language.
select dev_in as software, count(*) as count from software  group by dev_in;

-- 52) Display THE NUMBER OF packages developed by EACH person.
select name as developer, count(*) as packages from software group by developer;

-- 53) Display THE NUMBER OF male and female programmer.
select sex as gender, count(*) as count from programmer group by sex;

-- 54) Display THE COSTLIEST packages and HIGEST selling developed in EACH language.
select dev_in as package, (select max(scost) from software as s2 where s2.dev_in=s1.dev_in) as costlyprice, (select max(sold) from software as s3 where s3.dev_in=s1.dev_in) as highestselling from software as s1 group by s1.dev_in;

-- 55) Display THE NUMBER OF people BORN in EACH YEAR.
select dob as birthyear, count(*) as birthrate from programmer group by dob;

-- 56) Display THE NUMBER OF people JOINED in EACH YEAR.
select doj as joinyear, count(*) as joinrate from programmer group by doj;

-- 57) Display THE NUMBER OF people BORN in EACH MONTH.
select month(dob) as birthmonth, count(*) as birthrate from programmer group  by month(dob);

-- 58) Display THE NUMBER OF people JOINED in EACH MONTH.
select month(doj) as joinmonth, count(*) as joinrate from programmer group  by month(doj);

-- 59) Display the language wise COUNTS of prof1.
select prof1, count(*) from programmer group by prof1;

-- 60) Display the language wise COUNTS of prof2.
select prof2, count(*) from programmer group by prof2;

-- 61) Display THE NUMBER OF people in EACH salary group.
select salary, count(*) from programmer group by salary;

-- 62) Display THE NUMBER OF people who studied in EACH institute.
select splace as Institute, count(*) from studies group by splace;

-- 63) Display THE NUMBER OF people who studied in EACH course.
select course, count(*) from studies group by course;

-- 64) Display the TOTAL development COST of the packages developed in EACH language.
select dev_in, sum(dcost) from software group by dev_in;

-- 65) Display the selling cost of the package developed in EACH language.
select dev_in, sum(scost) from software group by dev_in;

-- 66) Display the cost of the package developed by EACH programmer.
select name, sum(dcost) from software group by name;

-- 67) Display the sales values of the package developed in EACH programmer.
select name, sum(scost*sold) from software group by name;

-- 68) Display the NUMBER of packages developed by EACH programmer.
select name, count(title) as packagecount from software group by name;

-- 69) Display the sales COST of packages developed by EACH programmer language wise.
select dev_in as title, sum(scost) from software group by dev_in;

-- 70) Display EACH programmers name, costliest package and cheapest packages developed by Him/Her.
select name, max(dcost), min(dcost) from software group by name;

-- 71) Display EACH language name with AVERAGE development cost, AVERAGE cost, selling cost and AVERAGE price per copy.
select dev_in, avg(dcost), avg(scost) from software group by dev_in;

-- 72) Display EACH institute name with NUMBER of courses, AVERAGE cost per course.
select splace, count(course), avg(ccost) from studies group by splace;

-- 73) Display EACH institute name with NUMBER of students.
select splace as institute, count(name) as NumberofStudent from studies group by splace;

-- 74) Display names of male and female programmers.
select name, sex from programmer order by sex;

-- 75) Display the programmer's name and their packages.
select name, title from software order by name;

-- 76) Display the NUMBER of packages in EACH language.
select dev_in, count(title) from software group by dev_in;

-- 77) Display the NUMBER of packages in EACH language for which development cost is less than 1000.
select dev_in, count(title) from software where dcost>1000 group by dev_in;

-- 78) Display the AVERAGE difference BETWEEN scost and dcost for EACH language.
select dev_in, avg(dcost-scost) from software group by dev_in;

-- 79) Display the TOTAL scost, dcsot and amount TO BE recovered for EACH programmer for whose dcost HAS NOT YET BEEN recovered.
select title, sum(scost), sum(dcost) as devcost, sum(dcost-(sold*scost)) as loss from software group by title having devcost>sum(scost*sold);

-- 80) Display highest, lowest and average salaries for THOSE earning MORE than 2000.
select max(salary), min(salary), avg(salary) from programmer where salary>=2000;



-- QUERIES - III

-- 81) Who is the highest paid C programmer?
select name from programmer where salary=(select max(salary) from programmer);

-- 82) Who is the highest paid female cobol programmer?
select * from programmer where salary=(select max(salary) from programmer) and (prof1 like 'cobol' or prof2 like 'cobol') and sex like 'f';

-- 83) Display the name of the HIGEST paid programmer for EACH language (prof1)
select distinct name, salary, prof1 from programmer where (salary,prof1) in (select max(salary),prof1 from programmer group by prof1);

-- 84) Who is the LEAST experienced programmer?
select FLOOR(DATEDIFF(curdate(),doj)/365) as Experience, name from programmer where FLOOR(DATEDIFF(curdate(),doj)/365) = (select min(FLOOR(DATEDIFF(curdate(),doj)/365)) from programmer);

-- 85) Who is the MOST experienced programmer?
select FLOOR(DATEDIFF(curdate(),doj)/365) as Experience, name from programmer where FLOOR(DATEDIFF(curdate(),doj)/365) = (select max(FLOOR(DATEDIFF(curdate(),doj)/365)) from programmer);

-- 86) Which language is known by ONLY ONE programmer?
select prof1 from programmer group by prof1 having prof1 not in (select prof2 from programmer) and count(prof1)=1 union select prof2 from programmer group by prof2 having prof2 not in (select prof1 from programmer) and count(prof2)=1;

-- 87) Who is the YONGEST programmer knowing DBASE?
select FLOOR(DATEDIFF(curdate(),dob)/365) as Age, name, prof1, prof2 from programmer where FLOOR(DATEDIFF(curdate(),dob)/365) = (select min(FLOOR(DATEDIFF(curdate(),dob)/365)) from programmer where prof1 like 'dbase' or prof2 like 'dbase');

-- 88) Which institute has MOST NUMBER of students?
select splace as Institute, COUNT(name) as Student_Count from Studies group by splace order by Student_Count desc limit 1;

-- 89) Who is the above programmer?
select * from programmer;

-- 90) Which female programmer earns MORE than 3000/- but DOES NOT know C, C++, Oracle or Dbase?
select * from programmer where sex like 'f' and salary>3000 and (prof1 not in ('c', 'c++', 'oracle', 'dbase') and prof2 not in ('c', 'c++', 'oracle', 'dbase'));

-- 91) Which is the COSTLIEST course?
select course from studies where ccost = (select max(ccost) from studies);

-- 92) Which course has been done by MOST of the students?
select course from studies group by course order by count(*) desc limit 1;

-- 93) Display name of the institute and course Which has below AVERAGE course fee?
select splace,course from studies where ccost < (select avg(ccost) from studies);

-- 94) Which institute conducts COSTLIEST course?
select splace from studies where ccost = (select max(ccost) from studies);

-- 95) Which course has below AVERAGE number of students?
select course from studies group by course having count(name) < (select avg(student_count) from (select count(name) as student_count from studies group by course) as avg_students);

-- 96) Which institute conducts the above course?
select splace from studies where course in ('dcs','pgdca');

-- 97) Display names of the course WHOSE fees are within 1000(+ or -) of the AVERAGE fee.
select course from studies where ccost < (select avg(ccost)+1000 from studies) and ccost > (select avg(ccost)-1000 from studies);

-- 98) Which package has the HIGEST development cost?
select title,dcost from software where dcost = (select max(dcost) from software);

-- 99) Which package has the LOWEST selling cost?
select title,scost from software where scost = (select min(scost) from software);

-- 100) Who developed the package, which has sold the LEAST number of copies?
select name,sold from software where sold = (select min(sold) from software);

-- 101) Which language was used to develop the package WHICH has the HIGEST sales amount?
select dev_in,scost from software where scost = (select max(scost) from software);

-- 102) How many copies of the package that has the LEAST DIFFRENCE between development and selling cost were sold?
select sold, title from software where title = (select title from software where (dcost-scost)=(select min(dcost-scost) from software));

-- 103) Which is the COSTLIEAST package developed in PASCAL?
select title from software where dcost = (select max(dcost) from software where dev_in like 'pascal');

-- 104) Which language was used to develop the MOST NUMBER of package?
select dev_in from software group by dev_in having max(dev_in) = (select max(dev_in) from software);

-- 105) Which programmer has developed the HIGEST NUMBER of package?
select name from software group by name having max(name) = (select max(name) from software);

-- 106) Who is the author of the COSTLIEST package?
select name,dcost from software where dcost = (select max(dcost) from   software);

-- 107) Display names of packages WHICH have been sold LESS THAN the AVERAGE number of copies?
select title from software where sold < (select avg(sold) from software);

-- 108) Who are the female programmers earning MORE than the HIGEST paid male programmers?
select name from programmer where sex = 'f' and salary > (select(max(salary)) from programmer where sex = 'm');

-- 109) Which language has been stated as prof1 by MOST of the programmers?
select prof1 from programmer group by prof1 having prof1 = (select max(prof1) from programmer);

-- 110) Who are the authors of packages, WHICH have recovered MORE THAN double the development cost?
select name from software where sold*scost > 2*dcost;

-- 111) Display programmer names and CHEAPEST package developed by them in EACH language?
select name,title from software where dcost in (select min(dcost) from software group by dev_in);

-- 112) Who is the YOUNGEST male programmer born in 1965?
select name from programmer where dob=(select (max(dob)) from programmer where year(dob) like '1965');

-- 113) Display language used by EACH programmer to develop the HIGEST selling and LOWEST selling package.
select name, dev_in from software where sold in (select max(sold) from software group by name) union select name, dev_in from software where sold in (select min(sold) from software group by name); 

-- 114) Who is the OLDEST female programmer WHO joined in 1992
select name from programmer where doj=(select (min(doj)) from programmer where year(doj) like '1992');

-- 115) In WHICH year where the MOST NUMBER of programmer born?
select distinct year(dob) from programmer where year(doj) = (select min(year(doj)) from programmer);

-- 116) In WHICH month did MOST NUMBRER of programmer join?
select distinct month(doj) from programmer where month(doj) = (select min(month(doj)) from programmer);

-- 117) In WHICH language are MOST of the programmer's proficient?
select prof as proficient_language from ( select prof1 as prof, count(*) as num_programmers from programmer group by prof1 union all select prof2 as prof, count(*) as num_programmers from programmer group by prof2) 
as combined group by prof having count(*) = (select max(num_programmers) from (select prof1 as prof, count(*) as num_programmers from programmer group by prof1 union all select prof2 as prof, count(*) as num_programmers from programmer group by prof2) as inner_combined);

-- 118) Who are the male programmers earning BELOW the AVERAGE salary of female programmers?
select name from programmer where sex = 'm' and salary < (select(avg(salary))from programmer where sex = 'f');


-- QUERIES - IV

-- 119) Display the details of THOSE WHO are drawing the same salary.
select name, salary from programmer where salary = any(select salary from programmer p group by salary having salary=p.salary and count(*)>1);

-- 120) Display the details of software developed by male programmers earning MORE than 3000.
select software.* from programmer p,software s where p.name=s.name and salary>3000 and sex='m';

-- 121) Display details of packages developed in PASCAL by female programmers.
select s.* from programmer p,software s where p.name=s.name and sex='f' and dev_in='pascal';

-- 122) Display the details of the programmer WHO joined BEFORE 1990. 
select * from programmer where year(doj)<1990;

-- 123) Display details of software developed in C by female programmers of PRAGATHI.
select s.* from software s,studies st,programmer p where s.name=st.name and p.name=s.name and sex='f' and splace='pragathi';

-- 124) Display NUMBER of packages NUMBER of copies sold and sales value of EACH programmer Institute-wise.
select studies.splace, count(software.dev_in), count(software.sold), sum(software.sold*software.scost) from software,studies where software.name=studies.name group by studies.splace;

-- 125) Display details of software developed in DBASE by male programmers WHO belong to the institute on which MOST NUMBER OF programmer’s studies.
select software.* from programmer,software,studies where programmer.name=software.name and software.name=studies.name and programmer.name=studies.name and sex='m' and dev_in='dbase' and splace= (select splace from studies group by splace having count(splace) =(select max(count(splace))from studies group by splace));

-- 126) Display the details of the software that was developed by male programmers born BEFORE 1965 and female programmers born AFTER 1975.
select s.* from programmer p,software s where s.name=p.name and (sex='m' and year(dob)<1965 ) or (sex='f' and year(dob)>1975);

-- 127) Display the details of the software that was developed in the language that is NOT the programmer’s first proficiency. 
select distinct s.* from software s, programmer p where p.prof1 <> s.dev_in and s.name = p.name;

-- 128) Display details of software that was developed in the language which is NEITHER first NOR second proficiency of the programmer.
select s.* from programmer p,software s where s.name=p.name and (dev_in <> prof1 and dev_in <> prof2);

-- 129) Display details of software developed by male students of SABHARI.
select s.* from programmer p,software s,studies st where p.name=s.name and s.name=st.name and sex='m' and splace='sabhari';

-- 130) Display the names of programmers WHO HAVE NOT developed any package.
select name from programmer where name not in (select name from software);

-- 131) What is the total cost of the software developed by the programmers by APPLE?
select sum(scost) from software s,studies st where s.name=st.name and splace='apple';

-- 132) Who are the programmers WHO JOINED in the same day?
select a.name,a.doj from programmer a,programmer b where a.doj=b.doj and a.name <> b.name;

-- 133) Who are the programmers WHO HAVE THE SAME PROF2?
select name from programmer where prof2 = any(select prof2 from programmer group by prof2 having count(*) >1);

-- 134) Display the total sales values of software, institutes-wise.
select studies.splace,sum(software.sold*software.scost) from software,studies where studies.name=software.name group by studies.splace;

-- 135) In which institutes did the person who developed the COSTLIEST package study?
select splace from software st,studies s where s.name=st.name group by splace,dcost having max(dcost)=(select max(dcost) from software);

-- 136) Which language listed in prof1 and prof2 HAS NOT BEEN used to develop any package? 
select prof1 from programmer where prof1 not in(select dev_in from software) union select prof2 from programmer where prof2 not in(select dev_in from software);

-- 137) How much does the person WHO developed the HIGHEST selling package earn and WHAT course did he/she undergo?
select p1.salary,s2.course from programmer p1,software s1,studies s2 where p1.name=s1.name and s1.name=s2.name and scost=(select max(scost) from software);

-- 138) How many months will it take for each programmer to recover the cost of the course underwent?
select p.name,ceil(ccost/salary) from programmer p,studies s where s.name=p.name;

-- 139) Which is the COSTLIEST package developed by a person with under 3 year’s expenences?
select s.title as costliest_package from software s join (select name from programmer where doj > date_sub(curdate(), interval 3 year)) as p on s.name = p.name order by s.scost desc limit 1;

-- 140) What is the AVERAGE salary for those WHOSE software's sales value is more than 50,000?
select avg(salary) from programmer p,software s where p .name=s.name and sold*scost>50000;

-- 141) How many packages were developed by the students WHO studied in the institute that Charge the LOWEST course fee?
select count(s.name) from software s,studies st where s.name=st.name group by s.name,ccost having min(ccost)=(select min(ccost) from studies);

-- 142) How many packages were developed by the person WHO developed the CHEAPEST package? Where did he\she study?
select count(*) from programmer p,software s where s.name=p.name group by dev_in having min(dcost)=(select min(dcost) from software);

-- 143) How many packages were developed by female programmers earning MORE than the HIGHEST paid male programmer?
select count(dev_in) from programmer p,software s where s.name=p.name and sex='f' and salary>(select max(salary) from programmer p,software s where s.name=p.name and sex='m');

-- 144) How many packages were developed by the MOST experienced programmers from BDPS?
select count(x.name) from software x, programmer y, studies z where FLOOR(DATEDIFF(curdate(),y.doj)/365) = (select max(FLOOR(DATEDIFF(curdate(),y.doj)/365)) from programmer y where z.splace = 'bdps' and y.name = z.name) and x.name=y.name;

-- 145) List the programmers (from software table) and institutes they studied, including those WHO DIDN'T develop any package.
select name,splace from studies where name not in(select name from software);

-- 146) List each profit with the number of programmers having that prof1 and the number of packages developed in that prof1.
select count(*),sum(scost*sold-dcost) "profit" from software where dev_in in (select prof1 from programmer) group by dev_in;

-- 147) List programmer names (from programmer table) and number of packages EACH developed. 
select p.name,count(s.dev_in) from programmer p left join software s on p.name=s.name group by p.name;

-- 148) List all the details of programmers who have done a course at S.S.I.L
select programmer.* from programmer,studies where splace='sabhari' and programmer.name=studies.name;

--   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   ***   --