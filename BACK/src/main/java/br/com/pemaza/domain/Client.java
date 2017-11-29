package br.com.pemaza.domain;
import javax.persistence.*;
import javax.validation.constraints.NotNull;

/**
 * @author Gustavo Machado on 27/11/2017.
 * 
 */
@Entity
@Table(name = "CLIENT")
public class Client {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;
 
    @NotNull(message = "Nome não pode ser nulo")
    @Column(name = "nome")
    private String nome;
  
    @NotNull(message = "CPF não pode ser nulo")
    @Column(name = "cpf",unique=true)
    private String cpf;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

   
}
