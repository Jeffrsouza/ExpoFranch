import React, { Component, Fragment } from 'react';
import {
  Alert,
  CheckBox,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StatusBar,
  AsyncStorage,
} from 'react-native';
import { Body, Header, Left, Icon, Right } from 'native-base';
import {  Colors} from 'react-native/Libraries/NewAppScreen';
import { Actions } from 'react-native-router-flux';

export const dh = Dimensions.get("window").height;
export const dw = Dimensions.get("window").width;

function ValidarNull(str) {
  let ok = false;
  try {
    if (
      str !== undefined &&
      str !== null &&
      str !== "" &&
      str !== {} &&
      str !== [] &&
      str.toString().length > 0
    ) {
      ok = true;
    } else {
      ok = false;
    }
  } catch {
    ok = false;
  }
  return ok;
}

function mostrarAlerta(title, msg) {
  Alert.alert(
    title,
    msg,
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      { text: "OK" }
    ],
    { cancelable: false }
  );
};

export default class Quest extends Component {

  state = {
    nomeEmpresa: null,
    cargo: null,
    responsavel: null,
    cidade: null,
    empresaExp: null,
    resp1: null,
    resp1_just: null,
    resp2: null,
    resp3: null,
    resp4: null,
    resp5: null,
    resp6: null,
    resp7_a: null,
    resp7_b: null,
    resp7_just: null,
    resp8: null,
    resp9: null,
    resp9_just: null,
    resp10: null,
    resp10_just: null,
    resp11_a: null,
    resp11_b: null,
    resp11_c: null,
    resp11_d: null,
    resp11_e: null,
    resp11_f: null,
    resp11_g: null,
    resp11_h: null,
    resp12: null,
    resp12_just: null,
    resp13: null,
    resp13_just: null,
    resp14: null,
    resp14_just: null,
    resp15: null,
    resp16: null,
    resp17: null,
  }

  Cadastrar() {
    const { nomeEmpresa, cargo, responsavel, cidade, empresaExp,
      resp1, resp2, resp3, resp4, resp5, resp6, resp7_a, resp7_b, resp7_just, resp8,
      resp9, resp9_just, resp10, resp10_just, resp11_a, resp11_b, resp11_c, resp11_d, resp11_e,
      resp11_f, resp11_g, resp11_h, resp12, resp12_just, resp13, resp13_just, resp14, resp14_just,
      resp15, resp16, resp17 } = this.state;

    if (!ValidarNull(nomeEmpresa)) { mostrarAlerta('Respostas', 'Por favor preencha o nome da empresa.'); return; }
    if (!ValidarNull(cargo)) { mostrarAlerta('Respostas', 'Por favor preencha o cargo.'); return; }
    if (!ValidarNull(responsavel)) { mostrarAlerta('Respostas', 'Por favor preencha o responsável.'); return; }
    if (!ValidarNull(cidade)) { mostrarAlerta('Respostas', 'Por favor preencha a cidade.'); return; }
    if (!ValidarNull(resp1)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 1.'); return; }
    if (!ValidarNull(resp2)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 2.'); return; }
    if (!ValidarNull(resp3)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 3.'); return; }
    if (!ValidarNull(resp4)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 4.'); return; }
    if (!ValidarNull(resp5)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 5.'); return; }
    if (!ValidarNull(resp6)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 6.'); return; }
    if (!ValidarNull(resp7_a) || !ValidarNull(resp7_b) || !ValidarNull(resp7_just)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 7.'); return; }
    if (!ValidarNull(resp8)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 8.'); return; }
    if (!ValidarNull(resp9) || !ValidarNull(resp9_just)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 9.'); return; }
    if (!ValidarNull(resp10) || !ValidarNull(resp10_just)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 10.'); return; }
    if (!ValidarNull(resp11_a) || !ValidarNull(resp11_b) || !ValidarNull(resp11_c) || !ValidarNull(resp11_d)
      || !ValidarNull(resp11_e) || !ValidarNull(resp11_f) || !ValidarNull(resp11_g) || !ValidarNull(resp11_h)) {
      mostrarAlerta('Respostas', 'Por favor preencha a pergunta 11.'); return;
    }
    if (!ValidarNull(resp12) || !ValidarNull(resp12_just)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 12.'); return; }
    if (!ValidarNull(resp13) || !ValidarNull(resp13_just)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 13.'); return; }
    if (!ValidarNull(resp14) || !ValidarNull(resp14_just)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 14.'); return; }
    if (!ValidarNull(resp15)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 15.'); return; }
    if (!ValidarNull(resp16)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 16.'); return; }
    if (!ValidarNull(resp17)) { mostrarAlerta('Respostas', 'Por favor preencha a pergunta 17.'); return; }

    const respostas = {
      nomeEmpresa, cargo, responsavel, cidade, empresaExp,
      resposta1: this.preenche1(resp1),
      resposta2: this.preencheMarkTwo(resp2),
      resposta3: this.preenche3(resp3),
      resposta4: resp4,
      resposta5: resp5,
      resposta6: resp6,
      resposta7_a: this.preencheMarkTwo(resp7_a),
      resposta7_b: this.preencheMarkTwo(resp7_b),
      resposta7_just: resp7_just,
      resposta8: resp8,
      resposta9: this.preencheNine(resp9),
      resposta9_just: resp9_just,
      resposta10: (resp10 == 'a' ? 'Sim' : 'Não'),
      resposta10_just: resp10_just,
      resposta11_a: this.preencheNine(resp11_a),
      resposta11_b: this.preencheNine(resp11_b),
      resposta11_c: this.preencheNine(resp11_c),
      resposta11_d: this.preencheNine(resp11_d),
      resposta11_e: this.preencheNine(resp11_e),
      resposta11_f: this.preencheNine(resp11_f),
      resposta11_g: this.preencheNine(resp11_g),
      resposta11_h: this.preencheNine(resp11_h),
      resposta12: this.preenche12(resp12),
      resposta12_just: resp12_just,
      resposta13: this.preenche13(resp13),
      resposta13_just: resp13_just,
      resposta14: this.preenche14(resp14),
      resposta14_just: resp14_just,
      resposta15: resp15,
      resposta16: resp16,
      resposta17: resp17,
    }

    const date = new Date().getDate(); //Current Date
    const month = new Date().getMonth() + 1; //Current Month
    const year = new Date().getFullYear(); //Current Year
    const hours = new Date().getHours(); //Current Hours
    const min = new Date().getMinutes(); //Current Minutes
    const sec = new Date().getSeconds(); //Current Seconds

    const data = hours + ':' + min + ':' + sec + ' ' + date + '/' + month + '/' + year;

    AsyncStorage.setItem(nomeEmpresa + ' - ' + data, JSON.stringify(respostas))
      .then(res => { mostrarAlerta('Formulário', 'Gravado com sucesso!'); Actions.home(); })
      .catch(err => mostrarAlerta('Formulário', 'Erro ao gravar:' + err));

  }

  preenche1(resp) {
    switch (resp) {
      case 'a':
        return 'captar novos franqueados';
      case 'b':
        return 'reforçar relacionamento com franqueados já existentes';
      case 'c':
        return 'reforçar relacionamento com entidades do setor';
      case 'd':
        return 'fortalecer a imagem da empresa';
      case 'e':
        return 'fornecer equipamentos e serviços para redes de franquias';
      case 'f':
        return 'outros:' + this.state.resp1_just;
    }
  }
  preencheMarkTwo(resp) {
    switch (resp) {
      case 'a':
        return 'Acima das Expectativas';
      case 'b':
        return 'Como esperado';
      case 'c':
        return 'Desapontou';
    }
  }
  preenche3(resp) {
    switch (resp) {
      case 'a':
        return 'menos de 100.000,00 (cem mil)';
      case 'b':
        return 'até 100.000,00 (cem mil)';
      case 'c':
        return 'de 101.000,00 a 300.000,00 (cento e um mil a trezentos mil)';
      case 'd':
        return 'de 301.000,00 a 500.000,00 (trezentos e um mil a quinhentos mil)';
      case 'e':
        return 'de 501.000,00 a 750.000,00 (quinhentos e um mil a setecentos e cinquenta mil)';
      case 'f':
        return 'de 751.000,00 a 1.000.000,00 (setecentos e cinquenta mil e um a um milhão)';
      case 'g':
        return 'de 751.000,00 a 1.000.000,00 (setecentos e cinquenta mil e um a um milhão)';
    }
  }
  preencheNine(resp) {
    switch (resp) {
      case 'a':
        return 'Excelente';
      case 'b':
        return 'Bom';
      case 'c':
        return 'Médio';
      case 'd':
        return 'Fraco';
    }
  }
  preenche12(resp) {
    switch (resp) {
      case 'a':
        return 'Totalmente compensadora';
      case 'b':
        return 'Parcialmente compensadora';
      case 'c':
        return 'Nada compensadora';
    }
  }
  preenche13(resp) {
    switch (resp) {
      case 'a':
        return 'Sim';
      case 'b':
        return 'Não';
      case 'c':
        return 'Talvez';
    }
  }
  preenche14(resp) {
    switch (resp) {
      case 'a':
        return 'aumentar';
      case 'b':
        return 'manter';
      case 'c':
        return 'diminuir';
    }
  }

  render() {
    const { resp1,
      resp1_just,
      resp2,
      resp3,
      resp4,
      resp5,
      resp6,
      resp7_a,
      resp7_b,
      resp7_just,
      resp8,
      resp9,
      resp9_just,
      resp10,
      resp10_just,
      resp11_a,
      resp11_b,
      resp11_c,
      resp11_d,
      resp11_e,
      resp11_f,
      resp11_g,
      resp11_h,
      resp12,
      resp12_just,
      resp13,
      resp13_just,
      resp14,
      resp14_just,
      resp15,
      resp16,
      resp17 } = this.state;
    return (
      <View>
        <StatusBar barStyle="light-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>

            <Header style={styles.header}>
              <Left>
                <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={()=>Actions.home()}>
                  <Icon name='arrowleft' type={'AntDesign'} style={{ color: '#fff' }} />
                </TouchableOpacity>
              </Left>
              <Body>
                <Image style={styles.image} source={require('./img/logo.png')} />
              </Body>
              <Left>
              </Left>
            </Header>
            <View style={[styles.body, styles.title, { alignItems: 'center' }]}>
              <Text style={{ fontSize: 25, color: 'rgb(22,47,130)', }}>Formulário</Text>
            </View>

            {/*Cabeçalho */}
            <View style={styles.body}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Nome da Empresa:</Text>
                <TextInput style={styles.input} onChangeText={nomeEmpresa =>
                  this.setState({
                    nomeEmpresa
                  })
                }
                  value={this.state.nomeEmpresa} />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Cargo:</Text>
                <TextInput style={styles.input} onChangeText={cargo =>
                  this.setState({
                    cargo
                  })
                }
                  value={this.state.cargo} />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Responsável:</Text>
                <TextInput style={styles.input} onChangeText={responsavel =>
                  this.setState({
                    responsavel
                  })
                }
                  value={this.state.responsavel} />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Cidade de origem:</Text>
                <TextInput style={styles.input} onChangeText={cidade =>
                  this.setState({
                    cidade
                  })
                }
                  value={this.state.cidade} />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>Empresa Expositora:</Text>
                <TextInput style={styles.input} onChangeText={empresaExp =>
                  this.setState({
                    empresaExp
                  })
                }
                  value={this.state.empresaExp} />
              </View>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionDescription}>
                  Com o objetivo de aprimorar o serviço que prestamos, é fundamental sabermos sua opinião sobre o desempenho da Fagga
                na <Text style={styles.highlight}>Expo Franchising ABF Rio 2019.</Text> Solicitamos que dedique apenas alguns minutos
                                                                                                                                              ao preenchimento da Pesquisa de Satisfação. Sua opinião fica registrada e torna-se uma ferramenta muito importante
                                                                                                                                              para o nosso relacionamento.
              </Text>
              </View>
            </View>

            {/*Respostas */}
            <View style={styles.body}>

              {/* 1 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>1) Qual o maior objetivo de sua participação no evento?</Text>
                <View style={styles.viewCheck}><CheckBox value={resp1 === 'a' ? true : false} onChange={() => this.setState({ resp1: 'a' })} /><Text>captar novos franqueados</Text></View>
                <View style={styles.viewCheck}>
                  <CheckBox value={resp1 === 'b' ? true : false} onChange={() => this.setState({ resp1: 'b' })} />
                  <Text>reforçar relacionamento com franqueados já existentes</Text>
                </View>
                <View style={styles.viewCheck}><CheckBox value={resp1 === 'c' ? true : false} onChange={() => this.setState({ resp1: 'c' })} /><Text>reforçar relacionamento com entidades do setor</Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp1 === 'd' ? true : false} onChange={() => this.setState({ resp1: 'd' })} /><Text>fortalecer a imagem da empresa</Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp1 === 'e' ? true : false} onChange={() => this.setState({ resp1: 'e' })} /><Text>fornecer equipamentos e serviços para redes de franquias
                </Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp1 === 'f' ? true : false} onChange={() => this.setState({ resp1: 'f' })} /><Text>outros, a saber</Text>
                  <TextInput style={[styles.inputOutros, { width: 150 }]} editable={resp1 === 'f' ? true : false}
                    onChangeText={resp1_just =>
                      this.setState({
                        resp1_just
                      })
                    }
                    value={this.state.resp1_just} />
                </View>
              </View>

              {/* 2 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>2) Como o evento correspondeu às suas expectativas em relação à captação de futuros franqueados?</Text>
                <View style={styles.viewCheck}><CheckBox value={resp2 === 'a' ? true : false} onChange={() => this.setState({ resp2: 'a' })} /><Text>Acima das Expectativas</Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp2 === 'b' ? true : false} onChange={() => this.setState({ resp2: 'b' })} /><Text>Como esperado</Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp2 === 'c' ? true : false} onChange={() => this.setState({ resp2: 'c' })} /><Text>Desapontou</Text></View>
              </View>

              {/* 3 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>3) Qual a sua expectativa em volume total de negócios gerados a partir da Expo Franchising ABF Rio 2019?</Text>
                <View style={styles.viewCheck}><CheckBox value={resp3 === 'a' ? true : false} onChange={() => this.setState({ resp3: 'a' })} /><Text>menos de 100.000,00 (cem mil)</Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp3 === 'b' ? true : false} onChange={() => this.setState({ resp3: 'b' })} /><Text>até 100.000,00 (cem mil)</Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp3 === 'c' ? true : false} onChange={() => this.setState({ resp3: 'c' })} /><Text>de 101.000,00 a 300.000,00 (cento e um mil a trezentos mil)</Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp3 === 'd' ? true : false} onChange={() => this.setState({ resp3: 'd' })} /><Text>de 301.000,00 a 500.000,00 (trezentos e um mil a quinhentos mil)</Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp3 === 'e' ? true : false} onChange={() => this.setState({ resp3: 'e' })} /><Text>de 501.000,00 a 750.000,00 (quinhentos e um mil a setecentos e cinquenta mil)</Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp3 === 'f' ? true : false} onChange={() => this.setState({ resp3: 'f' })} /><Text>de 751.000,00 a 1.000.000,00 (setecentos e cinquenta mil e um a um milhão)</Text></View>
                <View style={styles.viewCheck}><CheckBox value={resp3 === 'g' ? true : false} onChange={() => this.setState({ resp3: 'g' })} /><Text>acima de 1.000.000,00 (acima de um milhão)</Text></View>
              </View>

              {/* 4 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>4) Quantas e quais marcas você está expondo na Expo Franchising ABF Rio 2019?</Text>
                <TextInput style={styles.input} onChangeText={resp4 =>
                  this.setState({
                    resp4
                  })
                }
                  value={resp4}
                />
              </View>

              {/* 5 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>5) Qual o setor de atuação e o faturamento anual da empresa?</Text>
                <TextInput style={styles.input} onChangeText={resp5 =>
                  this.setState({
                    resp5
                  })
                }
                  value={this.state.resp5} />
              </View>

              {/* 6 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>6) Participa de outras feiras do setor? Quais?</Text>
                <TextInput style={styles.input} onChangeText={resp6 =>
                  this.setState({
                    resp6
                  })
                }
                  value={this.state.resp6} />
              </View>

              {/* Fazer o 7 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>7) Como a feira correspondeu às suas expectativas com relação à:</Text>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.highlight}>A) Quantidade de visitantes</Text>

                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>Acima das Expectativas</Text>
                    <CheckBox value={resp7_a === 'a' ? true : false} onChange={() => this.setState({ resp7_a: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>Como esperado</Text>
                    <CheckBox value={resp7_a === 'b' ? true : false} onChange={() => this.setState({ resp7_a: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>Desapontou</Text>
                    <CheckBox value={resp7_a === 'c' ? true : false} onChange={() => this.setState({ resp7_a: 'c' })} />
                  </View>
                </View>

              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.highlight}>B) Qualidade dos visitantes</Text>

                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>Acima das Expectativas</Text>
                    <CheckBox value={resp7_b === 'a' ? true : false} onChange={() => this.setState({ resp7_b: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>Como esperado</Text>
                    <CheckBox value={resp7_b === 'b' ? true : false} onChange={() => this.setState({ resp7_b: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>Desapontou</Text>
                    <CheckBox value={resp7_b === 'c' ? true : false} onChange={() => this.setState({ resp7_b: 'c' })} />
                  </View>
                </View>

              </View>

              <View style={styles.sectionContainer}>
                <View style={styles.viewCheck}>
                  <Text>Justifique:</Text>
                  <TextInput style={[styles.inputOutros, { width: 150 }]}
                    onChangeText={resp7_just =>
                      this.setState({
                        resp7_just
                      })
                    }
                    value={this.state.resp7_just} />
                </View>
              </View>

              {/* 8 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>8) Em qual mês e local você sugere que ocorra a Expo Franchising ABF Rio 2019?</Text>
                <TextInput style={styles.input} onChangeText={resp8 =>
                  this.setState({
                    resp8
                  })
                }
                  value={this.state.resp8} />
              </View>

              {/* 9 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>9) O que você achou da divulgação para público geral?</Text>

                <View style={styles.sectionContainer}>
                  <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                    <View style={styles.viewCheckHorizontal}>
                      <Text style={{ textAlign: 'center' }}>Excelente</Text>
                      <CheckBox value={resp9 === 'a' ? true : false} onChange={() => this.setState({ resp9: 'a' })} />
                    </View>

                    <View style={styles.viewCheckHorizontal}>
                      <Text style={{ textAlign: 'center' }}>Bom</Text>
                      <CheckBox value={resp9 === 'b' ? true : false} onChange={() => this.setState({ resp9: 'b' })} />
                    </View>

                    <View style={styles.viewCheckHorizontal}>
                      <Text style={{ textAlign: 'center' }}>Médio</Text>
                      <CheckBox value={resp9 === 'c' ? true : false} onChange={() => this.setState({ resp9: 'c' })} />
                    </View>

                    <View style={styles.viewCheckHorizontal}>
                      <Text style={{ textAlign: 'center' }}>Fraco</Text>
                      <CheckBox value={resp9 === 'd' ? true : false} onChange={() => this.setState({ resp9: 'd' })} />
                    </View>

                  </View>
                </View>
                <View style={styles.viewCheck}>
                  <Text>Justifique:</Text><TextInput style={[styles.inputOutros, { width: 150 }]}
                    onChangeText={resp9_just =>
                      this.setState({
                        resp9_just
                      })
                    }
                    value={this.state.resp9_just} />
                </View>
              </View>

              {/* 10 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>10) Os convites digitais foram repassados aos seus clientes para divulgação de seu estande na feira?</Text>

                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>Sim</Text>
                    <CheckBox value={resp10 === 'a' ? true : false} onChange={() => this.setState({ resp10: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>Não</Text>
                    <CheckBox value={resp10 === 'b' ? true : false} onChange={() => this.setState({ resp10: 'b' })} />
                  </View>
                </View>

                <View style={styles.viewCheck}><Text>Se não enviou, por qual motivo?</Text></View>
                <TextInput style={styles.input}
                  onChangeText={resp10_just =>
                    this.setState({
                      resp10_just
                    })
                  }
                  value={this.state.resp10_just} />
              </View>

              {/* 11 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>11) Avaliação de tópicos</Text>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.highlight}>A) Organização geral da feira</Text>
                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>excelente</Text>
                    <CheckBox value={resp11_a === 'a' ? true : false} onChange={() => this.setState({ resp11_a: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>bom</Text>
                    <CheckBox value={resp11_a === 'b' ? true : false} onChange={() => this.setState({ resp11_a: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>médio</Text>
                    <CheckBox value={resp11_a === 'c' ? true : false} onChange={() => this.setState({ resp11_a: 'c' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>fraco</Text>
                    <CheckBox value={resp11_a === 'd' ? true : false} onChange={() => this.setState({ resp11_a: 'd' })} />
                  </View>
                </View>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.highlight}>B) Atendimento ao Expositor</Text>
                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>excelente</Text>
                    <CheckBox value={resp11_b === 'a' ? true : false} onChange={() => this.setState({ resp11_b: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>bom</Text>
                    <CheckBox value={resp11_b === 'b' ? true : false} onChange={() => this.setState({ resp11_b: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>médio</Text>
                    <CheckBox value={resp11_b === 'c' ? true : false} onChange={() => this.setState({ resp11_b: 'c' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>fraco</Text>
                    <CheckBox value={resp11_b === 'd' ? true : false} onChange={() => this.setState({ resp11_b: 'd' })} />
                  </View>
                </View>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.highlight}>C) Departamento Financeiro</Text>
                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>excelente</Text>
                    <CheckBox value={resp11_c === 'a' ? true : false} onChange={() => this.setState({ resp11_c: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>bom</Text>
                    <CheckBox value={resp11_c === 'b' ? true : false} onChange={() => this.setState({ resp11_c: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>médio</Text>
                    <CheckBox value={resp11_c === 'c' ? true : false} onChange={() => this.setState({ resp11_c: 'c' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>fraco</Text>
                    <CheckBox value={resp11_c === 'd' ? true : false} onChange={() => this.setState({ resp11_c: 'd' })} />
                  </View>
                </View>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.highlight}>D) Departamento Comercial</Text>
                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>excelente</Text>
                    <CheckBox value={resp11_d === 'a' ? true : false} onChange={() => this.setState({ resp11_d: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>bom</Text>
                    <CheckBox value={resp11_d === 'b' ? true : false} onChange={() => this.setState({ resp11_d: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>médio</Text>
                    <CheckBox value={resp11_d === 'c' ? true : false} onChange={() => this.setState({ resp11_d: 'c' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>fraco</Text>
                    <CheckBox value={resp11_d === 'd' ? true : false} onChange={() => this.setState({ resp11_d: 'd' })} />
                  </View>
                </View>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.highlight}>E) Limpeza da Feira</Text>
                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>excelente</Text>
                    <CheckBox value={resp11_e === 'a' ? true : false} onChange={() => this.setState({ resp11_e: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>bom</Text>
                    <CheckBox value={resp11_e === 'b' ? true : false} onChange={() => this.setState({ resp11_e: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>médio</Text>
                    <CheckBox value={resp11_e === 'c' ? true : false} onChange={() => this.setState({ resp11_e: 'c' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>fraco</Text>
                    <CheckBox value={resp11_e === 'd' ? true : false} onChange={() => this.setState({ resp11_e: 'd' })} />
                  </View>
                </View>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.highlight}>F) Segurança da Feira</Text>
                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>excelente</Text>
                    <CheckBox value={resp11_f === 'a' ? true : false} onChange={() => this.setState({ resp11_f: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>bom</Text>
                    <CheckBox value={resp11_f === 'b' ? true : false} onChange={() => this.setState({ resp11_f: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>médio</Text>
                    <CheckBox value={resp11_f === 'c' ? true : false} onChange={() => this.setState({ resp11_f: 'c' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>fraco</Text>
                    <CheckBox value={resp11_f === 'd' ? true : false} onChange={() => this.setState({ resp11_f: 'd' })} />
                  </View>
                </View>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.highlight}>G) Montadora Oficial</Text>
                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>excelente</Text>
                    <CheckBox value={resp11_g === 'a' ? true : false} onChange={() => this.setState({ resp11_g: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>bom</Text>
                    <CheckBox value={resp11_g === 'b' ? true : false} onChange={() => this.setState({ resp11_g: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>médio</Text>
                    <CheckBox value={resp11_g === 'c' ? true : false} onChange={() => this.setState({ resp11_g: 'c' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>fraco</Text>
                    <CheckBox value={resp11_g === 'd' ? true : false} onChange={() => this.setState({ resp11_g: 'd' })} />
                  </View>
                </View>
              </View>

              <View style={styles.sectionContainer}>
                <Text style={styles.highlight}>H) Área de Alimentação</Text>
                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>excelente</Text>
                    <CheckBox value={resp11_h === 'a' ? true : false} onChange={() => this.setState({ resp11_h: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>bom</Text>
                    <CheckBox value={resp11_h === 'b' ? true : false} onChange={() => this.setState({ resp11_h: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>médio</Text>
                    <CheckBox value={resp11_h === 'c' ? true : false} onChange={() => this.setState({ resp11_h: 'c' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>fraco</Text>
                    <CheckBox value={resp11_h === 'd' ? true : false} onChange={() => this.setState({ resp11_h: 'd' })} />
                  </View>
                </View>
              </View>

              {/* 12 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>12) Levando em consideração todos os fatores, sua participação na Expo Franchising ABF Rio 2019 foi:</Text>
                <View style={styles.viewCheck}>
                  <CheckBox value={resp12 === 'a' ? true : false} onChange={() => this.setState({ resp12: 'a' })} />
                  <Text>Totalmente compensadora</Text>
                </View>
                <View style={styles.viewCheck}>
                  <CheckBox value={resp12 === 'b' ? true : false} onChange={() => this.setState({ resp12: 'b' })} />
                  <Text>Parcialmente compensadora</Text></View>
                <View style={styles.viewCheck}>
                  <CheckBox value={resp12 === 'c' ? true : false} onChange={() => this.setState({ resp12: 'c' })} />
                  <Text>Nada compensadora</Text>
                </View>
                <View style={styles.viewCheck}>
                  <Text>Justifique:</Text><TextInput style={[styles.inputOutros, { width: 150 }]} onChangeText={resp12_just =>
                    this.setState({
                      resp12_just
                    })
                  }
                    value={this.state.resp12_just} />
                </View>
              </View>

              {/* 13 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>13) Participaria da próxima edição?</Text>

                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>Sim</Text>
                    <CheckBox value={resp13 === 'a' ? true : false} onChange={() => this.setState({ resp13: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>Não</Text>
                    <CheckBox value={resp13 === 'b' ? true : false} onChange={() => this.setState({ resp13: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>talvez</Text>
                    <CheckBox value={resp13 === 'c' ? true : false} onChange={() => this.setState({ resp13: 'c' })} />
                  </View>
                </View>

                <View style={styles.viewCheck}>
                  <Text>Justifique:</Text><TextInput style={[styles.inputOutros, { width: 150 }]} onChangeText={resp13_just =>
                    this.setState({
                      resp13_just
                    })
                  }
                    value={this.state.resp13_just} />
                </View>
              </View>

              {/* 14 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>14) Você pretende aumentar, manter ou diminuir a área de seu estande?</Text>

                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>aumentar</Text>
                    <CheckBox value={resp14 === 'a' ? true : false} onChange={() => this.setState({ resp14: 'a' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>manter</Text>
                    <CheckBox value={resp14 === 'b' ? true : false} onChange={() => this.setState({ resp14: 'b' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>diminuir</Text>
                    <CheckBox value={resp14 === 'c' ? true : false} onChange={() => this.setState({ resp14: 'c' })} />
                  </View>
                </View>
                <View style={styles.viewCheck}>
                  <Text>Justifique:</Text><TextInput style={[styles.inputOutros, { width: 150 }]} onChangeText={resp14_just =>
                    this.setState({
                      resp14_just
                    })
                  }
                    value={this.state.resp14_just} />
                </View>
              </View>

              {/* 15 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>15) Que nota você daria ao evento, sendo nota 1 muito ruim e nota 5 ótimo:</Text>

                <View style={[styles.viewCheck, { marginBottom: 20 }]}>
                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>1</Text>
                    <CheckBox value={resp15 === '1' ? true : false} onChange={() => this.setState({ resp15: '1' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>2</Text>
                    <CheckBox value={resp15 === '2' ? true : false} onChange={() => this.setState({ resp15: '2' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>3</Text>
                    <CheckBox value={resp15 === '3' ? true : false} onChange={() => this.setState({ resp15: '3' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>4</Text>
                    <CheckBox value={resp15 === '4' ? true : false} onChange={() => this.setState({ resp15: '4' })} />
                  </View>

                  <View style={styles.viewCheckHorizontal}>
                    <Text style={{ textAlign: 'center' }}>5</Text>
                    <CheckBox value={resp15 === '5' ? true : false} onChange={() => this.setState({ resp15: '5' })} />
                  </View>
                </View>

              </View>

              {/* 16 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>16) Na sua opinião, quais foram os pontos POSITIVOS da Expo Franchising ABF Rio 2019?</Text>
                <TextInput style={styles.input}
                  onChangeText={resp16 =>
                    this.setState({
                      resp16
                    })
                  }
                  value={this.state.resp16} />
              </View>

              {/* 17 */}
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>17) Na sua opinião, quais foram os pontos a serem melhorados da Expo Franchising ABF Rio 2019?</Text>
                <TextInput style={styles.input} style={styles.input}
                  onChangeText={resp17 =>
                    this.setState({
                      resp17
                    })
                  }
                  value={this.state.resp17} />
              </View>
            </View>

            <View style={styles.body}>
              <View style={[styles.sectionContainer, { flex: 1, flexDirection: 'column', alignItems: 'center' }]}>
                <TouchableOpacity style={styles.button} onPress={() => this.Cadastrar()}>
                  <Text style={{ fontSize: 20, color: '#fff' }}>Cadastrar</Text>
                </TouchableOpacity>
              </View>
            </View>

          </ScrollView>
        </SafeAreaView>
      </View >
    );
  }
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'rgb(22,47,130)',
  },
  title: {
    fontSize: 25,
    color: 'rgb(22,47,130)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgb(22,47,130)',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 20,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 5,
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    padding: 3,
    paddingLeft: 10,
    borderColor: '#ddd',
    borderWidth: 1,
    borderRadius: 10,
  },
  inputOutros: {
    padding: 0,
    marginLeft: 10,
    borderColor: '#ddd',
    borderBottomWidth: 1,
  },
  viewCheck: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    margin: 2,
  },
  viewCheckHorizontal: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  button: {
    flex: 1,
    flexDirection: 'row',
    height: 50,
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#28a745',
    marginBottom: 30,
  }
});
