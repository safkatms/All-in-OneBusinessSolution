import { Customer } from 'src/customer/entities/customer.entity';
import { Employee } from 'src/employee/entities/employee.entity';
import { InventoryManagement } from 'src/inventory-management/entities/inventory-management.entity';
import { Invoice } from 'src/invoice/entities/invoice.entity';
import { Leave } from 'src/leave-application/entities/leave-application.entity';
import { OrderItem } from 'src/order/entities/order-item.entity';
import { Order } from 'src/order/entities/order.entity';
import { Package } from 'src/package/entities/package.entity';
import { Payment } from 'src/payment/entities/payment.entity';
import { Payroll } from 'src/payroll/entities/payroll.entity';
import { PurchaseManagement } from 'src/purchase-management/entities/purchase-management.entity';
import { User } from 'src/user/entities/user.entity';
import { PostgresConnectionOptions } from 'typeorm/driver/postgres/PostgresConnectionOptions';

export const config: PostgresConnectionOptions = {
  type: 'postgres',
  database: 'project',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'admin',

  entities: [
    User,
    Package,
    Employee,
    Payroll,
    InventoryManagement,
    PurchaseManagement,
    Customer,
    Order,
    OrderItem,
    Invoice,
    Leave,
    Payment,
  ],
  synchronize: true,
};
