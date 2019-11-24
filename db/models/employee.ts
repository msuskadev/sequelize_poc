import { Column, Model, Table, DataType, AllowNull, Default, Is } from 'sequelize-typescript';

const EMAIL_REGEX = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

@Table({tableName: "employees"})
export class Employee extends Model<Employee> {
    @AllowNull(false)
    @Column(DataType.TEXT) 
    firstName!: string;

    @AllowNull(false)
    @Column(DataType.TEXT) 
    lastName!: string;

    @Is('EMailAddress', (value) => {
        if (!EMAIL_REGEX.test(value)) {
          throw new Error(`"${value}" is not a valid email address.`);
        }
    })
    @AllowNull(false)
    @Column(DataType.TEXT) 
    email!: string;

    @AllowNull(false)
    @Column(DataType.SMALLINT,)
    age!: number;

    @Default(true)
    @Column
    isActive!: boolean
}
