--=================================================================
create tablespace ts_hotel datafile 'c:/ts_hotel/df_hotel.dbf' size 50m;
alter session set "_ORACLE_SCRIPT"=true;
create user hotel identified by hotel default tablespace ts_hotel temporary tablespace temp;
create user recepcion1 identified by recepcion1 default tablespace ts_hotel temporary tablespace temp;
create user recepcion2 identified by recepcion1 default tablespace ts_hotel temporary tablespace temp;
grant connect, create session, resource, create view, unlimited tablespace to hotel;
grant connect, create session to recepcion1;
grant connect, create session to recepcion2;
--=================================================================

alter session set NLS_DATE_FORMAT = 'DD-MM-YYYY HH24:MI:SS';
create sequence sq_auto_habi increment by 1 start with 1 nocache;
create sequence sq_auto_hues increment by 1 start with 1 nocache;
create sequence sq_auto_rese increment by 1 start with 1 nocache;
create sequence sq_auto_deha increment by 1 start with 1 nocache;

create table habitacion(
idxx_habi number primary key not null,
nume_habi number not null, --number de la habitacion
nuca_habi number not null, --numero de camas
nuba_habi number not null, --number de banos
piso_habi number,
colo_habi varchar2(30), --color de habitacion
tele_habi number(1,0), --television
aire_habi number(1,0), --aire acondicionado
desc_habi varchar2(60), --decripcion
prec_habi number(5,2) not null
);

create table huesped(
idxx_hues number primary key not null,
cedu_hues varchar2(10) not null, --cedula
nomb_hues varchar(30) not null,
apel_hues varchar(30) not null,
dire_hues varchar(50),
tele_hues varchar(10),
emai_hues varchar(30)
);

create table reserva(
idxx_rese number primary key not null,
chin_rese date not null, --check in
chou_rese date not null, --check out
hlla_rese number, --hora de llegada aproximada
proc_rese varchar2(30), --procedencia
subt_rese number(5,2) not null, --subtotal
fk_idxx_hues number not null,
constraint rel_rese_hues foreign key (fk_idxx_hues) references huesped(idxx_hues)
);

create table detalle_habitacion(
idxx_deha number primary key not null,
fk_idxx_rese number not null,
fk_idxx_habi number not null,
constraint rel_deha_rese foreign key (fk_idxx_rese) references reserva(idxx_rese) on delete cascade,
constraint rel_deha_habi foreign key (fk_idxx_habi) references habitacion(idxx_habi) on delete cascade
);

--############################# PROCEDURE (HABITACION) ################################
create or replace
procedure insertar_habitacion(nume number, nuca number, nuba number, piso number, colo varchar2, tele number, aire number, descp varchar, prec float)
is
begin
    insert into habitacion (idxx_habi, nume_habi, nuca_habi, nuba_habi, piso_habi, colo_habi, tele_habi, aire_habi, desc_habi, prec_habi) 
    values (sq_auto_habi.nextval, nume, nuca, nuba, piso, colo, tele, aire, descp, prec);
    commit;
end;

create or replace
procedure actualizar_habitacion_for_id (idxx number, nume number, nuca number, nuba number, piso number, colo varchar2, tele number, aire number, descp varchar, prec float)
is
begin
    update habitacion set nume_habi = nume, nuca_habi = nuca, nuba_habi = nuba, piso_habi = piso, colo_habi = colo, tele_habi = tele, aire_habi = aire
    , desc_habi = descp, prec_habi = prec where idxx_habi = idxx;
    commit;
end;

create or replace
procedure eliminar_habitacion_for_id (idxx number)
is
begin
    delete from habitacion where idxx_habi = idxx;
    commit;
end;

--############################# PROCEDURE (HUESPED) ################################
create or replace
procedure insertar_huesped (cedu varchar2, nomb varchar2, apel varchar2, dire varchar2, tele varchar2, emai varchar2, idxx number default sq_auto_hues.nextval)
is
begin
    insert into huesped (idxx_hues, cedu_hues, nomb_hues, apel_hues, dire_hues, tele_hues, emai_hues) values
    (idxx, cedu, nomb, apel, dire, tele, emai);
    commit;
end;

create or replace
procedure actualizar_huesped_for_id (idxx number, cedu varchar2, nomb varchar2, apel varchar2, dire varchar2, tele varchar2, emai varchar2)
is
begin
    update huesped set cedu_hues = cedu, nomb_hues = nomb, apel_hues = apel, dire_hues = dire, tele_hues = tele, emai_hues = emai
    where idxx_hues = idxx;
    commit;
end;

create or replace
procedure eliminar_huesped_for_id (idxx number)
is
begin
    delete from huesped where idxx_hues = idxx;
    commit;
end;

--############################# PROCEDURE (RESERVA) ################################
descr reserva;
descr huesped;
descr detalle_habitacion;
descr detalle_huesped;

create or replace
procedure   insertar_reserva (chin varchar2, chou varchar2, hlla number, proc varchar2, subt float
, cedu varchar2, nomb varchar2, apel varchar2, dire varchar2, telef varchar2, emai varchar2
, id_habi number)
is
    id_hues number;
    id_rese number;
begin
    id_hues := sq_auto_hues.nextval;
    id_rese := sq_auto_rese.nextval;
    
    insertar_huesped(cedu, nomb, apel, dire, telef, emai, id_hues);

    insert into reserva (idxx_rese, chin_rese, chou_rese, hlla_rese, proc_rese, subt_rese, fk_idxx_hues) values
    (id_rese, to_date(chin, 'YYYY-MM-DD HH24:MI:SS'), to_date(chou, 'YYYY-MM-DD HH24:MI:SS'), hlla, proc, subt, id_hues);
    insert into detalle_habitacion (idxx_deha, fk_idxx_rese, fk_idxx_habi) values
    (sq_auto_deha.nextval, id_rese, id_habi);  
    commit;
end;

select * from habitacion;
select * from reserva;
select * from detalle_habitacion;
descr reserva;
begin
    insertar_reserva ('2023-01-29', '2023-01-30', 8, 'manta', 0, '1234', 'pato', 'loco', 'su casa', '09912345', 'ploco@gmail.com', 1);
end;

create or replace
procedure actualizar_reserva_for_id (idxx number, chin varchar2, chou varchar2, hlla number, proc varchar2, subt float)
is
begin
    update reserva set chin_rese = to_date(chin, 'YYYY-MM-DD HH24:MI:SS'), chou_rese = to_date(chou, 'YYYY-MM-DD HH24:MI:SS'), hlla_rese = hlla, proc_rese = proc, subt_rese = subt
    where idxx_rese = idxx;
    commit;
end;

create or replace 
procedure actualizar_reserva_add_habitacion (id_rese number, id_habi number)
is  
begin        
    insert into detalle_habitacion (idxx_deha, fk_idxx_rese, fk_idxx_habi) values
    (sq_auto_deha.nextval, id_rese, id_habi);    
    commit;
end;


create or replace
procedure eliminar_Reserva_for_id (idxx number)
is
begin
    delete from detalle_habitacion where fk_idxx_rese = idxx;    
    delete from reserva where idxx_rese = idxx;
    commit;
end;
--############################# FUNCION ################################
create or replace
function calcular_iva(subtotal float, porcentaje number)
return float
is
begin
    return ((subtotal * porcentaje)/100);
end;

create or replace
function calcular_total(iva float, subtotal float)
return float
is
begin
return (iva + subtotal);
end;

create or replace
function calcular_dias_rest(chin data, chou data)
return number
is
begin
    return (to_char(chin, 'DD') - to_char(chou, 'DD'));
end;

--############################# VISTAS ################################
select * from huesped;
select * from habitacion;
select * from detalle_habitacion;
select * from reserva;

create view reserva_detallada as (
select idxx_rese, chin_rese, chou_rese, hlla_rese, proc_rese, nume_habi, piso_habi, cedu_hues, nomb_hues, apel_hues, subt_rese
from reserva r, detalle_habitacion dh, huesped hu, habitacion ha
where dh.fk_idxx_rese=r.idxx_rese and dh.fk_idxx_habi=ha.idxx_habi and r.fk_idxx_hues=hu.idxx_hues
);
drop view reserva_detallada;

select * from reserva_detallada;