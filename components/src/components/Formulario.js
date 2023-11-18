import React, { useState } from "react";
import { Modal, Text, Button, StyleSheet, View, TextInput, ScrollView, Pressable, Alert } from "react-native";
import DateTimePicker from "react-native-ui-datepicker";

const Formulario = ({ modalVisible, setModalVisible }) => {
  const [fecha, setFecha] = useState(new Date());
  const [paciente, setPaciente] = useState("");
  const [nombrePropietario, setPropietario] = useState("");
  const [email, setEmail] = useState("");
  const [telefono, setTelefono] = useState("");
  const [sintomas, setSintomas] = useState("");

  const [errorPaciente, setErrorPaciente] = useState(false);
  const [errorPropietario, setErrorPropietario] = useState(false);
  const [errorEmail, setErrorEmail] = useState(false);
  const [errorTelefono, setErrorTelefono] = useState(false);
  const [errorFecha, setErrorFecha] = useState(false);
  const [errorSintomas, setErrorSintomas] = useState(false);

  const handleAgregarPaciente = () => {
    console.log("Validando campos...");

    setErrorPaciente(!paciente);
    setErrorPropietario(!nombrePropietario);
    setErrorEmail(!email);
    setErrorTelefono(!telefono);
    setErrorFecha(!fecha);
    setErrorSintomas(!sintomas);

    if (!paciente || !nombrePropietario || !email || !telefono || !fecha || !sintomas) {
      Alert.alert("Error", "Todos los campos son obligatorios");
      return;
    }

    console.log("Paciente agregado:", {
      paciente,
      nombrePropietario,
      email,
      telefono,
      fecha,
      sintomas,
    });

    setModalVisible(false);
  };

  return (
    <Modal animationType="slide" visible={modalVisible}>
      <View style={styles.contenido}>
        <ScrollView>
          <Text style={styles.titulo}>
            Nueva {""}
            <Text style={styles.tituloBold}>Cita</Text>
          </Text>

          <Pressable style={styles.btnCancelar} onPress={() => setModalVisible(!modalVisible)}>
            <Text style={styles.btnCancelarTexto}>X Cancelar</Text>
          </Pressable>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre del paciente
              <TextInput
                style={styles.input}
                placeholder="Nombre del paciente "
                placeholderTextColor={"#666"}
                value={paciente}
                onChangeText={(text) => {
                  console.log("Paciente:", text);
                  setPaciente(text);
                }}
              />
              {errorPaciente && <Text style={styles.errorText}>Este campo es obligatorio</Text>}
            </Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>
              Nombre del propietario
              <TextInput
                style={styles.input}
                placeholder="Nombre del propietario "
                placeholderTextColor={"#666"}
                value={nombrePropietario}
                onChangeText={(text) => {
                  console.log("Propietario:", text);
                  setPropietario(text);
                }}
              />
              {errorPropietario && <Text style={styles.errorText}>Este campo es obligatorio</Text>}
            </Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>
              Email propietario
              <TextInput
                style={styles.input}
                placeholder="E-mail del propietario"
                placeholderTextColor={"#666"}
                keyboardType="email-address"
                value={email}
                onChangeText={(text) => {
                  console.log("Email:", text);
                  setEmail(text);
                }}
              />
              {errorEmail && <Text style={styles.errorText}>Este campo es obligatorio</Text>}
            </Text>
          </View>
          <View style={styles.campo}>
            <Text style={styles.label}>
              Telefono propietario
              <TextInput
                style={styles.input}
                placeholder="Telefono del propietario"
                placeholderTextColor={"#666"}
                keyboardType="number-pad"
                value={telefono}
                onChangeText={(text) => {
                  console.log("Telefono:", text);
                  setTelefono(text);
                }}
              />
              {errorTelefono && <Text style={styles.errorText}>Este campo es obligatorio</Text>}
            </Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Fecha
              <View style={styles.FechaContenedor}>
                <DateTimePicker date={fecha} locale="es" mode="date" onValueChange={(date) => setFecha(date)} />
              </View>
              {errorFecha && <Text style={styles.errorText}>Este campo es obligatorio</Text>}
            </Text>
          </View>

          <View style={styles.campo}>
            <Text style={styles.label}>
              Sintomas
              <TextInput
                style={[styles.input, styles.SintomasInput]}
                placeholder="Sintomas paciente"
                placeholderTextColor={"#666"}
                value={sintomas}
                onChangeText={(text) => {
                  console.log("Sintomas:", text);
                  setSintomas(text);
                }}
                multiline={true}
                rows={4}
              />
              {errorSintomas && <Text style={styles.errorText}>Este campo es obligatorio</Text>}
            </Text>
          </View>
          <Pressable style={styles.btnNuevaCita} onPress={handleAgregarPaciente}>
            <Text style={styles.btnNuevaCitaTexto}>Agregar paciente</Text>
          </Pressable>

        </ScrollView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  contenido: {
    backgroundColor: "#6D28D9",
    flex: 1,
  },
  titulo: {
    fontSize: 30,
    fontWeight: "600",
    textAlign: "center",
    marginTop: 30,
    color: "#fff",
  },
  tituloBold: {
    fontWeight: "900",
  },
  campo: {
    marginTop: 10,
    marginHorizontal: 30,
  },
  label: {
    color: "#FFF",
    marginBottom: 10,
    marginTop: 15,
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    backgroundColor: "#FFF",
    padding: 15,
    borderRadius: 10,
  },
  FechaContenedor: {
    backgroundColor: "#5827A4",
    borderRadius: 10,
  },
  SintomasInput: {
    height: 100,
  },
  btnCancelar: {
    marginVertical: 30,
    backgroundColor: "#5827A4",
    marginHorizontal: 30,
    padding: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#FFF",
  },
  btnCancelarTexto: {
    color: "#FFF",
    textAlign: "center",
    fontWeight: "900",
    fontSize: 16,
    textTransform: "uppercase,",
  },
  btnNuevaCita: {
    marginVertical: 50,
    backgroundColor: '#F59E0B',
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 10,
  },
  btnNuevaCitaTexto: {
    textAlign: 'center',
    color: '#5827A4',
    textTransform: 'uppercase',
    fontWeight: '900',
    fontSize: 16,
  },
});

export default Formulario;
