import { Table, Column, Model, DataType } from "sequelize-typescript";

@Table({
    tableName: 'items'
})

class Item extends Model {
    @Column({
        type: DataType.STRING(100)
    })
    declare name: string

}

export default Item