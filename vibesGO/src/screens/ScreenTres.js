import React, { useState, useEffect } from "react";
import { View, Text, Button, FlatList, StyleSheet, TouchableOpacity } from "react-native";

function ScreenTres() {
  const [productos, setProductos] = useState([]);
  const [categoriasSeleccionadas, setCategoriasSeleccionadas] = useState([]);
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const categoriasDisponibles = ["Buzos", "Pantalones", "Remeras", "Otros"];

  useEffect(() => {
    handleObtenerProductos();
  }, []);

  const handleObtenerProductos = (categoriaSeleccionada) => {
    // Realiza una solicitud al servidor para obtener los productos de la categoría seleccionada
    fetch(`http://192.168.0.11:3000/api/productos?categoria=${categoriaSeleccionada}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw Error('La solicitud no fue exitosa');
        }
      })
      .then((result) => {
        console.log('Datos de productos:', result);
        setProductos(result);
      })
      .catch((error) => {
        console.error('Error en la solicitud:', error);
      });
  };
  

  const handleSeleccionarCategoria = (categoria) => {
    // Manejo de la selección/deselección de categorías
    if (categoriasSeleccionadas.includes(categoria)) {
      setCategoriasSeleccionadas(categoriasSeleccionadas.filter((c) => c !== categoria));
    } else {
      setCategoriasSeleccionadas([...categoriasSeleccionadas, categoria]);
    }
  };

  const handleMostrarFiltros = () => {
    setMostrarFiltros(!mostrarFiltros);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titleText}>Productos</Text>

      <Button title="Filtros" onPress={handleMostrarFiltros} />

      {mostrarFiltros && (
        <View style={styles.filtrosContainer}>
          <Text style={styles.subTitle}>Categorías:</Text>
          {categoriasDisponibles.map((categoria, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoriaItem,
                categoriasSeleccionadas.includes(categoria) && styles.categoriaItemSeleccionada,
              ]}
              onPress={() => handleSeleccionarCategoria(categoria)}
            >
              <Text style={styles.categoriaText}>{categoria}</Text>
            </TouchableOpacity>
          ))}
          <Button
            title="Aplicar Filtros"
            onPress={() => {
              handleObtenerProductos(categoriasSeleccionadas);
            }}
          />
        </View>
      )}

      <FlatList
        data={productos}
        keyExtractor={(item) => item.idproducto.toString()}
        renderItem={({ item }) => (
          <View style={styles.productContainer}>
            <Text style={styles.productName}>{item.nombre}</Text>
            <Text style={styles.productInfo}>Precio: ${item.precio}</Text>
            <Text style={styles.productInfo}>Cantidad: {item.cantidad}</Text>
            <Text style={styles.productInfo}>Información: {item.informacion}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 16,
  },
  filtrosContainer: {
    marginBottom: 16,
  },
  subTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  categoriaItem: {
    borderWidth: 1,
    borderColor: "gray",
    padding: 8,
    marginRight: 8,
    marginBottom: 8,
  },
  categoriaItemSeleccionada: {
    backgroundColor: "lightblue",
  },
  categoriaText: {
    fontSize: 16,
  },
  productContainer: {
    marginBottom: 16,
  },
  productName: {
    fontSize: 20,
    fontWeight: "bold",
  },
  productInfo: {
    fontSize: 16,
  },
});

export default ScreenTres;
