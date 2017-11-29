/**
 * 
 */
package br.com.pemaza.exception;

/**
 * @author Gustavo Machado on 27/11/2017
 * Retorna exceção de Entidade inválida para ser utilizada nas validações
 */
public final class EntityInvalidException extends RuntimeException {
	private static final long serialVersionUID = 1L;

	/**
	 * 
	 */
	public EntityInvalidException(String message) {
		super(message);
	}
	
	public EntityInvalidException(final String message, final Throwable cause) {
        super(message, cause);
    }
}
