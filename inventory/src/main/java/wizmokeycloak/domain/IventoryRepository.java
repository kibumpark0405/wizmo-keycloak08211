package wizmokeycloak.domain;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import wizmokeycloak.domain.*;

//<<< PoEAA / Repository
@RepositoryRestResource(
    collectionResourceRel = "iventories",
    path = "iventories"
)
public interface IventoryRepository
    extends PagingAndSortingRepository<Iventory, Long> {}
