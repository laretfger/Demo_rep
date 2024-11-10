import Sequelize from 'sequelize';
import { sq } from '../sq.js';

export const Order = sq.define("Order", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    equipment: {
      type: Sequelize.STRING,
      allowNull: false
    },
    type_of_fault: {
      type: Sequelize.STRING,
      allowNull: false
    },
    description_problem: {
      type: Sequelize.STRING,
      allowNull: false
    },
    client: {
      type: Sequelize.STRING,
      allowNull: false
    },
    status: {
      type: Sequelize.STRING,
      allowNull: false
    },
    master: {
      type: Sequelize.STRING,
      allowNull: false
    },
    isUpdate: {
      type: Sequelize.BOOLEAN,
      allowNull: false,
      default: false
    },
    date: {
      type: Sequelize.DATE,
      allowNull: false
    }
  });