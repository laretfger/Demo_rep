import Sequelize from 'sequelize';

export const sq = new Sequelize("user", "root", "12345", {
    dialect: "sqlite",
    storage: "order.db",
    host: "localhost",
    define: {
        timestamps: false
    }
});