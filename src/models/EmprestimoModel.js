import { DataTypes } from "sequelize";
import { sequelize } from "../configs/postgres";
import Cliente from "./ClienteModel.js";

const Emprestimo = sequelize.define(
    'emprestimos',
    {
        id: {
            type: DataTypes.INTEGER,
            prrimarykey: true,
            autoIncrement: true
        },
        dataEmprestimo: {
            field: 'data_emprestimo',
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW()
        },
        
    },
    {
        freezeTableName: true,
        timestamps: true,
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
);

Emprestimo.belongsTo(Cliente, {
    as: 'cliente',
    onUpdate: 'NO ACTION',
    onDelete: 'NO ACTION',
    foreignKey: {
        name:'idCliente',
        allowNull: false,
        field: 'id_cliente'
    }
});

export default Emprestimo;