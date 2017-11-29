package br.com.pemaza.service;

 

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;

import br.com.pemaza.domain.Client;

import java.util.List;

/**
 * @author Gustavo Machado on 27/11/2017.
 * Generic service do client
 */

public interface ClientService extends GenericService<Client, Long>{

    List<Client> searchByNomeIgnoreCase(String nome);
    List<Client> searchByCpf(String cpf);
 
}

