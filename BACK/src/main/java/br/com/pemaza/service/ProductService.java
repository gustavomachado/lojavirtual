package br.com.pemaza.service;

import br.com.pemaza.domain.Product;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

import java.util.List;

/**
 * @author Gustavo Machado on 27/11/2017.
 * Generic service do produto
 */
public interface ProductService extends GenericService<Product, Long>{

    List<Product> searchByNomeIgnoreCase(String nome);
    List<Product> searchByDescricaoIgnoreCase(String descricao);
    List<Product> searchByNomeOrDescricaoIgnoreCase(String nomeOrDescricao);
    Page<Product> searchByNomeOrDescricaoPaginatedIgnoreCase(String nomeOrDescricao, int page, int count,
                                                             Sort.Direction direction, String sortProperty);
}

