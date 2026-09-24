import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  Alert
} from 'react-native';


const modulos = {

  Aluno: {
    titulo: 'Alunos',
    campos: ['Nome', 'CPF', 'Data de nascimento', 'E-mail', 'Telefone']
  },

  Professor: {
    titulo: 'Professores',
    campos: ['Nome', 'CPF', 'E-mail', 'Telefone', 'Especialidade']
  },

  Turma: {
    titulo: 'Turmas',
    campos: ['Nome da turma', 'Ano', 'Turno', 'Curso', 'Professor']
  },

  Curso: {
    titulo: 'Cursos',
    campos: ['Nome do curso', 'Código', 'Duração', 'Descrição']
  },

  Disciplina: {
    titulo: 'Disciplinas',
    campos: ['Nome da disciplina', 'Código', 'Carga horária', 'Professor']
  },

  Matricula: {
    titulo: 'Matrículas',
    campos: ['Aluno', 'Curso', 'Turma', 'Data da matrícula', 'Situação']
  },

  Responsavel: {
    titulo: 'Responsáveis',
    campos: ['Nome', 'CPF', 'Telefone', 'E-mail', 'Parentesco']
  },

  Avaliacao: {
    titulo: 'Avaliações',
    campos: ['Aluno', 'Disciplina', 'Nota', 'Data', 'Descrição']
  },

  Coordenador: {
    titulo: 'Coordenadores',
    campos: ['Nome', 'CPF', 'E-mail', 'Telefone', 'Curso']
  },

  Boletim: {
    titulo: 'Boletins',
    campos: ['Aluno', 'Curso', 'Disciplina', 'Média', 'Situação']
  }

};



function Botao({ texto, onPress, vermelho = false }) {

  return (
    <TouchableOpacity
      style={[
        styles.botao,
        vermelho && styles.botaoVermelho
      ]}
      onPress={onPress}
    >
      <Text style={styles.textoBotao}>
        {texto}
      </Text>
    </TouchableOpacity>
  );

}



function HomeScreen({ navegar }) {

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.logo}>
          APP SCHOLAR
        </Text>

        <Text style={styles.subtitulo}>
          Sistema de Gestão Escolar
        </Text>

      </View>


      <View style={styles.cardPrincipal}>

        <Text style={styles.titulo}>
          Bem-vindo ao App Scholar!
        </Text>

        <Text style={styles.texto}>
          Sistema desenvolvido para facilitar
          o gerenciamento de informações escolares.
        </Text>

      </View>


      <Text style={styles.tituloSecao}>
        Módulos do sistema
      </Text>


      <Botao
        texto="👨‍🎓 Alunos"
        onPress={() => navegar('menuAluno')}
      />

      <Botao
        texto="👨‍🏫 Professores"
        onPress={() => navegar('menuProfessor')}
      />

      <Botao
        texto="🏫 Turmas"
        onPress={() => navegar('menuTurma')}
      />

      <Botao
        texto="📚 Cursos"
        onPress={() => navegar('menuCurso')}
      />

      <Botao
        texto="📖 Disciplinas"
        onPress={() => navegar('menuDisciplina')}
      />

      <Botao
        texto="📝 Matrículas"
        onPress={() => navegar('menuMatricula')}
      />

      <Botao
        texto="👪 Responsáveis"
        onPress={() => navegar('menuResponsavel')}
      />

      <Botao
        texto="📊 Avaliações"
        onPress={() => navegar('menuAvaliacao')}
      />

      <Botao
        texto="👔 Coordenadores"
        onPress={() => navegar('menuCoordenador')}
      />

      <Botao
        texto="📋 Boletins"
        onPress={() => navegar('menuBoletim')}
      />


      <Botao
        texto="ℹ️ Sobre o aplicativo"
        onPress={() => navegar('sobre')}
      />

    </ScrollView>
  );

}



function SobreScreen({ voltar }) {

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.logo}>
          APP SCHOLAR
        </Text>

        <Text style={styles.subtitulo}>
          Sobre o aplicativo
        </Text>

      </View>


      <View style={styles.card}>

        <Text style={styles.titulo}>
          Sobre o App Scholar
        </Text>

        <Text style={styles.texto}>
          O App Scholar é um sistema de gestão
          escolar desenvolvido para organizar
          informações de alunos, professores,
          turmas, cursos e outros dados acadêmicos.
        </Text>

        <Text style={styles.texto}>
          O projeto foi desenvolvido utilizando
          React Native e Expo.
        </Text>

        <Text style={styles.texto}>
          Desenvolvido para a disciplina de
          Desenvolvimento de Sistemas.
        </Text>

      </View>


      <Botao
        texto="← Voltar"
        onPress={voltar}
      />

    </ScrollView>
  );

}


function MenuModulo({
  modulo,
  navegar,
  voltar
}) {

  const dados = modulos[modulo];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.logo}>
          APP SCHOLAR
        </Text>

        <Text style={styles.subtitulo}>
          {dados.titulo}
        </Text>

      </View>


      <View style={styles.card}>

        <Text style={styles.titulo}>
          Gerenciamento de {dados.titulo}
        </Text>

        <Text style={styles.texto}>
          Escolha uma das opções abaixo:
        </Text>

      </View>


      <Botao
        texto={`➕ Cadastrar ${modulo}`}
        onPress={() =>
          navegar(`cadastro_${modulo}`)
        }
      />


      <Botao
        texto={`🔎 Consultar ${dados.titulo}`}
        onPress={() =>
          navegar(`consulta_${modulo}`)
        }
      />


      <Botao
        texto={`✏️ Editar ${modulo}`}
        onPress={() =>
          navegar(`editar_${modulo}`)
        }
      />


      <Botao
        texto="← Voltar"
        onPress={voltar}
      />

    </ScrollView>
  );

}



function CadastroScreen({
  modulo,
  navegar
}) {

  const dados = modulos[modulo];

  const [valores, setValores] = useState({});


  function atualizar(campo, valor) {

    setValores({
      ...valores,
      [campo]: valor
    });

  }


  function salvar() {

    Alert.alert(
      'Sucesso!',
      `${modulo} cadastrado com sucesso.`
    );

  }


  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.logo}>
          APP SCHOLAR
        </Text>

        <Text style={styles.subtitulo}>
          Cadastro de {modulo}
        </Text>

      </View>


      <View style={styles.card}>

        <Text style={styles.titulo}>
          Novo cadastro
        </Text>


        {dados.campos.map((campo, index) => (

          <View key={index}>

            <Text style={styles.label}>
              {campo}
            </Text>

            <TextInput
              style={styles.input}
              placeholder={`Digite ${campo.toLowerCase()}`}
              value={valores[campo] || ''}
              onChangeText={(texto) =>
                atualizar(campo, texto)
              }
            />

          </View>

        ))}


        <Botao
          texto="💾 Salvar cadastro"
          onPress={salvar}
        />


        <Botao
          texto="← Voltar"
          onPress={() =>
            navegar(`menu${modulo}`)
          }
        />

      </View>

    </ScrollView>
  );

}


function ConsultaScreen({
  modulo,
  navegar
}) {

  const dados = modulos[modulo];

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.logo}>
          APP SCHOLAR
        </Text>

        <Text style={styles.subtitulo}>
          Consulta de {dados.titulo}
        </Text>

      </View>


      <View style={styles.card}>

        <Text style={styles.titulo}>
          Registros cadastrados
        </Text>


        <View style={styles.registro}>

          <Text style={styles.registroTitulo}>
            Exemplo de registro
          </Text>

          <Text style={styles.registroTexto}>
            Nenhum registro real cadastrado ainda.
          </Text>


          <View style={styles.linhaBotoes}>

            <TouchableOpacity
              style={styles.botaoPequeno}
              onPress={() =>
                navegar(`editar_${modulo}`)
              }
            >

              <Text style={styles.textoBotao}>
                Editar
              </Text>

            </TouchableOpacity>


            <TouchableOpacity
              style={styles.botaoExcluir}
              onPress={() =>
                Alert.alert(
                  'Excluir',
                  'Registro excluído.'
                )
              }
            >

              <Text style={styles.textoBotao}>
                Excluir
              </Text>

            </TouchableOpacity>

          </View>

        </View>


        <Botao
          texto={`➕ Cadastrar ${modulo}`}
          onPress={() =>
            navegar(`cadastro_${modulo}`)
          }
        />


        <Botao
          texto="← Voltar"
          onPress={() =>
            navegar(`menu${modulo}`)
          }
        />

      </View>

    </ScrollView>
  );

}



function EditarScreen({
  modulo,
  navegar
}) {

  const dados = modulos[modulo];

  const [valores, setValores] = useState({});


  function atualizar(campo, valor) {

    setValores({
      ...valores,
      [campo]: valor
    });

  }


  function salvar() {

    Alert.alert(
      'Sucesso!',
      `${modulo} atualizado com sucesso.`
    );

  }


  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.logo}>
          APP SCHOLAR
        </Text>

        <Text style={styles.subtitulo}>
          Editar {modulo}
        </Text>

      </View>


      <View style={styles.card}>

        <Text style={styles.titulo}>
          Alterar dados
        </Text>


        {dados.campos.map((campo, index) => (

          <View key={index}>

            <Text style={styles.label}>
              {campo}
            </Text>

            <TextInput
              style={styles.input}
              placeholder={`Alterar ${campo.toLowerCase()}`}
              value={valores[campo] || ''}
              onChangeText={(texto) =>
                atualizar(campo, texto)
              }
            />

          </View>

        ))}


        <Botao
          texto="💾 Salvar alterações"
          onPress={salvar}
        />


        <Botao
          texto="← Voltar"
          onPress={() =>
            navegar(`menu${modulo}`)
          }
        />

      </View>

    </ScrollView>
  );

}



export default function App() {

  const [tela, setTela] = useState('home');


  function navegar(novaTela) {

    setTela(novaTela);

  }


  function voltarHome() {

    setTela('home');

  }



  if (tela === 'home') {

    return (
      <SafeAreaView style={styles.safe}>
        <HomeScreen navegar={navegar} />
      </SafeAreaView>
    );

  }


  if (tela === 'sobre') {

    return (
      <SafeAreaView style={styles.safe}>
        <SobreScreen voltar={voltarHome} />
      </SafeAreaView>
    );

  }


  const menus = {
    menuAluno: 'Aluno',
    menuProfessor: 'Professor',
    menuTurma: 'Turma',
    menuCurso: 'Curso',
    menuDisciplina: 'Disciplina',
    menuMatricula: 'Matricula',
    menuResponsavel: 'Responsavel',
    menuAvaliacao: 'Avaliacao',
    menuCoordenador: 'Coordenador',
    menuBoletim: 'Boletim'
  };


  if (menus[tela]) {

    return (
      <SafeAreaView style={styles.safe}>

        <MenuModulo
          modulo={menus[tela]}
          navegar={navegar}
          voltar={voltarHome}
        />

      </SafeAreaView>
    );

  }



  if (tela.startsWith('cadastro_')) {

    const modulo = tela.replace(
      'cadastro_',
      ''
    );

    return (
      <SafeAreaView style={styles.safe}>

        <CadastroScreen
          modulo={modulo}
          navegar={navegar}
        />

      </SafeAreaView>
    );

  }


 

  if (tela.startsWith('consulta_')) {

    const modulo = tela.replace(
      'consulta_',
      ''
    );

    return (
      <SafeAreaView style={styles.safe}>

        <ConsultaScreen
          modulo={modulo}
          navegar={navegar}
        />

      </SafeAreaView>
    );

  }




  if (tela.startsWith('editar_')) {

    const modulo = tela.replace(
      'editar_',
      ''
    );

    return (
      <SafeAreaView style={styles.safe}>

        <EditarScreen
          modulo={modulo}
          navegar={navegar}
        />

      </SafeAreaView>
    );

  }



  return (
    <SafeAreaView style={styles.safe}>

      <HomeScreen navegar={navegar} />

    </SafeAreaView>
  );

}


const styles = StyleSheet.create({

  safe: {
    flex: 1,
    backgroundColor: '#f1f5f9'
  },


  container: {
    flex: 1,
    padding: 20
  },


  header: {
    backgroundColor: '#1e3a8a',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20
  },


  logo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    textAlign: 'center'
  },


  subtitulo: {
    fontSize: 16,
    color: '#dbeafe',
    textAlign: 'center',
    marginTop: 6
  },


  cardPrincipal: {
    backgroundColor: '#ffffff',
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3
  },


  card: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 15,
    marginBottom: 20,
    elevation: 3
  },


  titulo: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 12
  },


  tituloSecao: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 15
  },


  texto: {
    fontSize: 16,
    color: '#475569',
    lineHeight: 24,
    marginBottom: 15
  },


  botao: {
    backgroundColor: '#1e3a8a',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 12
  },


  botaoVermelho: {
    backgroundColor: '#dc2626'
  },


  textoBotao: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },


  label: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#334155',
    marginBottom: 6,
    marginTop: 10
  },


  input: {
    borderWidth: 1,
    borderColor: '#cbd5e1',
    borderRadius: 10,
    padding: 13,
    fontSize: 15,
    backgroundColor: '#f8fafc',
    marginBottom: 8
  },


  registro: {
    backgroundColor: '#f8fafc',
    borderWidth: 1,
    borderColor: '#e2e8f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15
  },


  registroTitulo: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e3a8a',
    marginBottom: 6
  },


  registroTexto: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 12
  },


  linhaBotoes: {
    flexDirection: 'row',
    gap: 10
  },


  botaoPequeno: {
    flex: 1,
    backgroundColor: '#2563eb',
    padding: 12,
    borderRadius: 8
  },


  botaoExcluir: {
    flex: 1,
    backgroundColor: '#dc2626',
    padding: 12,
    borderRadius: 8
  }

});