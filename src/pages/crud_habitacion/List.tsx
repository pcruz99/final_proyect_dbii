import { ListHabitacion } from "@/sections/habitacion";
import { Button } from "flowbite-react";

const List = () => {
  return (
    <>
      <ListHabitacion />
    </>
  );
};

export default List;

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time
import { GetServerSideProps } from "next";
import { habitacion } from "database";

export const getServerSideProps: GetServerSideProps = async (ctx) => {

  habitacion().then((req) =>{
    console.log(req);
    
  })
  
  
  

  return {
    props: {},
  };
};
