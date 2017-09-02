create database lunch_db;


use lunch_db;

create table groups(
    group_id int not null auto_increment,
    group_name varchar(255) not null,
    group_owner_id int not null,
    primary key ( group_id )
);



create table group_user_member (
    group_id int not null,
    user_id int not null
);


create table user (
    user_id int not null auto_increment,
    email varchar(255),
    user_name varchar(255) not null,
    user_password varchar(255),
    primary key (user_id)
); 


create table orders (
    order_id int not null auto_increment,
    order_name varchar(255),
    order_code varchar(10),
    created_by int,
    group_id int,
    active BINARY,
    start_time datetime,
    end_time datetime,
    duration int,
    primary key (order_id)
);


create table order_line (
    order_line_id int not null auto_increment,
    order_id int not null,
    item varchar(20),
    qty int,
    unit_type varchar(5),
    primary key (order_line_id)
)