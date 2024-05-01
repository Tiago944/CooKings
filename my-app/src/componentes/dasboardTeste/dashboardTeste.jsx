import React, { useEffect, useState } from "react";
import supabase from "../../supabaseClient";
import { Link } from "react-router-dom";
import CardTeste from "./CardTeste";

const DashboardTeste = () => {
  const [categorias, setCategorias] = useState([]);

  async function getCategorias() {
    try {
      const { data, error } = await supabase.from("Ingredients").select();

      if (error) {
        throw error;
      }

      setCategorias(data);
    } catch (error) {
      console.error("Error fetching categorias:", error.message);
    }
  }

  async function deleteCategoria(id) {
    try {
      await supabase.from("Ingredients").delete().eq("idingridients", id);

      getCategorias();
    } catch (error) {
      console.error("Error deleting categoria:", error.message);
    }
  }

  useEffect(() => {
    getCategorias();
  }, []);

  return (
    <>
      <h1>Categorias de Ingredientes</h1>

      {categorias.map((categoria) => (
        <div key={categoria.idingridients}>
          <CardTeste
            id={categoria.idingridients}
            name={categoria.name}
            category={categoria.category}
            description={categoria.description}
            imagem={categoria.image}
            deleteCategoria={deleteCategoria}
          />
        </div>
      ))}
      <Link to="/NovoIngrediente">
        <button>Adicionar Receita</button>
      </Link>
    </>
  );
};

export default DashboardTeste;