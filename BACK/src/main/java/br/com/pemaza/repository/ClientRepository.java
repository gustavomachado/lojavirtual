package br.com.pemaza.repository;

import br.com.pemaza.domain.Client;
import br.com.pemaza.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 *  @author Gustavo Machado on 27/11/2017.
 */
@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

    List<Client> findAllByNomeIgnoreCaseContaining(String nome);
    
    List<Client> findAllByCpfIgnoreCaseContaining(String cpf);

    /**
     * Query para buscar client pelo código, é do tipo List para evitar erros se alguém inserir um código repetido no banco
     * @param codigo
     * @return
     */

   /* @Query(value = "SELECT c FROM Client c WHERE LOWER(c.nome) LIKE %?1%")
    List<Client> searchByNomeIgnoreCase(String nome);
    
    @Query(value = "SELECT c FROM Client c WHERE LOWER(c.cpf)=?1")
    List<Client> searchByCpf(String cpf);*/

   /* @Query(value = "SELECT c FROM client c WHERE LOWER(c.nome) %?1%")
    Page<Client> searchByNomePaginatedIgnoreCase(String nome, Pageable page);*/
}
