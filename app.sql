create database egg_paradigm;

use egg_paradigm;

--- 用户表
create table `user`(
  `id` int not null auto_increment,
  `username` varchar(20) default null comment '用户名',
  `password` varchar(64) default null comment '密码',
  `phone` varchar(20) default null comment '电话',
  `createTime` timestamp default null comment '创建时间',
  `updateTime` timestamp default null comment '更新时间',
  primary key(`id`)
)engine=InnoDB auto_increment=1 default charset=utf8 comment='用户表';
