package br.com.pemaza.controller;

import java.util.List;

import javax.persistence.EntityNotFoundException;
import javax.validation.Valid;
import javax.validation.constraints.NotNull;
import org.springframework.data.domain.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import br.com.pemaza.domain.Client;
import br.com.pemaza.service.ClientService;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import io.swagger.annotations.ApiParam;

@Api(value = "Cliente controller", description = "Controller do cliente")
@RestController
@RequestMapping(value = "/client")
public class ClientController {
	@Autowired
    private final ClientService service;

    
    public ClientController(ClientService service) {
        this.service = service;
    }

    @RequestMapping(value = "/findAll", method = RequestMethod.GET)
    public Iterable<Client> getAllClient() {
        return service.getAll();
    }

    @RequestMapping(method = RequestMethod.GET)
    @ApiOperation(value = "busca todos os aparelhos com paginação")
    public Page<Client> getAllClientPaginated(
            @RequestParam(value = "page", defaultValue = "0", required = false) int page,
            @RequestParam(value = "count", defaultValue = "10", required = false) int count,
            @RequestParam(value = "order", defaultValue = "ASC", required = false) Sort.Direction direction,
            @RequestParam(value = "sort", defaultValue = "nome", required = false) String sortProperty) {

        return service.getAllPaginated(page, count, direction, sortProperty);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    @ApiOperation(value = "Encontra um cliente pelo ID")
    public Client findClient(@ApiParam(value = "Id do Cliente", required = true) @PathVariable Long id) {
    	Client client = service.get(id);
        if (client == null) {
            throw new EntityNotFoundException("cliente.nao.existe");
        } else {
            return client;
        }
    }

    @RequestMapping(method = RequestMethod.POST)
    @ApiOperation(value = "Cria um cliente")
    public Client createClient(@ApiParam(value = "Cliente", required = true) @RequestBody @Valid Client client) {
        return service.add(client);
    }

    @RequestMapping(method = RequestMethod.PUT)
    @ApiOperation(value = "Atualiza cliente")
    public Client updateClient(@ApiParam(value = "Cliente", required = true) @RequestBody @Valid Client client) {
        return service.update(client);
    }

    @RequestMapping(value = "/nome/{nome}", method = RequestMethod.GET)
    @ApiOperation(value = "Busca clientes pelo nome")
    public List<Client> searchClientByNome(
            @ApiParam(value = "Nome do cliente", required = true)
            @PathVariable(name = "nome") @NotNull(message = "Nao pode ser nulo")  String nome) {
        return service.searchByNomeIgnoreCase(nome);
    }


    @RequestMapping(value = "/cpf/{cpf}", method = RequestMethod.GET)
    @ApiOperation(value = "Busca clientes pelo cpf")
    public List<Client> searchClientByCpf(
            @ApiParam(value = "Cfp do cliente", required = true)
            @PathVariable(name = "cpf") @NotNull(message = "Nao pode ser nulo")  String cpf) {
        return service.searchByCpf(cpf);
    }

 


    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    @ApiOperation(value = "Deletar um cliente pelo ID")
    public HttpEntity<Client> deleteClient(@ApiParam(value = "Id do cliente", required = true) @PathVariable Long id) {
        service.removeById(id);
        return new ResponseEntity<>(HttpStatus.ACCEPTED);
    }
	
}
