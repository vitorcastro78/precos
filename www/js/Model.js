
var MODELO = function Visional() {

    var AGENDA = function AGENDA() {
        var _ID_AGENDA;
        var _HORARIO;
        var _DIA;
        var _COMPROMISSO;
        var _CONFIRMADO;
        var _ID_PRESTADOR_SERVICO;
        var _TELEFONE;
        var _EMAIL;

        function AGENDA() { }
        function AGENDA(HORARIO, DIA, COMPROMISSO, CONFIRMADO, ID_PRESTADOR_SERVICO, TELEFONE, EMAIL) {
            this._HORARIO = HORARIO;
            this._DIA = DIA;
            this._COMPROMISSO = COMPROMISSO;
            this._CONFIRMADO = CONFIRMADO;
            this._ID_PRESTADOR_SERVICO = ID_PRESTADOR_SERVICO;
            this._TELEFONE = TELEFONE;
            this._EMAIL = EMAIL;
        }



    }

    var BAIRRO = function BAIRRO() {

        var _ID;
        var _ID_CIDADE;
        var _BAIRRO;
        var _CD_BAIRRO;


        function BAIRRO() { }
        function BAIRRO(ID_CIDADE, BAIRRO, CD_BAIRRO) {
            this._ID_CIDADE = ID_CIDADE;
            this._BAIRRO = BAIRRO;
            this._CD_BAIRRO = CD_BAIRRO;
        }


    }

    var CARATER_ATENDIMENTO = function CARATER_ATENDIMENTO() {

        var _ID_CARATER_ATENDIMENTO;
        var _DESCRICAO;
        var _CODIGO;


        function CARATER_ATENDIMENTO() { }
        function CARATER_ATENDIMENTO(DESCRICAO, CODIGO) {
            this._DESCRICAO = DESCRICAO;
            this._CODIGO = CODIGO;
        }



    }

    var CBO_SAUDE = function CBO_SAUDE() {
        var _ID_CBOS;
        var _COD_CBOS;
        var _NOME_CBOS;
        var _COD_CBOS_TISS;


        function CBO_SAUDE() { }
        function CBO_SAUDE(COD_CBOS, NOME_CBOS, COD_CBOS_TISS) {
            this._COD_CBOS = COD_CBOS;
            this._NOME_CBOS = NOME_CBOS;
            this._COD_CBOS_TISS = COD_CBOS_TISS;
        }


    }

    var CIDADE = function CIDADE() {

        var _ID;
        var _ID_UF;
        var _CIDADE;
        var _CD_CIDADE;


        function CIDADE() { }
        function CIDADE(ID_UF, CIDADE, CD_CIDADE) {
            this._ID_UF = ID_UF;
            this._CIDADE = CIDADE;
            this._CD_CIDADE = CD_CIDADE;
        }


    }

    var CONSELHO = function CONSELHO() {

        var _ID_CONSELHO;
        var _CODIGO;
        var _DESCRICAO;


        function CONSELHO() { }
        function CONSELHO(CODIGO, DESCRICAO) {
            this._CODIGO = CODIGO;
            this._DESCRICAO = DESCRICAO;
        }


    }

    var DIA_DA_SEMANA = function DIA_DA_SEMANA() {

        var _ID_DIA_DA_SEMANA;
        var _CODIGO;
        var _DESCRICAO;
        var _ID_PRESTADOR_SERVICO;


        function DIA_DA_SEMANA() { }
        function DIA_DA_SEMANA(CODIGO, DESCRICAO, ID_PRESTADOR_SERVICO) {
            this._CODIGO = CODIGO;
            this._DESCRICAO = DESCRICAO;
            this._ID_PRESTADOR_SERVICO = ID_PRESTADOR_SERVICO;
        }


    }

    var ESPECIALIDADE = function ESPECIALIDADE() {

        var _ID_ESPECIALIDADE;
        var _CODIGO;
        var _DESCRICAO;
        var _ID_STATUS;


        function ESPECIALIDADE() { }
        function ESPECIALIDADE(CODIGO, DESCRICAO, ID_STATUS) {
            this._CODIGO = CODIGO;
            this._DESCRICAO = DESCRICAO;
            this._ID_STATUS = ID_STATUS;
        }


    }

    var ESPECIALIDADE_PROCEDIMENTO = function ESPECIALIDADE_PROCEDIMENTO() {

        var _ID_ESPECIALIDADE_PROCEDIMENTO;
        var _ID_PROCEDIMENTO;
        var _ID_PRESTADOR_SERVICO;
        var _COD_TUSS;
        var _NOME_PROCEDIMENTO;
        var _DESC_PROCEDIMENTO;
        var _VALOR_PROCEDIMENTO;
        var _DATA_CRIACAO;
        var _ID_PRESTADOR_ESPECIALIDADE;


        function ESPECIALIDADE_PROCEDIMENTO() { }
        function ESPECIALIDADE_PROCEDIMENTO(ID_PROCEDIMENTO, ID_PRESTADOR_SERVICO, COD_TUSS, NOME_PROCEDIMENTO, DESC_PROCEDIMENTO, VALOR_PROCEDIMENTO, DATA_CRIACAO, ID_PRESTADOR_ESPECIALIDADE) {
            this._ID_PROCEDIMENTO = ID_PROCEDIMENTO;
            this._ID_PRESTADOR_SERVICO = ID_PRESTADOR_SERVICO;
            this._COD_TUSS = COD_TUSS;
            this._NOME_PROCEDIMENTO = NOME_PROCEDIMENTO;
            this._DESC_PROCEDIMENTO = DESC_PROCEDIMENTO;
            this._VALOR_PROCEDIMENTO = VALOR_PROCEDIMENTO;
            this._DATA_CRIACAO = DATA_CRIACAO;
            this._ID_PRESTADOR_ESPECIALIDADE = ID_PRESTADOR_ESPECIALIDADE;
        }




    }

    var HORARIO = function HORARIO() {

        var _ID_HORARIO;
        var _ID_PRESTADOR_SERVICO;
        var _ID_DIA_DA_SEMANA;
        var _ERVALO;
        var _HORA_INICIAL;
        var _HORA_FINAL;
        var _COD_DIA_DA_SEMANA;


        function HORARIO() { }
        function HORARIO(ID_PRESTADOR_SERVICO, ID_DIA_DA_SEMANA, ERVALO, HORA_INICIAL, HORA_FINAL, COD_DIA_DA_SEMANA) {
            this._ID_PRESTADOR_SERVICO = ID_PRESTADOR_SERVICO;
            this._ID_DIA_DA_SEMANA = ID_DIA_DA_SEMANA;
            this._ERVALO = ERVALO;
            this._HORA_INICIAL = HORA_INICIAL;
            this._HORA_FINAL = HORA_FINAL;
            this._COD_DIA_DA_SEMANA = COD_DIA_DA_SEMANA;
        }

    }

    var LOGRADOURO = function LOGRADOURO() {

        var _ID;
        var _ID_BAIRRO;
        var _TIPO;
        var _LOGRADOURO;
        var _CEP;


        function LOGRADOURO() { }
        function LOGRADOURO(ID_BAIRRO, TIPO, LOGRADOURO, CEP) {
            this._ID_BAIRRO = ID_BAIRRO;
            this._TIPO = TIPO;
            this._LOGRADOURO = LOGRADOURO;
            this._CEP = CEP;
        }

    }

    var MENSAGEM = function MENSAGEM() {

        var _ID_MENSAGEM;
        var _DATA;
        var _ASSUNTO;
        var _MENSAGEM;
        var _ID_USUARIO_REMETENTE;
        var _ID_USUARIO_DESTINATARIO;
        var _ID_PRESTADOR_SERVICO_PACIENTE;
        var _ID_STATUS;


        function MENSAGEM() { }
        function MENSAGEM(DATA, ASSUNTO, MENSAGEM, ID_USUARIO_REMETENTE, ID_USUARIO_DESTINATARIO, ID_PRESTADOR_SERVICO_PACIENTE, ID_STATUS) {
            this._DATA = DATA;
            this._ASSUNTO = ASSUNTO;
            this._MENSAGEM = MENSAGEM;
            this._ID_USUARIO_REMETENTE = ID_USUARIO_REMETENTE;
            this._ID_USUARIO_DESTINATARIO = ID_USUARIO_DESTINATARIO;
            this._ID_PRESTADOR_SERVICO_PACIENTE = ID_PRESTADOR_SERVICO_PACIENTE;
            this._ID_STATUS = ID_STATUS;
        }

        var OPERADORA = function OPERADORA() {

            var _ID_OPERADORAS;
            var _COD_ANS;
            var _CNPJ;
            var _RAZAO_SOCIAL;
            var _NOME_FANTASIA;
            var _LOGRADOURO;
            var _NUMERO;
            var _COMPLEMENTO;
            var _BAIRRO;
            var _CIDADE;
            var _UF;
            var _CEP;
            var _COD_AREA;
            var _TELEFONE_;
            var _TELEFONE_;


            function OPERADORA() { }
            function OPERADORA(COD_ANS, CNPJ, RAZAO_SOCIAL, NOME_FANTASIA, LOGRADOURO, NUMERO, COMPLEMENTO, BAIRRO, CIDADE, UF, CEP, COD_AREA, TELEFONE_, TELEFONE_) {
                this._COD_ANS = COD_ANS;
                this._CNPJ = CNPJ;
                this._RAZAO_SOCIAL = RAZAO_SOCIAL;
                this._NOME_FANTASIA = NOME_FANTASIA;
                this._LOGRADOURO = LOGRADOURO;
                this._NUMERO = NUMERO;
                this._COMPLEMENTO = COMPLEMENTO;
                this._BAIRRO = BAIRRO;
                this._CIDADE = CIDADE;
                this._UF = UF;
                this._CEP = CEP;
                this._COD_AREA = COD_AREA;
                this._TELEFONE_ = TELEFONE_;
                this._TELEFONE_ = TELEFONE_;
            }



        }

        var PLANO = function PLANO() {

            var _ID_PLANO;
            var _DESCRICAO;
            var _ID_OPERADORA;


            function PLANO() { }
            function PLANO(DESCRICAO, ID_OPERADORA) {
                this._DESCRICAO = DESCRICAO;
                this._ID_OPERADORA = ID_OPERADORA;
            }


        }

        var PRESTADOR_ENDERECO = function PRESTADOR_ENDERECO() {

            var _ID_PRESTADOR_ENDERECO;
            var _UF;
            var _CIDADE;
            var _BAIRRO;
            var _LOGRADOURO;
            var _COMPLEMENTO;
            var _CEP;
            var _FONE;
            var _LONGITUDE;
            var _LATITUDE;
            var _ID_PRESTADOR_SERVICO;
            var _ID_STATUS;


            function PRESTADOR_ENDERECO() { }
            function PRESTADOR_ENDERECO(UF, CIDADE, BAIRRO, LOGRADOURO, COMPLEMENTO, CEP, FONE, LONGITUDE, LATITUDE, ID_PRESTADOR_SERVICO, ID_STATUS) {
                this._UF = UF;
                this._CIDADE = CIDADE;
                this._BAIRRO = BAIRRO;
                this._LOGRADOURO = LOGRADOURO;
                this._COMPLEMENTO = COMPLEMENTO;
                this._CEP = CEP;
                this._FONE = FONE;
                this._LONGITUDE = LONGITUDE;
                this._LATITUDE = LATITUDE;
                this._ID_PRESTADOR_SERVICO = ID_PRESTADOR_SERVICO;
                this._ID_STATUS = ID_STATUS;
            }



        }

        var PRESTADOR_ESPECIALIDADE = function PRESTADOR_ESPECIALIDADE() {

            var _ID_PRESTADOR_ESPECIALIDADE;
            var _CODIGO;
            var _DESCRICAO;
            var _ID_PRESTADOR_SERVICO;
            var _DIVULGACAO;
            var _ID_ESPECIALIDADE;


            function PRESTADOR_ESPECIALIDADE() { }
            function PRESTADOR_ESPECIALIDADE(CODIGO, DESCRICAO, ID_PRESTADOR_SERVICO, DIVULGACAO, ID_ESPECIALIDADE) {
                this._CODIGO = CODIGO;
                this._DESCRICAO = DESCRICAO;
                this._ID_PRESTADOR_SERVICO = ID_PRESTADOR_SERVICO;
                this._DIVULGACAO = DIVULGACAO;
                this._ID_ESPECIALIDADE = ID_ESPECIALIDADE;
            }

        }

        var PRESTADOR_PLANO = function PRESTADOR_PLANO() {

            var _ID_PLANO;
            var _DESCRICAO;
            var _ID_PRESTADOR_SERVICO;
            var _ID_OPERADORA_PLANO;


            function PRESTADOR_PLANO() { }
            function PRESTADOR_PLANO(ID_PLANO, DESCRICAO, ID_PRESTADOR_SERVICO) {
                this._ID_PLANO = ID_PLANO;
                this._DESCRICAO = DESCRICAO;
                this._ID_PRESTADOR_SERVICO = ID_PRESTADOR_SERVICO;
            }


        }

        var PRESTADOR_SERVICO = function PRESTADOR_SERVICO() {

            var _ID_PRESTADOR_SERVICO;
            var _NOME;
            var _FONE;
            var _CELULAR;
            var _ID_ENDERECO;
            var _RG;
            var _CPF;
            var _EMISSOR;
            var _SITUACAO;
            var _EMAIL;
            var _REGISTRO_PROFISSIONAL;
            var _ID_CONSELHO;
            var _ID_CONTA;
            var _ID_UF_CONSELHO;
            var _ID_TIPO_PESSOA;
            var _ID_CBOS;
            var _ID_USUARIO;


            function PRESTADOR_SERVICO() { }
            function PRESTADOR_SERVICO(NOME, FONE, CELULAR, ID_ENDERECO, RG, CPF, EMISSOR, SITUACAO, EMAIL, REGISTRO_PROFISSIONAL, ID_CONSELHO, ID_CONTA, ID_UF_CONSELHO, ID_TIPO_PESSOA, ID_CBOS, ID_USUARIO) {
                this._NOME = NOME;
                this._FONE = FONE;
                this._CELULAR = CELULAR;
                this._ID_ENDERECO = ID_ENDERECO;
                this._RG = RG;
                this._CPF = CPF;
                this._EMISSOR = EMISSOR;
                this._SITUACAO = SITUACAO;
                this._EMAIL = EMAIL;
                this._REGISTRO_PROFISSIONAL = REGISTRO_PROFISSIONAL;
                this._ID_CONSELHO = ID_CONSELHO;
                this._ID_CONTA = ID_CONTA;
                this._ID_UF_CONSELHO = ID_UF_CONSELHO;
                this._ID_TIPO_PESSOA = ID_TIPO_PESSOA;
                this._ID_CBOS = ID_CBOS;
                this._ID_USUARIO = ID_USUARIO;
            }

        }

        var PROCEDIMENTO = function PROCEDIMENTO() {

            var _ID_PROCEDIMENTO;
            var _COD_TUSS;
            var _NOME_PROCEDIMENTO;
            var _DESC_PPROCEDIMENTO;
            var _VALOR_PROCEDIMENTO;
            var _DATA_CRIACAO;


            function PROCEDIMENTO() { }
            function PROCEDIMENTO(COD_TUSS, NOME_PROCEDIMENTO, DESC_PPROCEDIMENTO, VALOR_PROCEDIMENTO, DATA_CRIACAO) {
                this._COD_TUSS = COD_TUSS;
                this._NOME_PROCEDIMENTO = NOME_PROCEDIMENTO;
                this._DESC_PPROCEDIMENTO = DESC_PPROCEDIMENTO;
                this._VALOR_PROCEDIMENTO = VALOR_PROCEDIMENTO;
                this._DATA_CRIACAO = DATA_CRIACAO;
            }


        }

        var PROCEDIMENTO_PRESTADOR = function PROCEDIMENTO_PRESTADOR() {

            var _ID_PROCEDIMENTO_PRESTADOR;
            var _ID_PROCEDIMENTO;
            var _ID_PRESTADOR_SERVICO;
            var _COD_TUSS;
            var _NOME_PROCEDIMENTO;
            var _DESC_PROCEDIMENTO;
            var _VALOR_PROCEDIMENTO;
            var _DATA_CRIACAO;


            function PROCEDIMENTO_PRESTADOR() { }
            function PROCEDIMENTO_PRESTADOR(ID_PROCEDIMENTO, ID_PRESTADOR_SERVICO, COD_TUSS, NOME_PROCEDIMENTO, DESC_PROCEDIMENTO, VALOR_PROCEDIMENTO, DATA_CRIACAO) {
                this._ID_PROCEDIMENTO = ID_PROCEDIMENTO;
                this._ID_PRESTADOR_SERVICO = ID_PRESTADOR_SERVICO;
                this._COD_TUSS = COD_TUSS;
                this._NOME_PROCEDIMENTO = NOME_PROCEDIMENTO;
                this._DESC_PROCEDIMENTO = DESC_PROCEDIMENTO;
                this._VALOR_PROCEDIMENTO = VALOR_PROCEDIMENTO;
                this._DATA_CRIACAO = DATA_CRIACAO;
            }



        }

        var STATUS = function STATUS() {

            var _ID_STATUS;
            var _CODIGO;
            var _DESCRICAO;


            function STATUS() { }
            function STATUS(CODIGO, DESCRICAO) {
                this._CODIGO = CODIGO;
                this._DESCRICAO = DESCRICAO;
            }

        }

        var SYS_LOG = function SYS_LOG() {

            var _ID_SYS_LOG;
            var _TIPO_EXCECAO;
            var _EXCECAO;
            var _FONTE;
            var _STACKTRACE;
            var _INNER_TIPO_EXCECAO;
            var _INNER_EXCECAO;
            var _INNER_FONTE;
            var _INNER_STACKTRACE;


            function SYS_LOG() { }
            function SYS_LOG(TIPO_EXCECAO, EXCECAO, FONTE, STACKTRACE, INNER_TIPO_EXCECAO, INNER_EXCECAO, INNER_FONTE, INNER_STACKTRACE) {
                this._TIPO_EXCECAO = TIPO_EXCECAO;
                this._EXCECAO = EXCECAO;
                this._FONTE = FONTE;
                this._STACKTRACE = STACKTRACE;
                this._INNER_TIPO_EXCECAO = INNER_TIPO_EXCECAO;
                this._INNER_EXCECAO = INNER_EXCECAO;
                this._INNER_FONTE = INNER_FONTE;
                this._INNER_STACKTRACE = INNER_STACKTRACE;
            }

        }

        var TABELA_SERVICOS = function TABELA_SERVICOS() {

            var _ID_TABELA_SERVICOS;
            var _ID_PROCEDIMENTO;
            var _NOME_SERVICO;
            var _ID_STATUS;
            var _DESCRICAO_SERVICO;
            var _VALOR_SERVICO;
            var _ID_PRESTADOR_SERVICO;


            function TABELA_SERVICOS() { }
            function TABELA_SERVICOS(ID_PROCEDIMENTO, NOME_SERVICO, ID_STATUS, DESCRICAO_SERVICO, VALOR_SERVICO, ID_PRESTADOR_SERVICO) {
                this._ID_PROCEDIMENTO = ID_PROCEDIMENTO;
                this._NOME_SERVICO = NOME_SERVICO;
                this._ID_STATUS = ID_STATUS;
                this._DESCRICAO_SERVICO = DESCRICAO_SERVICO;
                this._VALOR_SERVICO = VALOR_SERVICO;
                this._ID_PRESTADOR_SERVICO = ID_PRESTADOR_SERVICO;
            }
        }

        var TIPO_ATENDIMENTO = function TIPO_ATENDIMENTO() {

            var _ID_TIPO_ATENDIMENTO;
            var _DESCRICAO;
            var _CODIGO;


            function TIPO_ATENDIMENTO() { }
            function TIPO_ATENDIMENTO(DESCRICAO, CODIGO) {
                this._DESCRICAO = DESCRICAO;
                this._CODIGO = CODIGO;
            }

        }

        var TIPO_EMPRESA = function TIPO_EMPRESA() {

            var _ID_TP_EMPRESA;
            var _CD_TP_EMPRESA;
            var _NM_TP_EMPRESA;


            function TIPO_EMPRESA() { }
            function TIPO_EMPRESA(CD_TP_EMPRESA, NM_TP_EMPRESA) {
                this._CD_TP_EMPRESA = CD_TP_EMPRESA;
                this._NM_TP_EMPRESA = NM_TP_EMPRESA;
            }

        }

        var TIPO_PESSOA = function TIPO_PESSOA() {

            var _ID_TIPO_PESSOA;
            var _DESCRICAO;
            var _CODIGO;


            function TIPO_PESSOA() { }
            function TIPO_PESSOA(DESCRICAO, CODIGO) {
                this._DESCRICAO = DESCRICAO;
                this._CODIGO = CODIGO;
            }


        }

        var TIPO_USUARIO = function TIPO_USUARIO() {

            var _ID_TIPO_USUARIO;
            var _DESCRICAO;
            var _CODIGO;


            function TIPO_USUARIO() { }
            function TIPO_USUARIO(DESCRICAO, CODIGO) {
                this._DESCRICAO = DESCRICAO;
                this._CODIGO = CODIGO;
            }


        }

        var UF = function UF() {

            var _ID;
            var _UF;
            var _ESTADO;
            var _CD_ESTADO;


            function UF() { }
            function UF(UF, ESTADO, CD_ESTADO) {
                this._UF = UF;
                this._ESTADO = ESTADO;
                this._CD_ESTADO = CD_ESTADO;
            }



        }

        var UF_CONSELHO = function UF_CONSELHO() {

            var _ID_UF_CONSELHO;
            var _UF;
            var _ESTADO;
            var _CD_ESTADO;


            function UF_CONSELHO() { }
            function UF_CONSELHO(UF, ESTADO, CD_ESTADO) {
                this._UF = UF;
                this._ESTADO = ESTADO;
                this._CD_ESTADO = CD_ESTADO;
            }


        }

        var USUARIO = function USUARIO() {

            var _ID_USUARIO;
            var _NOME;
            var _SOBRENOME;
            var _DATA_NASCIMENTO;
            var _DATA_CADASTRO;
            var _RG;
            var _CPF;
            var _LOGIN;
            var _EMAIL;
            var _SENHA;
            var _ID_STATUS;
            var _ID_TIPO_USUARIO;
            var _TELEFONE;


            function USUARIO() { }
            function USUARIO(NOME, SOBRENOME, DATA_NASCIMENTO, DATA_CADASTRO, RG, CPF, LOGIN, EMAIL, SENHA, ID_STATUS, ID_TIPO_USUARIO, TELEFONE) {
                this._NOME = NOME;
                this._SOBRENOME = SOBRENOME;
                this._DATA_NASCIMENTO = DATA_NASCIMENTO;
                this._DATA_CADASTRO = DATA_CADASTRO;
                this._RG = RG;
                this._CPF = CPF;
                this._LOGIN = LOGIN;
                this._EMAIL = EMAIL;
                this._SENHA = SENHA;
                this._ID_STATUS = ID_STATUS;
                this._ID_TIPO_USUARIO = ID_TIPO_USUARIO;
                this._TELEFONE = TELEFONE;
            }

        }
