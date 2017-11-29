package br.com.pemaza.service.impl;

import java.util.List;
import java.util.Set;

import javax.persistence.EntityNotFoundException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort.Direction;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import br.com.pemaza.domain.Client;
import br.com.pemaza.exception.EntityInvalidException;
import br.com.pemaza.repository.ClientRepository;
import br.com.pemaza.service.ClientService;

/**
 * @author Gustavo Machado on 27/11/2017.
 * Implementação da interface ClientService
 */
@Service("clientService")
@Transactional
public class ClientServiceImpl extends GenericServiceImpl<Client, Long> implements ClientService{

    @Autowired
    private ClientRepository repository;

    @Override
    public Client add(Client client) {
       
        return repository.save(client);
    }

    @Override
    public Client update(Client client) {
        if (client.getId() == null)
            throw new EntityInvalidException(messagesService.get("cliente.id.nulo"));
        Client oldEntity = this.getValidEntity(client.getId());
        if (!oldEntity.getCpf().equals(client.getCpf()))
            this.validateUniqueCpf(client.getCpf());
        return this.repository.save(client);
    }

    @Override
    public void removeById(Long id) {
    	Client client = getValidEntity(id);
        repository.delete(client);
    }

    @Override
    public void removeEntities(Set<Client> entities) {
        if (entities == null)
            throw new EntityNotFoundException(messagesService.get("clientes.nulos"));
        for (Client client : entities) {
            client = getValidEntity(client.getId());
            repository.delete(client);
        }
    }

    @Override
    public List<Client> searchByNomeIgnoreCase(String nome) {
        return repository.findAllByNomeIgnoreCaseContaining(nome);
    }

     

    private Client getValidEntity(Long id) {
    	Client client = repository.findOne(id);
        if (client != null)
            return client;
        else
            throw new EntityNotFoundException(messagesService.get("cliente.nao.existe"));
    }

    private void validateUniqueCpf(String cpf) {
        List<Client> clientList = repository.findAllByCpfIgnoreCaseContaining(cpf);
        if (!clientList.isEmpty())
            throw new EntityInvalidException(messagesService.get("cliente.codigo.igual"));
    }

	@Override
	public List<Client> searchByCpf(String cpf) {
		 List<Client> clientList = repository.findAllByCpfIgnoreCaseContaining(cpf);
		return clientList;
	}

 

	 
 
}
