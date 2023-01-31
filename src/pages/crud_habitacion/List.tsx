import { GetServerSideProps } from "next";
import { habitacion } from "database";
import { ListHabitacion } from "@/sections/habitacion";
import { Button } from "flowbite-react";

const List = () => {
  return (
    <>
      <ListHabitacion />
    </>
  );
};

// You should use getServerSideProps when:
// - Only if you need to pre-render a page whose data must be fetched at request time

export const getServerSideProps: GetServerSideProps = async (ctx) => {
    
  return {
    props: {},
  };
};
