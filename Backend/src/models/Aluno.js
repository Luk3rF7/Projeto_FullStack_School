// area  modelagem banco de dados
import Sequelize, { Model } from 'sequelize';

// class model do sequelize
export default class Aluno extends Model {
  //
  static init(sequelize) {
    super.init(
      {
        // campos para ir pro BD
        nome: {
          // config para validação
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Nome precisa ter entre 3 e 255 caracteres',
            },
          },
        },

        sobrenome: {
          type: Sequelize.STRING,
          defaultValue: '',
          validate: {
            len: {
              args: [3, 255],
              msg: 'Sobrenome precisa ter entre 3 e 255 caracteres',
            },
          },
        },

        email: {
          type: Sequelize.STRING,
          defaultValue: '',
          unique: {
            msg: 'E-mail já existe.',
          },
          validate: {
            isEmail: {
              args: [],
              msg: 'E-mail inválido ',
            },
          },
        },

        idade: {
          type: Sequelize.INTEGER,
          defaultValue: '',
          validate: {
            isInt: {
              msg: 'Idade precisa ser número inteiro',
            },
          },
        },

        peso: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Peso precisa ser um número inteiro ou flutuante.',
            },
          },
        },

        altura: {
          type: Sequelize.FLOAT,
          defaultValue: '',
          validate: {
            isFloat: {
              msg: 'Altura precisa ser um número inteiro ou flutuante.',
            },
          },
        },
      },
      {
        sequelize,
      },
    );
    return this;
  }

  static associate(models) {
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}
