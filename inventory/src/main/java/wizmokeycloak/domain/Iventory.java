package wizmokeycloak.domain;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;
import javax.persistence.*;
import lombok.Data;
import wizmokeycloak.InventoryApplication;

@Entity
@Table(name = "Iventory_table")
@Data
//<<< DDD / Aggregate Root
public class Iventory {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Long stock;

    @Embedded
    private ProductId productId;

    public static IventoryRepository repository() {
        IventoryRepository iventoryRepository = InventoryApplication.applicationContext.getBean(
            IventoryRepository.class
        );
        return iventoryRepository;
    }

    //<<< Clean Arch / Port Method
    public static void updateInventory(SalesOrderCreated salesOrderCreated) {
        //implement business logic here:

        /** Example 1:  new item 
        Iventory iventory = new Iventory();
        repository().save(iventory);

        */

        /** Example 2:  finding and process
        
        repository().findById(salesOrderCreated.get???()).ifPresent(iventory->{
            
            iventory // do something
            repository().save(iventory);


         });
        */

    }
    //>>> Clean Arch / Port Method

}
//>>> DDD / Aggregate Root
