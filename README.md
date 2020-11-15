
// View representa um bloco, como <div> <header> <footer>, etc.., tudo que representa um bloco vai ser uma View
<View style={styles.container}>
      
//Tudo que for um texto vai ser representado por um Text
<Text>Hello World</Text>

// vai configurar a barra de status do app de forma automatica
<StatusBar style="auto" />

// no react-native nao existe css, o style representa toda a estilização dos blocos/tags
const styles = StyleSheet.create({
// os styles do objeto vao ser aplicados na tag do elemento
// detalhe = nao existem herança de estilos, para estilizar um elemento tem que criar um style para ele

  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

      